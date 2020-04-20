import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../../state/todos/reducer'
import { SIZE_XLG, SIZE_SM, SIZE_LG } from '../../../styles'

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
  margin-bottom: ${SIZE_SM};

  &:last-child {
    margin-bottom: 0;
  };
`
const Name = styled.div`
  cursor: pointer;

  ${p => p.isDone && `
    opacity: 0.6;
  `};
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
        </Todo>
      ))}
    </Wrap>
  )
}


export default Todos
