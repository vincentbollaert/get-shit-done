import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  toastMessages: [],
}

export const { reducer, actions } = createSlice({
  name: 'toastMessages',
  initialState: initialState,
  reducers: {
    addToast({ toastMessages }, { payload }) { toastMessages.push({
      id: nanoid(),
      message: payload.message,
      messagePrefix: payload.prefix,
    })},
    removeToast(state, { payload }) {
      state.toastMessages = state.toastMessages.filter(x => x.id !== payload)
    },
  }
})

