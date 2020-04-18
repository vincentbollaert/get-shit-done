import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

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
  box-shadow: 1px 0 0 0px red;
/* 
  &:first-child {
    box-shadow: 1px 0 0 0px red, -1px 0 0 0px red;
  }; */

  &:last-child {
    box-shadow: none;
  };
`
const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 0 0px red;

  /* &:first-child {
    box-shadow: 0px 1px 0 0px red, 0px -1px 0 0px red;
  }; */

  &:last-child {
    box-shadow: none;
  };
`

const Home = () => {
  const monthDaysTotal = moment().daysInMonth()
  const monthDays = Array(monthDaysTotal).fill(null).map((day, index) => index + 1)

  const hoursInDay = Array(24).fill(null).map((item, index) => index + 1)
  console.log(monthDays)

  return (
    <Wrap>
      <Row>
        {monthDays.map(day => (
          <Column key={day}>
            {hoursInDay.map(hour => <Cell key={hour}>{hour}</Cell>)}
          </Column>
        ))}
      </Row>
    </Wrap>
  )
}

export default Home
