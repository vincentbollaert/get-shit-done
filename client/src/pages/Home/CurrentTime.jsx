import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'
import add from 'date-fns/add'

const Wrap = styled.div`
  position: absolute;
  top: ${p => p.top}%;
  right: 0;
  left: 0;

  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 6px;
    background: #333333;
    border-radius: 50%;
    left: -3px;
    top: -3px;
  };
`
const Time = styled.span`
  padding: 4px 8px;
  font-size: 11px;
  position: absolute;
  top: 0;
  color: #333333;
  transform: translateY(-50%);
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
