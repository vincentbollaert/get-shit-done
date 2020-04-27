import React from 'react'
import styled from 'styled-components'
import isToday from 'date-fns/isToday'
import format from 'date-fns/format'
import isThisWeek from 'date-fns/isThisWeek'

import { WHITE } from '../../styles'
import UseFilterRange from '../../hooks/useFilterRange'
import UseHighlightFilteredRange from '../../hooks/useHighlightFIlteredRange'
import { useSelector } from 'react-redux'
import { actions } from '../../reducers/calendar'
import { MONTH_DAYS } from '../../constants'

const Wrap = styled.div`
  display: flex;
  font-size: 10px;
  color: #c4c4c4;
  background: #333;
`
const DayLabel = styled.div`
  position: relative;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-shrink: 0;
  flex-basis: 0;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
  border-bottom: 4px solid #333;
  border-left: 1px solid transparent;
  cursor: pointer;
  transition: padding 0.1s ease-out;

  &:last-child {
    &:after {
      content: "";
      padding-right: 8px;
    }
  }

  &:first-child {
    border-left: none;
    &::before {
      position: static;
      width: 8px;
      background-color: transparent;
    };
  };

  ${Wrap}:hover & {
    padding: 16px 0;

    &::before {
      display: none;
    };
  }

  ${p => p.isBeingFiltered && `
    padding: 16px 0;

    &::before {
      display: none;
    };
  `};

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
  `};

  ${p => p.isCurrentDay && `
    flex-grow: 2;
    border-left: 1px solid #333;
    border-bottom: none;
    padding-bottom: 4px;
    color: #333;
    background-color: ${WHITE};

    & + ${DayLabel} {
      &::before {
        display: none;
      };
    };
  `};

  &:hover {
    background-color: ${p => p.isFiltered ? 'inherit' : '#444'};
    cursor: ${p => p.isFiltered ? 'inherit' : 'pointer'};
  };

  ${p => p.isActive && `
    background-color: #444;
    box-shadow: inset 0px 4px 0 0px #333, inset 0px -4px 0 0px #333;
  `};

  &::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    width: 1px;
    height: 6px;
    bottom: -4px;
    background-color: #ffffff42;
  };
`

const DayLabels = () => {
  const { daysAxis } = useSelector(state => state.calendar)
  const [{ isFiltered, isBeingFiltered, from }, onFilter]
    = UseFilterRange({ from: 1, to: MONTH_DAYS.length, cb: actions.filterDays })
  const [filteredRange, highlightFilteredRange] = UseHighlightFilteredRange({ isBeingFiltered, isFiltered, from })

  return (
    <Wrap>
      {daysAxis.map((dateString) => {
        const date = new Date(dateString)
        const day = Number(format(date, 'd'))
        const dayOfWeek = format(date, 'EEEEE')
        const isCurrentDay = isToday(date)

        return (
          <DayLabel
            key={day}
            isCurrentDay={isCurrentDay}
            // isCurrentWeek={isThisWeek(date, { weekStartsOn: 1 })}
            isFiltered={isFiltered}
            isBeingFiltered={isBeingFiltered}
            isActive={filteredRange.includes(day)}
            onMouseEnter={() => highlightFilteredRange(day)}
            onClick={() => onFilter(day)}
          >
            {day} {dayOfWeek}
          </DayLabel>
        )
      })}
    </Wrap>
  )
}

export default DayLabels
