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
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #ff5d5d;
  margin: 0 4px;
`
const Time = styled.span`
  padding: 4px;
  font-size: 10px;
  background-color: #ff5d5d;
  color: #fff;
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
