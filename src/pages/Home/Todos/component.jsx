import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../../state/todos/reducer'
import { SIZE_XLG, SIZE_SM, SIZE_LG } from '../../../styles'
import binSvg from '../../../assets/svg/bin.svg'
import Svg from '../../../components/Svg/component'

const Wrap = styled.div`
  width: 240px;
  background-color: #444;
  padding: ${SIZE_XLG};
  color: #eee;
`
const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${SIZE_LG};
`
const Todo = styled.div`
  position: relative;
  display: flex;
  margin-bottom: ${SIZE_SM};

  &:last-child {
    margin-bottom: 0;
  };
`
const Name = styled.div`
  padding-right: 1.6rem;
  cursor: pointer;

  ${p => p.isDone && `
    opacity: 0.6;
  `};
`
const Actions = styled.div`
  display: none;
  position: absolute;
  right: 0;

  ${Todo}:hover & {
    display: flex;
  };
`
const Remove = styled(Svg)`
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    fill: red;
    opacity: 1;
  };
`

const Todos = () => {
  const { todos, groups } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  return (
    <Wrap>
      <Title>Todos</Title>

      {todos.map(({ id, todoName, isDone, groupId }) => (
        <Todo key={id}>
          <Name isDone={isDone} onClick={() => dispatch(actions.toggleIsDone(id))}>
            {todoName}
          </Name>
          <Actions>
            <Remove svg={binSvg} onClick={() => dispatch(actions.remove(id))} />
          </Actions>
        </Todo>
      ))}
    </Wrap>
  )
}


export default Todos
