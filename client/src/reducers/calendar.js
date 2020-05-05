import { createSlice, nanoid } from '@reduxjs/toolkit'
import format from 'date-fns/format'
import { MONTH_DAYS, MONTH_DAYS_STRING, HOURS_IN_DAY } from '../constants'

const initialState = {
  taskBeingPrepared: undefined,
  taskBeingEdited: {},
  allTasksByDay: MONTH_DAYS_STRING.map((dateString, index) => {
    let tasks = []
    if (index === 0) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 7.25],
          name: 'sleep',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [7.25, 8.5],
          name: 'morning routine',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [8.5, 11.25],
          name: 'dev: get shit together',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [11.25, 12],
          name: 'break',
          group: 'productivity break',
        },
        {
          id: nanoid(),
          time: [12, 12.5],
          name: 'dev: get shit together',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [12.5, 14],
          name: 'dev/lunch',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [14, 14.5],
          name: 'shower',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [14.5, 18.5],
          name: 'dev: get shit together',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [18.5, 19],
          name: 'break',
          group: 'productivity break',
        },
        {
          id: nanoid(),
          time: [19, 20.25],
          name: 'dev: get shit together',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [20.25, 23],
          name: 'relax',
          group: 'laze',
        },
      ]
    }
    if (index === 1) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 6.5],
          name: 'sleep',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [6.5, 7],
          name: 'lie in bed',
          group: 'laze',
        },
        {
          id: nanoid(),
          time: [7, 7.75],
          name: 'in bed watch react talk',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [7.45, 8.75],
          name: 'morning routine',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [8.75, 9.5],
          name: 'head out with mai',
          group: 'health',
        },
        {
          id: nanoid(),
          time: [9.5, 12.5],
          name: 'watch react videos',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [12.5, 14],
          name: 'dev: get shit done',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [14, 15],
          name: 'cooking, mai',
          group: 'health',
        },
        {
          id: nanoid(),
          time: [15, 19],
          name: 'dev: get shit done',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [19, 23],
          name: 'relax pt 1',
          group: 'laze',
        },
      ]
    }
    if (index === 2) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 8],
          name: 'sleep',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [8, 8.5],
          name: 'in bed watch upskill',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [8.5, 9.5],
          name: 'morning routine',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [9.5, 11.5],
          name: 'watch upskill',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [11.5, 12],
          name: 'dev: get shit done',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [12, 22.5],
          name: 'relax, dev videos',
          group: 'laze',
        },
      ]
    }
    if (index === 3) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 6],
          name: 'sleep',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [6, 7],
          name: 'morning routine',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [7, 13],
          name: 'watch upskill fp',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [13, 14.5],
          name: 'make food',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [14.5, 17],
          name: 'play pool',
          group: 'leasure',
        },
        {
          id: nanoid(),
          time: [17, 18.5],
          name: 'relax',
          group: 'productivity break',
        },
        {
          id: nanoid(),
          time: [18.5, 20],
          name: 'watch upskill fp',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [20, 22.5],
          name: 'relax',
          group: 'laze',
        },
      ]
    }
    if (index === 4) {
      tasks = [
        {
          id: nanoid(),
          time: [0, 9],
          name: 'sleep',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [9, 10],
          name: 'reddit in bed',
          group: 'laze',
        },
        {
          id: nanoid(),
          time: [10, 11],
          name: 'morning routine',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [11, 12],
          name: 'youtube',
          group: 'laze',
        },
        {
          id: nanoid(),
          time: [12, 13],
          name: 'dev: get shit done',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [13, 14],
          name: 'lunch',
          group: 'essentials',
        },
        {
          id: nanoid(),
          time: [14, 20],
          name: 'dev: get shit done',
          group: 'improvement',
        },
        {
          id: nanoid(),
          time: [20, 22.5],
          name: 'relax',
          group: 'laze',
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
    prepareTask(state, { payload: { name, group, from, to } }) {
      console.log('being prepared', { name, group, from, to })
      const taskBeingPrepared = {
        time: [from, 16],
        name,
        group: group?.name,
      }
      state.taskBeingPrepared = taskBeingPrepared
    },
    removePreparedTask(state) {
      state.taskBeingPrepared = undefined
    },
    editTask(state, { payload: { id, dateString } }) {
      state.taskBeingEdited = state.allTasksByDay
        .filter(x => x.dateString === dateString)[0].tasks
        .find(x => x.id === id)
    },
    saveTask(state, { payload: { id, name, dateString, group, from, to }}) {
      return {
        ...state,
        allTasksByDay: state.allTasksByDay.map((day) => {
          if (day.dateString !== dateString) return day
          return {
            ...day,
            tasks: day.tasks.map((task) => {
              if (task.id !== id) return task
              return {
                ...task,
                name,
                group,
                time: [Number(from), Number(to)]
              }
            })
          }
        }),
      }
    },
    addTask(state, { payload: { name, dateString, group, from, to }}) {
      console.log(name, dateString, group, from, to)
      const dayToUpdate = state.allTasksByDay.find(tasksByDay => tasksByDay.dateString === dateString)

      state.taskBeingEdited = {}
      dayToUpdate.tasks.push({
        id: nanoid(),
        time: [from, to],
        name,
        group: group.name,
      })
    }
  }
})
