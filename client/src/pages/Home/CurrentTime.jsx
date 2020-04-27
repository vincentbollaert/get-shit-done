import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'
import add from 'date-fns/add'
import { WHITE } from '../../styles'

const Wrap = styled.div`
  position: absolute;
  top: ${p => p.top}%;
  right: 0px;
  left: 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #656565;

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    bottom: -4px;
    width: 8px;
    height: 8px;
    background: ${WHITE};
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #656565;
  };
`
const Time = styled.span`
  position: absolute;
  right: 0;
  padding: 4px 6px;
  font-size: 10px;
  background: #656565;
  color: #FFEB3B;
`
const MINUTES_IN_DAY = 1440

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const currentTimeRef = useRef(null)
  const date = new Date()
  const nowInMinutes = differenceInMinutes(date, startOfToday())
  currentTimeRef.current = currentTime

  function updateTime() {
    setCurrentTime(add(currentTimeRef.current, { seconds: 1 }))
  }

  useEffect(() => {
    // window.setInterval(updateTime, 1000)
  }, [])

  return (
    <Wrap top={nowInMinutes / MINUTES_IN_DAY * 100}>
      <Time>
        {format(currentTime, 'p')}
      </Time>
    </Wrap>
  )
}

export default CurrentTime
