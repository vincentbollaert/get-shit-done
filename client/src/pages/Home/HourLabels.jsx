import React from 'react'
import styled from 'styled-components'

import UseFilterRange from '../../hooks/useFilterRange'
import UseHighlightFilteredRange from '../../hooks/useHighlightFIlteredRange'
import { useSelector } from 'react-redux'
import { actions } from '../../state/calendar/reducer'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
  padding-bottom: 12px;
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
    background-color: ${p => p.isFiltered ? 'inherit' : '#444'};
    cursor: ${p => p.isFiltered ? 'inherit' : 'pointer'};
  };

  ${Wrap}:hover & {
    padding: 0 16px;
  };

  ${p => p.isBeingFiltered && `
    padding: 0 16px;

    &::before {
      display: none;
    };
  `};

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

const HourLabels = () => {
  const { hoursAxis } = useSelector(state => state.calendar)
  const [{ isFiltered, isBeingFiltered, from }, onFilter ] = UseFilterRange({ from: 0, to: 23, cb: actions.filterHours })
  const [filteredRange, highlightFilteredRange] = UseHighlightFilteredRange({ isBeingFiltered, isFiltered, from })

  return (
    <Wrap>
      {hoursAxis.map((hour) => (
        <HourLabel
          isBeingFiltered={isBeingFiltered}
          isFiltered={isFiltered}
          isActive={filteredRange.includes(hour)}
          key={hour}
          onMouseEnter={() => highlightFilteredRange(hour)}
          onClick={() => onFilter(hour)}
        >
          {hour}
        </HourLabel>
      ))}
    </Wrap>
  )
}

export default HourLabels
