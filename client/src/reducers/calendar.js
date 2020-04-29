import { createSlice, nanoid } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { MONTH_DAYS, MONTH_DAYS_STRING, HOURS_IN_DAY } from '../constants'
import { dummyColors, dummyColorsYeye } from './settings'
import { colorDarken } from '../utils/colorDarken'

const generateRandomIndex = () => Math.floor(Math.random() * (15 - 0 + 1)) + 0

const colors = {
  dummy1: dummyColors[generateRandomIndex()],
  dummy2: dummyColors[generateRandomIndex()],
  dummy3: dummyColors[generateRandomIndex()],
  dummy4: dummyColors[generateRandomIndex()],
  dummy5: dummyColors[generateRandomIndex()],
  dummy6: dummyColors[generateRandomIndex()],
  dummy7: dummyColors[generateRandomIndex()],
  dummy8: dummyColors[generateRandomIndex()],
  dummy9: dummyColors[generateRandomIndex()],
  dummy10: dummyColors[generateRandomIndex()],
  dummy11: dummyColors[generateRandomIndex()],
}
const initialState = {
  allTasksByDay: MONTH_DAYS_STRING.map((dateString) => ({
    tasks: [
      {
        id: nanoid(),
        time: [0, 6.75],
        name: 'sleep',
        color: colors.dummy1,
        textColor: colorDarken(dummyColorsYeye[colors.dummy1], -80),
      },
      {
        id: nanoid(),
        time: [6.75, 7.25],
        name: 'morning routine someting somethignsdsdssdsdsd',
        color: colors.dummy2,
        textColor: colorDarken(dummyColorsYeye[colors.dummy2], -80),
      },
      {
        id: nanoid(),
        time: [7.25, 8],
        name: 'something after morning',
        color: colors.dummy3,
        textColor: colorDarken(dummyColorsYeye[colors.dummy3], -80),
      },
      {
        id: nanoid(),
        time: [8, 12],
        name: 'another thing',
        color: colors.dummy4,
        textColor: colorDarken(dummyColorsYeye[colors.dummy4], -80),
      },
      {
        id: nanoid(),
        time: [12, 17],
        name: 'work',
        color: colors.dummy5,
        textColor: colorDarken(dummyColorsYeye[colors.dummy5], -80),
      },
      {
        id: nanoid(),
        time: [17, 17.5],
        name: 'work',
        color: colors.dummy6,
        textColor: colorDarken(dummyColorsYeye[colors.dummy6], -80),
      },
      {
        id: nanoid(),
        time: [18, 19],
        name: 'work',
        color: colors.dummy7,
        textColor: colorDarken(dummyColorsYeye[colors.dummy7], -80),
      },
      {
        id: nanoid(),
        time: [19, 21],
        name: 'work',
        color: colors.dummy8,
        textColor: colorDarken(dummyColorsYeye[colors.dummy8], -80),
      },
      {
        id: nanoid(),
        time: [21, 21.25],
        name: 'work',
        color: colors.dummy9,
        textColor: colorDarken(dummyColorsYeye[colors.dummy9], -80),
      },
      {
        id: nanoid(),
        time: [21.25, 22],
        name: 'work',
        color: colors.dummy10,
        textColor: colorDarken(dummyColorsYeye[colors.dummy10], -80),
      },
      {
        id: nanoid(),
        time: [22, 24],
        name: 'work',
        color: colors.dummy11,
        textColor: colorDarken(dummyColorsYeye[colors.dummy11], -80),
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
