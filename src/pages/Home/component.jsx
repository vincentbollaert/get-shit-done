import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { WHITE, BOX_SHADOW_LIGHT } from '../../styles'
import { RangeField } from '../../components/form'

const STYLE_SLEEP = '#5bccff38'
const STYLE_WORK = '#efc55352'
const STYLE_MORNING_ROUTINE = '#3deb7c4a'

const Wrap = styled.div`
  height: 100%;
`
const PageActions = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: flex-end;
`
const Paper = styled.div`
  position: relative;
  padding: 2rem 0;
  height: 100%;
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW_LIGHT};
`
const CalendarWrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`
const HourLabels = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0 4px 8px;
`
const HourLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-right: 4px;
  text-align: center;
  font-size: 10px;
  color: #c4c4c4;

  &::before {
    display: block;
    content: '';
    position: absolute;
    right: 0;
    width: 4px;
    height: 1px;
    bottom: 0;
    background-color: #e0e0e0;
  };
`
const Row = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  opacity: 0.8;
  border-left: 1px solid #eee;
  padding: 4px;

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
    opacity: 1;
  `};

  ${p => p.isCurrentDay && `
  `};
  
  &:last-child {
    border-right: 2px solid ${WHITE};
  };
`
const DayLabel = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  left: 0;
  text-align: center;
  font-size: 10px;
  color: #c4c4c4;
`
const Cell = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  ${p => p.accentColor && `
    background-color: ${p.accentColor};
    
    ${p.isFirst && `box-shadow: inset 0px 4px 0 0px ${WHITE}`};
    ${p.isLast && `box-shadow: inset 0px -4px 0 0px ${WHITE}`};
    ${p.isOnly && `box-shadow: inset 0px 4px 0 0px ${WHITE}, inset 0px -4px 0 0px ${WHITE}`};
  `};

  /* &:first-child {
    box-shadow: 0px 1px 0 0px red, 0px -1px 0 0px red;
  }; */
`

const data = {
  sleep: [23, 0, 1, 2, 3, 4, 5, 6, 7],
  morningRoutine: [8],
  work: [9, 10, 11, 12, 13, 14, 15, 16],
}

const Home = () => {
  const monthDaysTotal = moment().daysInMonth()
  const monthDays = Array(monthDaysTotal).fill(null).map((day, index) => index + 1)

  const hoursInDay = Array(24).fill(null).map((item, index) => index)
  console.log(monthDays)

  return (
    <Wrap>
      <PageActions>
        <RangeField label="some label" max={24} idFrom="min" idTo="max" valueFrom={7} valueTo={20} />
      </PageActions>
      <Paper>
        <CalendarWrap>
          <HourLabels>
            {hoursInDay.map((hour) => <HourLabel key={hour}>{hour}</HourLabel>)}
          </HourLabels>
          <Row>
            {monthDays.map((day, index) => (
              <Column key={day} isCurrentWeek={index > 2 && index < 10} isCurrentDay={index === 4}>
                <DayLabel>{day}</DayLabel>
                {hoursInDay.map((hour) => {
                  let accentColor = null
                  let isFirst = false
                  let isLast = false
                  let isOnly = false
                  if (data.sleep.includes(hour)) {
                    accentColor = STYLE_SLEEP
                    isFirst = hour === data.sleep[0]
                    isLast = hour === data.sleep[data.sleep.length - 1]
                    isOnly = data.sleep.length === 1
                  } else if (data.work.includes(hour)) {
                    accentColor = STYLE_WORK
                    isFirst = hour === data.work[0]
                    isLast = hour === data.work[data.work.length - 1]
                    isOnly = data.work.length === 1
                  } else if (data.morningRoutine.includes(hour)) {
                    accentColor = STYLE_MORNING_ROUTINE
                    isFirst = hour === data.morningRoutine[0]
                    isLast = hour === data.morningRoutine[data.morningRoutine.length - 1]
                    isOnly = data.morningRoutine.length === 1
                  }
                  return (
                    <Cell key={hour} accentColor={accentColor} isFirst={isFirst} isLast={isLast} isOnly={isOnly}></Cell>
                  )
                })}
              </Column>
            ))}
          </Row>
        </CalendarWrap>
      </Paper>
    </Wrap>
  )
}

export default Home
