import { createSlice, nanoid } from '@reduxjs/toolkit'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'
const STYLE_MORNING_ROUTINE = '#3deb7c4a'

const initialState = {
  colors: {
    bone: '#5bccff38',
    laurel_green: '#3deb7c4a',
    dark_sea_green: '#efc55352',
  },
}

export const { reducer, actions } = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
})
