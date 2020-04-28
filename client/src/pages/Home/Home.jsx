import React, { Suspense, useState, useRef } from 'react'

import styled from 'styled-components'
import { WHITE, JET, STYLE_TRANSITION, CHARCOAL, STYLE_SIDEBAR_WIDTH_UNIT } from '../../styles'
import Toast from '../../components/Toast/component'

const Todos = React.lazy(() => import('./Todos'))
const Sidebar = React.lazy(() => import('./Sidebar'))
import HourLabels from './HourLabels'
import DayLabels from './DayLabels'
import Calendar from './Calendar'
import useScaleForTransition from '../../hooks/useScaleForTransition'


const PageWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: ${CHARCOAL};
`
const Wrap = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  padding-left: 24px;
  width: 100%;
  background-color: ${JET};
  will-change: padding;
  transform-origin: left;
  transition: transform ${STYLE_TRANSITION};
  ${p => p.isOpen && `
    transform: scaleX(${p.scale});
  `};
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
  const [isOpen, setIsOpen] = useState(false)
  const [wrapScale, setWrapScale] = useScaleForTransition()
  const [calendarScale, setCalendarScale] = useScaleForTransition()
  const wrapRef = useRef(null)
  const calendarRef = useRef(null)

  const onHourLabelClick = ({ show }) => {
    setCalendarScale({ ref: calendarRef, inPixels: 26, show })
  }
  const onSidebarClick = () => {
    setIsOpen(o => !o)
    setWrapScale({ ref: wrapRef, inPixels: STYLE_SIDEBAR_WIDTH_UNIT * 10 })
  }

  return (
    <PageWrap>
      <Wrap isOpen={isOpen} scale={wrapScale} ref={wrapRef}>
        <HourLabels handleClick={onHourLabelClick} />
        <CalendarWrap ref={calendarRef}>
          <DayLabels />
          <Calendar scale={calendarScale} />
        </CalendarWrap>
        <Toast />
      </Wrap>
      
      <Suspense fallback={<div />}>
        <Sidebar isOpen={isOpen} setIsOpen={onSidebarClick}>
          <Todos />
        </Sidebar>
      </Suspense>
    </PageWrap>
  )
}

export default Home
