import React from 'react'
import styled from 'styled-components'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import startOfToday from 'date-fns/startOfToday'
import format from 'date-fns/format'

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

const CurrentTime = ({ date }) => {
  const nowInMinutes = differenceInMinutes(new Date(), startOfToday())
  console.log(nowInMinutes / MINUTES_IN_DAY * 100)
  return (
    <Wrap top={nowInMinutes / MINUTES_IN_DAY * 100}>
      <Time>
        {format(date, 'p')}
      </Time>
    </Wrap>
  )
}

export default CurrentTime
