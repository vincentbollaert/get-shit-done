import { createSlice } from '@reduxjs/toolkit'

// export const increment = createAction('increment')
// export const decrement = createAction('decrement')

// export default createReducer(0, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload
// })


export const { reducer, actions } = createSlice({
  name: 'todos',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
    deletePost(state, action) {}
  }
})

