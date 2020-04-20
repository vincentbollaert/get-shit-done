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
  todos: [{
    id: uuid(),
    todoName: 'finish this todo',
  }]
}

export const { reducer, actions } = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    add: ({ todos }, { payload }) => todos.push(payload),
    remove: ({ todos }, { payload }) => todos.filter(x => x.id === payload.id),
    update: ({ todos }, { payload }) => {
      const todo = todos.find(x => x.id === payload.id)
      return todo.todoName = payload.todoName
    }
  }
})

