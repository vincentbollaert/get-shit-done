import { createSlice, nanoid } from '@reduxjs/toolkit'
import { MONTH_DAYS } from '../../constants'


// sleep: [23, 0, 1, 2, 3, 4, 5, 6, 7],
// morningRoutine: [8],
// work: [9, 10, 11, 12, 13, 14, 15, 16],

const initialState = {
  tasksByDay: MONTH_DAYS.map((date) => ({
    tasks: [
      {
        time: [0, 7],
        name: 'sleep',
      },
      {
        time: [8, 10],
        name: 'morning routine',
      },
      {
        time: [12, 17],
        name: 'work',
      },
    ],
    date,
  }))
}

export const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {

  }
})
