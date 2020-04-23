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
import { WHITE, BOX_SHADOW_LIGHT } from '../../styles'
import { RangeField } from '../../components/form'
import Toast from '../../components/Toast/component'
import useFilterHours from '../../hooks/useFilterHours'
import CurrentTime from './CurrentTime/component'

// import Sidebar from './Sidebar/component'
// import Todos from './Todos/component'

const Todos = React.lazy(() => import('./Todos/component'))
const Sidebar = React.lazy(() => import('./Sidebar/component'))
import HourLabels from './HourLabels/component'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'
const STYLE_MORNING_ROUTINE = '#3deb7c4a'

const PageWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`
const Wrap = styled.div`
  flex-grow: 1;
  padding: 2.4rem 0;
  position: relative;
  background-color: #333;
`
const CalendarWrap = styled.div`
  display: flex;
  height: 100%;
  background-color: ${WHITE};
`
const Row = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  opacity: 0.8;
  border-left: 1px solid #eee;
  padding: 12px 4px;

  &:first-child {
    padding-left: 12px;
  };

  &:last-child {
    padding-right: 12px;
  };

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
    opacity: 1;
  `};

  ${p => p.isCurrentDay && `
    border-left: 1px solid #333;

    & + ${Column} {
      border-left: 1px solid #333;
    };
  `};
  
  &:last-child {
    border-right: 2px solid ${WHITE};
  };
`
const DayLabel = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 10px;
  color: #c4c4c4;
  background: #333;
  height: 24px;
  bottom: 100%;
  top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${p => p.isBottom && `
    top: 100%;
    bottom: auto;

    &::before {
      top: 0;
      bottom: auto;
    };
  `};

  ${p => p.isCurrentDay && `
    color: #333;
    background-color: ${WHITE};
  `};

  &::before {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 6px;
    bottom: 0;
    background-color: #ffffff42;

    ${Column}:last-child & {
      display: none;
    };
  };
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
  const [hoursToShow, setHoursToShow] = useFilterHours()
  // const monthDaysTotal = getDaysInMonth(new Date())
  // const monthDays = Array(monthDaysTotal).fill(null).map((day, index) => index + 1)
  const monthDays = eachDayOfInterval({
    start: sub(lastDayOfMonth(new Date()), { days: getDaysInMonth(new Date()) - 1 }),
    end: lastDayOfMonth(new Date())
  })
  console.log(hoursToShow)

  return (
    <PageWrap>
      <Wrap>
        {/* <PageActions>
          <RangeField
            min={0}
            max={23}
            idFrom="min"
            idTo="max"
            valueFrom={hoursToShow[0]}
            valueTo={hoursToShow[hoursToShow.length - 1]}
            onChange={setHoursToShow}
          />
        </PageActions> */}
        <CalendarWrap>
          <HourLabels hoursToShow={hoursToShow} setHoursToShow={setHoursToShow} />
          <Row>
            {monthDays.map((date, index) => {
              const day = format(date, 'd')
              const dayOfWeek = format(date, 'EEEEE')
              const isCurrentDay = isToday(date)

              return (
                <Column
                  key={day}
                  isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
                  isCurrentDay={isCurrentDay}
                >
                  <DayLabel isCurrentDay={isCurrentDay}>{day} {dayOfWeek}</DayLabel>
                  {isCurrentDay && <CurrentTime date={date} />}
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
                  <DayLabel isBottom isCurrentDay={isCurrentDay}>{day} {dayOfWeek}</DayLabel>
                </Column>
              )
            })}
          </Row>
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
