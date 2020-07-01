import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  toast: {}
}

export const { reducer, actions } = createSlice({
  name: 'toastMessages',
  initialState: initialState,
  reducers: {
    addToast(state, { payload }) {
      state.toast = {
        id: nanoid(),
        message: payload.message,
        messagePrefix: payload.prefix,
      }
    },
    removeToast(state) {
      state.toast = {}
    },
  }
})

