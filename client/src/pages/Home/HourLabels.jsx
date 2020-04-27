import React from 'react'
import styled from 'styled-components'

import UseFilterRange from '../../hooks/useFilterRange'
import UseHighlightFilteredRange from '../../hooks/useHighlightFIlteredRange'
import { useSelector } from 'react-redux'
import { actions } from '../../reducers/calendar'
import { JET, ARSENIC, PASTEL_GRAY } from '../../styles'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 35px;
  padding-bottom: 12px;
  background-color: ${JET};
`
const HourLabel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-right: 4px solid ${JET};
  padding-left: 8px;
  text-align: center;
  font-size: 10px;
  color: ${PASTEL_GRAY};
  transition: padding 0.1s ease-out;

  &:hover {
    background-color: ${p => p.isFiltered ? 'inherit' : ARSENIC};
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
