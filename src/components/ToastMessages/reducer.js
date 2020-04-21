import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  toastMessages: [
    {
      id: nanoid(),
      message: 'task removed: finish these todos'
    },
    {
      id: nanoid(),
      message: 'task removed: get our a bit'
    },
    {
      id: nanoid(),
      message: 'task removed: finalise the design of this toast component'
    },
  ],
}

export const { reducer, actions } = createSlice({
  name: 'toastMessages',
  initialState: initialState,
  reducers: {
    add({ toastMessages }, { payload }) { toastMessages.push({
      id: nanoid(),
      message: payload,
    }) },
    remove(state, { payload }) {
      state.toastMessages = state.toastMessages.filter(x => x.id !== payload)
    },
  }
})

