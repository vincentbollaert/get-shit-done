import { createSlice, nanoid } from '@reduxjs/toolkit'

// export const increment = createAction('increment')
// export const decrement = createAction('decrement')

// export default createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload
// })

const initialState = {
  groups: [{
    groupName: 'development',
    id: nanoid(),
  }, {
    groupName: 'health',
    id: nanoid(),
  }],
  todos: [
    {
      id: nanoid(),
      todoName: 'finish this todo',
      isDone: false,
    },
    {
      id: nanoid(),
      todoName: 'add an input to add new todos',
      isDone: false,
    },
    {
      id: nanoid(),
      todoName: 'add validation to input',
      isDone: false,
    },
    {
      id: nanoid(),
      todoName: 'add toast for removing todos',
      isDone: false,
    },
    {
      id: nanoid(),
      todoName: 'add conditional styling for isDone',
      isDone: false,
    },
    {
      id: nanoid(),
      todoName: 'add grouping',
      isDone: false,
    },
    {
      id: nanoid(),
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
    remove: (state, { payload }) => ({ ...state, todos: state.todos.filter(x => x.id !== payload) }), // return & don't mod
    update: ({ todos }, { payload }) => {
      const todo = todos.find(x => x.id === payload)
      return todo.todoName = payload.todoName
    },
    toggleIsDone: ({ todos }, { payload }) => { // OR mod & don't return
      const todo = todos.find(x => x.id === payload)
      todo.isDone = !todo.isDone
    }
  }
})

