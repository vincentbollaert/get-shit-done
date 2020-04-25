import React, { Suspense } from 'react'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import isToday from 'date-fns/isToday'
import getMonth from 'date-fns/getMonth'
import format from 'date-fns/format'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import isThisWeek from 'date-fns/isThisWeek'
import sub from 'date-fns/sub'

import styled from 'styled-components'
import { WHITE } from '../../styles'
import Toast from '../../components/Toast/component'
import useFilterHours from '../../hooks/useFilterHours'
import CurrentTime from './CurrentTime/component'

const Todos = React.lazy(() => import('./Todos/component'))
const Sidebar = React.lazy(() => import('./Sidebar/component'))
import HourLabels from './HourLabels/component'
import DayLabels from './DayLabels/component'
import { HOURS_IN_DAY } from '../../constants'
import useFilterDays from '../../hooks/useFilterDays'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'
const STYLE_MORNING_ROUTINE = '#3deb7c4a'

const PageWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`
const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  background-color: #333;
`
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  background-color: ${WHITE};
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
const Calendar = styled.div`
  display: flex;
  flex-grow: 1;
`
const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  ${p => p.accentColor && `
    background-color: ${p.accentColor};
    
    ${p.isFirst && `box-shadow: inset 0px 2px 0 0px ${WHITE};`};
    ${p.isLast && `box-shadow: inset 0px -2px 0 0px ${WHITE};`};
    ${p.isOnly && `box-shadow: inset 0px 2px 0 0px ${WHITE}, inset 0px -2px 0 0px ${WHITE};`};
  `};
`

const data = {
  sleep: [23, 0, 1, 2, 3, 4, 5, 6, 7],
  morningRoutine: [8],
  work: [9, 10, 11, 12, 13, 14, 15, 16],
}

const Home = () => {
  const monthDays = eachDayOfInterval({
    start: sub(lastDayOfMonth(new Date()), { days: getDaysInMonth(new Date()) - 1 }),
    end: lastDayOfMonth(new Date())
  })
  const [hoursToShow, setHoursToShow] = useFilterHours(HOURS_IN_DAY)
  const [daysToShow, setDaysToShow] = useFilterDays(monthDays)

  return (
    <PageWrap>
      <Wrap>
        <HourLabels hoursToShow={hoursToShow} setHoursToShow={setHoursToShow} />
        <CalendarWrap>
          <DayLabels daysToShow={daysToShow} setDaysToShow={setDaysToShow} />
          <Calendar>
            {daysToShow.map((date) => {
              const day = format(date, 'd')
              const isCurrentDay = isToday(date)

              return (
                <Column
                  key={day}
                  isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
                  isCurrentDay={isCurrentDay}
                >
                  {isCurrentDay && <CurrentTime date={date} />}
                  <HourSlots>
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
                  </HourSlots>
                </Column>
              )
            })}
          </Calendar>
          
          {/* {monthDays.map((date) => {
            const day = format(date, 'd')
            const dayOfWeek = format(date, 'EEEEE')
            const isCurrentDay = isToday(date)

            return (
              <Column
                key={day}
                isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
                isCurrentDay={isCurrentDay}
              >
                <DayLabel isCurrentDay={isCurrentDay}>
                  {day} {dayOfWeek}
                </DayLabel>
              </Column>
            )
          })} */}
        </CalendarWrap>
        <Toast />
      </Wrap>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar>
          <Todos />
        </Sidebar>
      </Suspense>
    </PageWrap>
  )
}

export default Home
