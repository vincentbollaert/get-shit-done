import React, { Suspense } from 'react'

import styled from 'styled-components'
import { WHITE } from '../../styles'
import Toast from '../../components/Toast/component'

const Todos = React.lazy(() => import('./Todos'))
const Sidebar = React.lazy(() => import('./Sidebar'))
import HourLabels from './HourLabels'
import DayLabels from './DayLabels'
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
  width: 100%;
  background-color: #333;
`
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-color: ${WHITE};
`

const Home = () => {
  return (
    <PageWrap>
      <Wrap>
        <HourLabels />
        <CalendarWrap>
          <DayLabels />
          <Calendar />
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
