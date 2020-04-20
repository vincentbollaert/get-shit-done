import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from '../../../state/todos/reducer'

const Wrap = styled.div`
  width: 240px;
  background-color: #444;
`
const Todo = styled.div`
`

const Todos = () => {
  const { todos, groups } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  console.log(todos)

  return (
    <Wrap>
      {todos.map(({ id, todoName, groupId }) => (
        <Todo key={id}>{todoName}</Todo>
      ))}
      {/* <button onClick={() => dispatch(actions.increment())}>increment</button>
      <button onClick={() => dispatch(actions.decrement())}>decrement</button> */}
      I am todos
    </Wrap>
  )
}


export default Todos
