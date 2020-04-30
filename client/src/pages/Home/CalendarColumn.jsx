import React, { Fragment } from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'

import { WHITE, SIZE_XSM, WHITE_SMOKE, ISABELLINE } from '../../styles'
import CurrentTime from './CurrentTime'
import { useSelector } from 'react-redux'

const CN_HOUR_SLOTS = 'hour-slots'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  border-left: 1px solid ${ISABELLINE};
  width: 0;

  &:first-child {
    border-left: 0;
  }

  ${p => p.isCurrentWeek && `
    flex-grow: 2;
  `};

  ${p => p.isCurrentDay && `
    flex-grow: 2;
    background-color: ${WHITE_SMOKE};

    .${CN_HOUR_SLOTS} * {
      box-shadow: inset 0px 1px 0 0px ${WHITE_SMOKE}, inset 0px -1px 0 0px ${WHITE_SMOKE} !important;
    };
  `};
`

const HourSlots = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 12px 4px;

  ${Wrap}:last-child & {
    padding-right: 12px;
  }

  ${Wrap}:first-child & {
    padding-left: 12px;
  };
`
const PlaceholderTask = styled.div`
  display: none;
  top: ${p => p.top};
  right: 4px;
  left: 4px;
  background-color: red;
  height: 3%;

  ${HourSlots}:hover & {
    display: flex;
  };
`
const STYLE_ELLIPSIS = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Cell = styled.div`
  display: flex;
  flex-grow: ${p => p.flex};
  justify-content: center;
  flex-shrink: 0;
  flex-basis: 0;
  align-items: center;
  border-radius: 2px;
  box-shadow: inset 0px 1px 0 0px ${WHITE}, inset 0px -1px 0 0px ${WHITE};
  background-color: ${p => p.accentColor};
  display: block;
  padding: 0 ${SIZE_XSM};
  line-height: 1.5;
  color: ${p => p.textColor};
  ${p => p.isSmall && `
    line-height: 0.8;
    font-size: 11px;
  `}
  ${STYLE_ELLIPSIS};
`

const CalendarColumn = ({ isCurrentDay, tasksFiltered, date }) => {
  const { colors } = useSelector(state => state.settings)
  const { hoursAxis } = useSelector(state => state.calendar)
  const day = format(date, 'd')

  function updatePlaceholderTask({ event, day }) {
    console.log(event, day)
  }

  function removePlaceholderTask({ event, day }) {
    console.log('remove node')
  }

  return (
    <Wrap isCurrentDay={isCurrentDay}>
      {isCurrentDay && <CurrentTime date={date} />}
      <HourSlots
        onMouseEnter={event => updatePlaceholderTask({ event, day })}
        onMouseLeave={event => removePlaceholderTask({ event, day })}
        className={CN_HOUR_SLOTS}
      >
        <PlaceholderTask />
        {tasksFiltered.map(({ id, heightInFlex, name, gapBefore, gapAfter, color, textColor }) => {
          return (
            <Fragment key={id}>
              {gapBefore > 0 && <Cell isGapBefore flex={gapBefore} />}
              {heightInFlex > 0 && (
                <Cell
                  flex={heightInFlex}
                  accentColor={colors[color]}
                  textColor={textColor}
                  isSmall={hoursAxis.length > 16 && heightInFlex <= 0.25}
                >
                  {name}
                </Cell>
              )}
              {gapAfter > 0 && <Cell isGapAfter flex={gapAfter} />}
            </Fragment>
          )
        })}
      </HourSlots>
    </Wrap>
  )
}

export default CalendarColumn
