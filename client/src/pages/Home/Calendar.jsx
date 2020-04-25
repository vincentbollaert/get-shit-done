import React from 'react'
import styled from 'styled-components'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'
import isThisWeek from 'date-fns/isThisWeek'
import isEqual from 'date-fns/isEqual'
import { WHITE } from '../../styles'

import CurrentTime from './CurrentTime'
import { useSelector } from 'react-redux'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'
const STYLE_MORNING_ROUTINE = '#3deb7c4a'

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-left: 1px solid #eee;

  &:first-child {
    border-left: 0;
  }

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
  `};

  ${p => p.isCurrentDay && `
    border-left: 1px solid #333;

    & + ${Column} {
      border-left: 1px solid #333;
    };
  `};
`

const HourSlots = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 4px;

  ${Column}:last-child & {
    padding-right: 12px;
  }

  ${Column}:first-child & {
    padding-left: 12px;
  };
`
const Cell = styled.div`
  display: flex;
  flex-grow: ${p => p.flex};
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 0;
  align-items: center;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px red;

  ${p => p.isDummy && `box-shadow: inset 0 0 0 1px green`};

  ${p => p.accentColor && `
    background-color: ${p.accentColor};
    
    ${p.isFirst && `box-shadow: inset 0px 2px 0 0px ${WHITE};`};
    ${p.isLast && `box-shadow: inset 0px -2px 0 0px ${WHITE};`};
    ${p.isOnly && `box-shadow: inset 0px 2px 0 0px ${WHITE}, inset 0px -2px 0 0px ${WHITE};`};
  `};
`

const Calendar = () => {
  const { hoursAxis, daysAxis, allTasksByDay } = useSelector(state => state.calendar)

  return (
    <Wrap>
      {daysAxis.map((date) => {
        const day = format(date, 'd')
        const isCurrentDay = isToday(date)
        const tasks = allTasksByDay.find(x => x.date === date).tasks
        console.log(tasks)

        return (
          <Column
            key={day}
            isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
            isCurrentDay={isCurrentDay}
          >
            {isCurrentDay && <CurrentTime date={date} />}
            <HourSlots>
              {tasks.map(({ time, name }, taskI) => {

                // show these tasks
                // use flex - determine height 
                // flex value PER HOUR = hoursAxis length / tasks length
                // each task gets [1] - [0] * ^ flex value
                // if gap between tasks, fill with placeholder task flex = length
                const isFirstTask = taskI === 0
                const isLastTask = taskI === tasks.length - 1
                // const 
                const gapBefore = !isFirstTask && time[0] - tasks[taskI - 1].time[1]
                const gapAfter = isLastTask && hoursAxis[hoursAxis.length - 1] + 1 - time[1]
                console.log(hoursAxis)
                // if (gapBefore) {
                //   console.log('gapBefore is ' + gapBefore)
                // }
                return (
                  <>
                    <Cell isDummy key={taskI} flex={gapBefore} />
                    <Cell key={name} flex={time[1] - time[0]}>
                      {name}
                    </Cell>
                    {isLastTask && <Cell isDummy key={taskI} flex={gapAfter} />}
                  </>
                )
              })}
            </HourSlots>
            {/* <HourSlots>
              {hoursToShow.map((hour) => {
                let accentColor = null
                let isFirst = false
                let isLast = false
                let isOnly = false
                if (data.sleep.includes(hour)) {
                  accentColor = STYLE_SLEEP
                  isFirst = hour === data.sleep[0]
                  isLast = hour === data.sleep[data.sleep.length - 1]
                  isOnly = data.sleep.length === 1
                } else if (data.work.includes(hour)) {
                  accentColor = STYLE_WORK
                  isFirst = hour === data.work[0]
                  isLast = hour === data.work[data.work.length - 1]
                  isOnly = data.work.length === 1
                } else if (data.morningRoutine.includes(hour)) {
                  accentColor = STYLE_MORNING_ROUTINE
                  isFirst = hour === data.morningRoutine[0]
                  isLast = hour === data.morningRoutine[data.morningRoutine.length - 1]
                  isOnly = data.morningRoutine.length === 1
                }
                return (
                  <Cell key={hour} accentColor={accentColor} isFirst={isFirst} isLast={isLast} isOnly={isOnly}></Cell>
                )
              })}
            </HourSlots> */}
          </Column>
        )
      })}
    </Wrap>
  )
}

export default Calendar
