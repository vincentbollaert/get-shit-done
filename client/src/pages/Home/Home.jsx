import React, { Suspense } from 'react'

import styled from 'styled-components'
import { WHITE } from '../../styles'
import Toast from '../../components/Toast/component'
import useFilterHours from '../../hooks/useFilterHours'

const Todos = React.lazy(() => import('./Todos'))
const Sidebar = React.lazy(() => import('./Sidebar'))
import HourLabels from './HourLabels'
import DayLabels from './DayLabels'
import { MONTH_DAYS } from '../../constants'
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
  const [daysToShow, setDaysToShow] = useFilterDays(MONTH_DAYS)

  return (
    <PageWrap>
      <Wrap>
        <HourLabels />
        <CalendarWrap>
          <DayLabels daysToShow={daysToShow} setDaysToShow={setDaysToShow} />
          <Calendar daysToShow={daysToShow} />
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
