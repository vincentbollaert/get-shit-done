import React from 'react'
import styled from 'styled-components'

import UseFilterRange from '../../hooks/useFilterRange'
import UseHighlightFilteredRange from '../../hooks/useHighlightFIlteredRange'
import { useSelector } from 'react-redux'
import { actions } from '../../reducers/calendar'
import { JET, ARSENIC, PASTEL_GRAY, STYLE_TRANSITION } from '../../styles'

const Wrap = styled.div`
  z-index: 1;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  flex-direction: column;
  padding-top: 35px;
  padding-bottom: 12px;
  padding-left: 8px;
  width: 24px;
  background-color: ${JET};
  transition: width ${STYLE_TRANSITION}, padding ${STYLE_TRANSITION};
  
  ${p => p.isBeingFiltered && `
    padding-left: 0;
    width: 50px;
  `};

  &:hover {
    padding-left: 0;
    width: 50px;
  };
`
const HourLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-right: 4px solid ${JET};
  text-align: center;
  font-size: 10px;
  color: ${PASTEL_GRAY};

  &:hover {
    background-color: ${p => p.isFiltered ? 'inherit' : ARSENIC};
    cursor: ${p => p.isFiltered ? 'inherit' : 'pointer'};
  };

  ${p => p.isActive && `
    background-color: ${ARSENIC};
    box-shadow: inset 4px 0 0 0px ${JET}, inset -4px 0 0 0px ${JET}
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
      display: none;
    };
  };

  ${p => p.isBeingFiltered && `
    &::before {
      display: none;
    };
  `};

  &:last-child {
    &::before {
      display: none;
    };
  };
`

const HourLabels = ({ handleClick }) => {
  const { hoursAxis } = useSelector(state => state.calendar)
  const [{ isFiltered, isBeingFiltered, from }, onFilter ] = UseFilterRange({ from: 0, to: 23, cb: actions.filterHours })
  const [filteredRange, highlightFilteredRange] = UseHighlightFilteredRange({ isBeingFiltered, isFiltered, from })

  const onClick = (hour) => {
    // handleClick()
    onFilter(hour)
  }
  return (
    <Wrap
      isBeingFiltered={isBeingFiltered}
      onMouseEnter={() => handleClick({ show: true })}
      onMouseLeave={() => handleClick({ show: isBeingFiltered })}
    >
      {hoursAxis.map((hour) => (
        <HourLabel
          isBeingFiltered={isBeingFiltered}
          isFiltered={isFiltered}
          isActive={filteredRange.includes(hour)}
          key={hour}
          onMouseEnter={() => highlightFilteredRange(hour)}
          onClick={() => onClick(hour)}
        >
          {hour}
        </HourLabel>
      ))}
    </Wrap>
  )
}

export default HourLabels
