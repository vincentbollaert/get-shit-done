import React, { Fragment } from 'react'
import styled from 'styled-components'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'
import isThisWeek from 'date-fns/isThisWeek'

import { WHITE } from '../../styles'
import CurrentTime from './CurrentTime'
import { useSelector } from 'react-redux'

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
  box-shadow: inset 0px 2px 0 0px ${WHITE}, inset 0px -2px 0 0px ${WHITE};
  background-color: ${p => p.accentColor};
`

const Calendar = () => {
  const { colors } = useSelector(state => state.settings)
  const { hoursAxis, daysAxis, allTasksByDay } = useSelector(state => state.calendar)

  return (
    <Wrap>
      {daysAxis.map((dateString) => {
        const date = new Date(dateString)
        const day = format(date, 'd')
        const isCurrentDay = isToday(date)
        const tasks = allTasksByDay.find(x => x.dateString === dateString).tasks
        const tasksFiltered = tasks.map(({ id, time, name, color }, taskI) => {
          const from = time[0]
          const to = time[1]
          const isFirstTask = taskI === 0
          const isLastTask = taskI === tasks.length - 1
          const previousTo = !isFirstTask ? tasks[taskI - 1].time[1] : 0
          const firstHour = hoursAxis[0]
          const lastHourAdjusted = hoursAxis[hoursAxis.length - 1] + 1

          let heightInFlex = Math.min(to, lastHourAdjusted) - Math.max(from, firstHour)
          let gapBefore = Math.min(from - previousTo, from - firstHour, lastHourAdjusted - previousTo)
          let gapAfter = isLastTask ? lastHourAdjusted - to : 0

          return {
            id,
            heightInFlex,
            name,
            gapBefore,
            gapAfter,
            color,
          }
        })

        return (
          <Column
            key={day}
            isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
            isCurrentDay={isCurrentDay}
          >
            {isCurrentDay && <CurrentTime date={date} />}
            <HourSlots>
              {tasksFiltered.map(({ id, heightInFlex, name, gapBefore, gapAfter, color }) => {
                return (
                  <Fragment key={id}>
                    {gapBefore > 0 && <Cell isGapBefore flex={gapBefore} />}
                    {heightInFlex > 0 && <Cell flex={heightInFlex} accentColor={colors[color]}>{name}</Cell>}
                    {gapAfter > 0 && <Cell isGapAfter flex={gapAfter} />}
                  </Fragment>
                )
              })}
            </HourSlots>
          </Column>
        )
      })}
    </Wrap>
  )
}

export default Calendar
