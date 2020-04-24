import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import UseSetCustomRange from '../../../hooks/useSetCustomRange'

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

    /* ${p => p.isSetInProgress && p.isFrom && 'background-color: #595959;'}; */
  };

  ${p => p.isActive && `
    background-color: #444;
    box-shadow: inset 4px 0 0 0px #333, inset -4px 0 0 0px #333
  `};

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
  const [{ isCustomSet, isSetInProgress, from }, onSetCustom ]
    = UseSetCustomRange({ from: 0, to: 23, cb: setHoursToShow })
  const [activeLabels, setActiveLabels] = useState([])

  const updateList = (e) => {
    if (!isSetInProgress) return

    const current = Number(e.target.innerHTML)
    const fromToDifference = Math.max(current, from) - Math.min(current, from)
    const differenceArray = Array(fromToDifference).fill(null).map((x, index) => Math.max(current, from) - index)
    const updatedList = [...new Set([from, ...differenceArray, current])]
    setActiveLabels(updatedList)
  }

  useEffect(() => {
    if (isCustomSet) {
      setActiveLabels([])
    }
  }, [isCustomSet])

  return (
    <Wrap>
      {hoursToShow.map((hour) => (
        <HourLabel
          isFrom={hour === from}
          isCustomSet={isCustomSet}
          isSetInProgress={isSetInProgress}
          isActive={activeLabels.includes(hour)}
          key={hour}
          onMouseEnter={updateList}
          onClick={() => onSetCustom(hour)}
        >
          {hour}
        </HourLabel>
      ))}
    </Wrap>
  )
}

export default HourLabels
