import React, { Fragment } from 'react'
import styled from 'styled-components'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'

import { WHITE, SIZE_XSM, WHITE_SMOKE, ISABELLINE, STYLE_TRANSITION } from '../../styles'
import CurrentTime from './CurrentTime'
import { useSelector } from 'react-redux'

const CN_HOUR_SLOTS = 'hour-slots'

const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  transform-origin: bottom right;
  transition: transform ${STYLE_TRANSITION};
  transform: ${p => `scale(${p.x}, ${p.y})`};
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-left: 1px solid ${ISABELLINE};
  width: 0;

  &:first-child {
    border-left: 0;
  }

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
  `};

  ${p => p.isCurrentDay && `
    flex-grow: 2;
    background-color: ${WHITE_SMOKE};

    .${CN_HOUR_SLOTS} * {
      box-shadow: inset 0px 1px 0 0px ${WHITE_SMOKE}, inset 0px -1px 0 0px ${WHITE_SMOKE} !important;
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
const STYLE_ELLIPSIS = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Cell = styled.div`
  display: flex;
  flex-grow: ${p => p.flex};
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 0;
  align-items: center;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0px ${WHITE}, inset 0px -1px 0 0px ${WHITE};
  background-color: ${p => p.accentColor};
  display: block;
  padding: 0 ${SIZE_XSM};
  line-height: 1.5;
  color: ${p => p.textColor};
  ${p => p.isSmall && `
    line-height: 0.9;
  `}
  ${STYLE_ELLIPSIS};
`

const Calendar = ({ scale: { x, y } }) => {
  const { colors } = useSelector(state => state.settings)
  const { hoursAxis, daysAxis, allTasksByDay } = useSelector(state => state.calendar)

  return (
    <Wrap x={x} y={y}>
      {daysAxis.map((dateString) => {
        const date = new Date(dateString)
        const day = format(date, 'd')
        const isCurrentDay = isToday(date)
        const tasks = allTasksByDay.find(x => x.dateString === dateString).tasks
        const tasksFiltered = tasks.map(({ id, time, name, color, textColor }, taskI) => {
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
            textColor,
          }
        })

        return (
          <Column key={day} isCurrentDay={isCurrentDay}>
            {isCurrentDay && <CurrentTime date={date} />}
            <HourSlots className={CN_HOUR_SLOTS}>
              {tasksFiltered.map(({ id, heightInFlex, name, gapBefore, gapAfter, color, textColor }) => {
                return (
                  <Fragment key={id}>
                    {gapBefore > 0 && <Cell isGapBefore flex={gapBefore} />}
                    {heightInFlex > 0 && (
                      <Cell
                        flex={heightInFlex}
                        accentColor={colors[color]}
                        textColor={textColor}
                        isSmall={hoursAxis.length > 16 && heightInFlex <= 0.25}
                      >
                        {name}
                      </Cell>
                    )}
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
