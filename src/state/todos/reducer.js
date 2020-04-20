import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

// export const increment = createAction('increment')
// export const decrement = createAction('decrement')

// export default createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload
// })

const initialState = {
  groups: [{
    groupName: 'development',
    id: uuid(),
  }, {
    groupName: 'health',
    id: uuid(),
  }],
  todos: [
    {
      id: uuid(),
      todoName: 'finish this todo',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add an input to add new todos',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add validation to input',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add toast for removing todos',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add conditional styling for isDone',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add grouping',
      isDone: false,
    },
    {
      id: uuid(),
      todoName: 'add renaming',
      isDone: false,
    },
  ]
}

export const { reducer, actions } = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    add: ({ todos }, { payload }) => todos.push(payload),
    remove: ({ todos }, { payload }) => todos.filter(x => x.id === payload),
    update: ({ todos }, { payload }) => {
      const todo = todos.find(x => x.id === payload)
      return todo.todoName = payload.todoName
    },
    toggleIsDone: ({ todos }, { payload }) => {
      const todo = todos.find(x => x.id === payload)
      todo.isDone = !todo.isDone
    }
  }
})

