import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  background-color: #333;
`
const HourLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-right: 4px solid #333;
  padding-left: 8px;
  text-align: center;
  font-size: 10px;
  color: #c4c4c4;
  transition: padding 0.1s ease-out;

  &:hover {
    background-color: ${p => p.isCustomSet ? 'inherit' : '#444'};
    cursor: ${p => p.isCustomSet ? 'inherit' : 'pointer'};
  };

  ${Wrap}:hover & {
    padding: 0 16px;

    ${p => p.isCustomFrom && p.isFrom && 'background-color: #595959;'};
  };

  &::before {
    display: block;
    content: '';
    position: absolute;
    right: -4px;
    width: 6px;
    height: 1px;
    bottom: 0;
    background-color: #ffffff42;

    ${Wrap}:hover & {
      content: none;
    };
  };

  &:last-child {
    &::before {
      display: none;
    };
  };
`

const HourLabels = ({ hoursToShow, setHoursToShow }) => {
  const [{ from, fromSet }, setFrom] = useState({ from: 0, fromSet: false })
  const [{ to, toSet }, setTo] = useState({ to: 23, toSet: false })

  const onClick = (hour) => {
    if (!fromSet) {
      setFrom({ from: hour, fromSet: true })
    } else if (!toSet) {
      setTo({ to: hour, toSet: true })
      setHoursToShow({ from, to: hour })
    }
    if (fromSet && toSet) {
      setFrom({ from: 0, fromSet: false })
      setTo({ to: 23, toSet: false })
      setHoursToShow({ from: 0, to: 23 })
    }
  }

  return (
    <Wrap>
      {hoursToShow.map((hour) => (
        <HourLabel
          isFrom={hour === from}
          isCustomSet={fromSet && toSet}
          isCustomFrom={fromSet && !toSet}
          key={hour}
          onClick={() => onClick(hour)}
        >
          {hour}
        </HourLabel>
      ))}
    </Wrap>
  )
}

export default HourLabels
