import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { WHITE } from '../../styles'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'

const Wrap = styled.div`
  height: 100%;
`
const Row = styled.div`
  display: flex;
  height: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-left: 1px solid #eee;
  
  &:first-child {
    border-left: 0;
  };
`
const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  ${p => p.accentColor && `
    box-shadow: inset 4px 0px 0 0px ${WHITE}, inset -4px 0px 0 0px ${WHITE};
    background-color: ${p.accentColor};
    
    ${p.isFirst && `box-shadow: inset 4px 0px 0 0px ${WHITE}, inset -4px 0px 0 0px ${WHITE}, inset 0px 4px 0 0px ${WHITE}`};
    ${p.isLast && `box-shadow: inset 4px 0px 0 0px ${WHITE}, inset -4px 0px 0 0px ${WHITE}, inset 0px -4px 0 0px ${WHITE}`};
  `};

  /* &:first-child {
    box-shadow: 0px 1px 0 0px red, 0px -1px 0 0px red;
  }; */
`

const data = {
  sleep: [23, 0, 1, 2, 3, 4, 5, 6, 7],
  work: [9, 10, 11, 12, 13, 14, 15, 16],
}

const Home = () => {
  const monthDaysTotal = moment().daysInMonth()
  const monthDays = Array(monthDaysTotal).fill(null).map((day, index) => index + 1)

  const hoursInDay = Array(24).fill(null).map((item, index) => index)
  console.log(monthDays)

  return (
    <Wrap>
      <Row>
        {monthDays.map(day => (
          <Column key={day}>
            {hoursInDay.map((hour) => {
              let accentColor = null
              let isFirst = false
              let isLast = false
              if (data.sleep.includes(hour)) {
                accentColor = STYLE_SLEEP
                isFirst = hour === data.sleep[0]
                isLast = hour === data.sleep[data.sleep.length - 1]
              } else if (data.work.includes(hour)) {
                accentColor = STYLE_WORK
                isFirst = hour === data.work[0]
                isLast = hour === data.work[data.work.length - 1]
              }
              return (
                <Cell key={hour} accentColor={accentColor} isFirst={isFirst} isLast={isLast}></Cell>
              )
            })}
          </Column>
        ))}
      </Row>
    </Wrap>
  )
}

export default Home
