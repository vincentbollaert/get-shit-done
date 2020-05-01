import React, { Fragment, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'

import { WHITE, SIZE_XSM, WHITE_SMOKE, ISABELLINE } from '../../styles'
import CurrentTime from './CurrentTime'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../../components/Modal/component'
import AddNewCalendarTask from './AddNewCalendarTask'
import { actions } from '../../reducers/calendar'

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
  position: relative;
  flex-direction: column;
  margin: 12px 0;
  padding: 0 4px;

  ${Wrap}:last-child & {
    padding-right: 12px;
  }

  ${Wrap}:first-child & {
    padding-left: 12px;
  };
`
const PlaceholderTask = styled.div`
  display: none;
  position: absolute;
  top: ${p => p.top}px;
  right: 0;
  left: 0;
  background-color: #eee;
  box-shadow: inset 4px 1px 0 0px #fff, inset -4px -1px 0 0px #fff, 0px 1px 0 0px #fff, 0px -1px 0 0px #fff;
  border-radius: 2px;
  height: 19.4px;

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

const CalendarColumn = ({ isCurrentDay, tasksFiltered, dateString }) => {
  const dispatch = useDispatch()
  const [showModal, toggleModal] = useState(false)
  const [y, setY] = useState(0)
  const [newTaskFrom, setNewTaskFrom] = useState(0)
  const hourSlotsRef = useRef(null)
  const { colors } = useSelector(state => state.settings)
  const { hoursAxis } = useSelector(state => state.calendar)

  function updatePlaceholderTask(event) {
    const HALF_HOUR_PX = 19.4
    const columnTopPx = event.currentTarget.getBoundingClientRect().top
    const placeholderY = event.clientY - columnTopPx
    const nearest25 = Math.floor(placeholderY / HALF_HOUR_PX) * HALF_HOUR_PX
    const isNewNearest = nearest25 !== y
    if (isNewNearest) setY(nearest25)
  }

  function addTask() {
    const timeStart = 24 / (hourSlotsRef.current.getBoundingClientRect().height / y)
    const timeStartRounded = Number(timeStart.toFixed(1))
    setNewTaskFrom(timeStartRounded)
    toggleModal(true)
  }

  function addNewTask(test) {
    const newTask = {
      ...test,
      dateString,
    }
    dispatch(actions.addTask(newTask))
    toggleModal(false)
  }

  return (
    <Wrap isCurrentDay={isCurrentDay}>
      {isCurrentDay && <CurrentTime />}
      <HourSlots
        ref={hourSlotsRef}
        onMouseMove={updatePlaceholderTask}
        className={CN_HOUR_SLOTS}
      >
        <PlaceholderTask top={y} onClick={addTask} />
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
      
      {showModal && (
        <Modal title="task details" width={17} onOverlayToggle={() => toggleModal(false)}>
          <AddNewCalendarTask from={newTaskFrom} addNewTask={addNewTask} />
        </Modal>
      )}
    </Wrap>
  )
}

export default CalendarColumn
