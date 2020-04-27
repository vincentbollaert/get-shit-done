import { createSlice, nanoid } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { MONTH_DAYS, MONTH_DAYS_STRING, HOURS_IN_DAY } from '../constants'

const initialState = {
  allTasksByDay: MONTH_DAYS_STRING.map((dateString) => ({
    tasks: [
      {
        id: nanoid(),
        time: [0, 6.75],
        name: 'sleep',
        color: 'bone',
      },
      {
        id: nanoid(),
        time: [6.75, 7.25],
        name: 'morning routine someting somethignsdsdssdsdsd',
        color: 'laurel_green',
      },
      {
        id: nanoid(),
        time: [7.25, 8],
        name: 'something after morning',
        color: 'dark_sea_green',
      },
      {
        id: nanoid(),
        time: [8, 12],
        name: 'another thing',
        color: 'bone',
      },
      {
        id: nanoid(),
        time: [12, 17],
        name: 'work',
        color: 'dark_sea_green',
      },
    ],
    dateString,
  })),
  hoursAxis: HOURS_IN_DAY,
  daysAxis: MONTH_DAYS_STRING,
}

export const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    filterHours(state, { payload: { from, to } }) {
      state.hoursAxis = HOURS_IN_DAY.filter(hour => hour >= from && hour <= to)
    },
    filterDays(state, { payload: { from, to } }) {
      state.daysAxis = MONTH_DAYS
        .filter(day => format(day, 'd') >= from && format(day, 'd') <= to)
        .map(day => day.toString())
    },
  }
})
