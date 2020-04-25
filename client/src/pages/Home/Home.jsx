import React, { Suspense } from 'react'
import getDaysInMonth from 'date-fns/getDaysInMonth'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import sub from 'date-fns/sub'

import styled from 'styled-components'
import { WHITE } from '../../styles'
import Toast from '../../components/Toast/component'
import useFilterHours from '../../hooks/useFilterHours'

const Todos = React.lazy(() => import('./Todos'))
const Sidebar = React.lazy(() => import('./Sidebar'))
import HourLabels from './HourLabels'
import DayLabels from './DayLabels'
import { HOURS_IN_DAY } from '../../constants'
import useFilterDays from '../../hooks/useFilterDays'
import Calendar from './Calendar'


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
          <Calendar hoursToShow={hoursToShow} daysToShow={daysToShow} />
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
