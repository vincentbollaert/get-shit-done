import React, { Suspense, useState, useRef } from 'react'

import styled from 'styled-components'
import { WHITE, JET, STYLE_TRANSITION, CHARCOAL, STYLE_SIDEBAR_WIDTH_UNIT } from '../../styles'
import Toast from '../../components/Toast/component'

const Todos = React.lazy(() => import('./Todos'))
const Sidebar = React.lazy(() => import('./Sidebar'))
import HourLabels from './HourLabels'
import DayLabels from './DayLabels'
import Calendar from './Calendar'
import useConvertPXToScale from '../../hooks/useConvertPXToScale'


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
  const [scaleToTransition, setScale] = useConvertPXToScale()
  const wrapRef = useRef(null)

  const onSidebarClick = () => {
    setIsOpen(o => !o)
    setScale({ ref: wrapRef, inPixels: STYLE_SIDEBAR_WIDTH_UNIT * 10 })
  }

  return (
    <PageWrap>
      <Wrap isOpen={isOpen} scale={scaleToTransition} ref={wrapRef}>
        <HourLabels />
        <CalendarWrap>
          <DayLabels />
          <Calendar />
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
