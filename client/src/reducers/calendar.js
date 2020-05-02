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
  allTasksByDay: MONTH_DAYS_STRING.map((dateString, index) => {
    let tasks = []
    if (index === 0) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 7.25],
          name: 'sleep',
          color: colors.dummy1,
          textColor: colorDarken(dummyColorsYeye[colors.dummy1], -80),
        },
        {
          id: nanoid(),
          time: [7.25, 8.5],
          name: 'morning routine',
          color: colors.dummy2,
          textColor: colorDarken(dummyColorsYeye[colors.dummy2], -80),
        },
        {
          id: nanoid(),
          time: [8.5, 11.25],
          name: 'dev: get shit together',
          color: colors.dummy3,
          textColor: colorDarken(dummyColorsYeye[colors.dummy3], -80),
        },
        {
          id: nanoid(),
          time: [11.25, 12],
          name: 'break',
          color: colors.dummy4,
          textColor: colorDarken(dummyColorsYeye[colors.dummy4], -80),
        },
        {
          id: nanoid(),
          time: [12, 12.5],
          name: 'dev: get shit together',
          color: colors.dummy5,
          textColor: colorDarken(dummyColorsYeye[colors.dummy5], -80),
        },
        {
          id: nanoid(),
          time: [12.5, 14],
          name: 'dev/lunch',
          color: colors.dummy6,
          textColor: colorDarken(dummyColorsYeye[colors.dummy6], -80),
        },
        {
          id: nanoid(),
          time: [14, 14.5],
          name: 'shower',
          color: colors.dummy7,
          textColor: colorDarken(dummyColorsYeye[colors.dummy7], -80),
        },
        {
          id: nanoid(),
          time: [14.5, 18.5],
          name: 'dev: get shit together',
          color: colors.dummy8,
          textColor: colorDarken(dummyColorsYeye[colors.dummy8], -80),
        },
        {
          id: nanoid(),
          time: [18.5, 19],
          name: 'break',
          color: colors.dummy9,
          textColor: colorDarken(dummyColorsYeye[colors.dummy9], -80),
        },
        {
          id: nanoid(),
          time: [19, 20.25],
          name: 'dev: get shit together',
          color: colors.dummy10,
          textColor: colorDarken(dummyColorsYeye[colors.dummy10], -80),
        },
        {
          id: nanoid(),
          time: [20.25, 23],
          name: 'relax',
          color: colors.dummy11,
          textColor: colorDarken(dummyColorsYeye[colors.dummy11], -80),
        },
      ]
    }
    if (index === 1) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 6.5],
          name: 'sleep',
          color: colors.dummy1,
          textColor: colorDarken(dummyColorsYeye[colors.dummy1], -80),
        },
        {
          id: nanoid(),
          time: [6.5, 7],
          name: 'lie in bed',
          color: colors.dummy2,
          textColor: colorDarken(dummyColorsYeye[colors.dummy2], -80),
        },
        {
          id: nanoid(),
          time: [7, 7.75],
          name: 'in bed watch react talk',
          color: colors.dummy3,
          textColor: colorDarken(dummyColorsYeye[colors.dummy3], -80),
        },
        {
          id: nanoid(),
          time: [7.45, 8.75],
          name: 'morning routine',
          color: colors.dummy4,
          textColor: colorDarken(dummyColorsYeye[colors.dummy4], -80),
        },
        {
          id: nanoid(),
          time: [8.75, 9.5],
          name: 'head out with mai',
          color: colors.dummy5,
          textColor: colorDarken(dummyColorsYeye[colors.dummy5], -80),
        },
        {
          id: nanoid(),
          time: [9.5, 12.5],
          name: 'watch react videos',
          color: colors.dummy6,
          textColor: colorDarken(dummyColorsYeye[colors.dummy6], -80),
        },
        {
          id: nanoid(),
          time: [12.5, 18],
          name: 'dev: get shit done',
          color: colors.dummy7,
          textColor: colorDarken(dummyColorsYeye[colors.dummy7], -80),
        },
        {
          id: nanoid(),
          time: [18, 19],
          name: 'cooking, mai',
          color: colors.dummy8,
          textColor: colorDarken(dummyColorsYeye[colors.dummy8], -80),
        },
        {
          id: nanoid(),
          time: [19, 20.5],
          name: 'interpersonal courses',
          color: colors.dummy7,
          textColor: colorDarken(dummyColorsYeye[colors.dummy7], -80),
        },
        {
          id: nanoid(),
          time: [20.5,21],
          name: 'shower, prepare for relax',
          color: colors.dummy8,
          textColor: colorDarken(dummyColorsYeye[colors.dummy8], -80),
        },
        {
          id: nanoid(),
          time: [21, 22],
          name: 'relax',
          color: colors.dummy9,
          textColor: colorDarken(dummyColorsYeye[colors.dummy9], -80),
        },
      ]
    }
    return {
      tasks,
      dateString,
    }
  }),
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
    addTask(state, { payload: { name, dateString, group, from, to }}) {
      const { color } = group
      const taskToUpdate = state.allTasksByDay.find(tasksByDay => tasksByDay.dateString === dateString)

      taskToUpdate.tasks.push({
        id: nanoid(),
        time: [from, to],
        name,
        group: group.name,
        color: color.name,
        textColor: colorDarken(color.value, -80),
      })
    }
  }
})
