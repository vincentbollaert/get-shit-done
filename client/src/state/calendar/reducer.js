import { createSlice, nanoid } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { MONTH_DAYS, HOURS_IN_DAY } from '../../constants'


// allTasks
// move day filter in here
// move hour filter here
// filteredTasks = tasksByDay filtered by day and hours

const initialState = {
  allTasksByDay: MONTH_DAYS.map((date) => ({
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
  })),
  hoursAxis: HOURS_IN_DAY,
  daysAxis: MONTH_DAYS,
}

export const { reducer, actions } = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    filterHours(state, { payload: { from, to } }) {
      state.hoursAxis = HOURS_IN_DAY.filter(hour => hour >= from && hour <= to)
    },
    filterDays(state, { payload: { from, to } }) {
      state.daysAxis = MONTH_DAYS.filter(day => format(day, 'd') >= from && format(day, 'd') <= to)
    },
  }
})
