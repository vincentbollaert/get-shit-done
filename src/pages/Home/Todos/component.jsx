import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actions as todoActions } from '../../../state/todos/reducer'
import { actions as toastActions } from '../../../components/ToastMessages/reducer'
import { SIZE_XLG, SIZE_XSM, QUICK_SILVER, ISABELLINE } from '../../../styles'
import binSvg from '../../../assets/svg/bin.svg'
import Svg from '../../../components/Svg/component'

import AddNewTodo from '../AddNewTodo/component'

const Wrap = styled.div`
  width: 240px;
  background-color: #444;
  padding: ${SIZE_XLG};
  color: ${ISABELLINE};
`
const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3.4rem;
`
const Todo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${SIZE_XSM} 1.6rem ${SIZE_XSM} 0;
  cursor: pointer;
  line-height: 1.5;

  &:hover {
    color: ${QUICK_SILVER};
  };
`
const Name = styled.div`
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
`

const Todos = () => {
  const { add, remove, toggleIsDone } = todoActions
  const { todos } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const onAddNewTodo = ({ todo }) => { dispatch(add(todo)) }
  const onRemoveTodo = (id, name) => {
    dispatch(remove(id))
    dispatch(toastActions.addToast({ prefix: 'task removed', message: name }))
  }
  console.log(todos)

  return (
    <Wrap>
      <Title>Todos</Title>
      
      <AddNewTodo addNewTodo={onAddNewTodo} />
      {todos.map(({ id, todoName, isDone }) => (
        <Todo key={id}>
          <Name isDone={isDone} onClick={() => dispatch(toggleIsDone(id))}>
            {todoName}
          </Name>
          <Actions>
            <Remove isDanger theme="light" svg={binSvg} onClick={() => onRemoveTodo(id, todoName)} />
          </Actions>
        </Todo>
      ))}
    </Wrap>
  )
}


export default Todos
