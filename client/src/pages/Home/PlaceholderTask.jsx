import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../reducers/calendar'
import { STYLE_ELLIPSIS, SIZE_SM } from '../../styles'
import Modal from '../../components/Modal/component'
import AddNewCalendarTask from './AddNewCalendarTask'
import { colorDarken } from '../../utils/colorDarken'

const PlaceholderTaskWrap = styled.div`
  display: ${p => p.isBeingPrepared ? 'block' : 'none'};
  position: absolute;
  top: ${p => p.top}px;
  right: 0;
  left: 0;
  padding: 0 ${SIZE_SM};
  line-height: 1.5;
  color: ${p => p.accentColor ? colorDarken(p.accentColor, -80) : 'red'};
  background-color: ${p => p.accentColor || '#eee'};
  box-shadow: inset 4px 1px 0 0px #fff, inset -4px -1px 0 0px #fff, 0px 1px 0 0px #fff, 0px -1px 0 0px #fff;
  border-radius: 2px;
  height: 19.4px;
  ${STYLE_ELLIPSIS};

  .hour-slots:hover & {
    display: flex;
  };
`

const PlaceholderTask = ({ dateString, hourSlotsRef, y }) => {
  const { taskBeingPrepared = {} } = useSelector(state => state.calendar)
  const { groups } = useSelector(state => state.settings)
  const [{ isModalOpen, timeFrom }, setState] = useState({ isModalOpen: false, timeFrom: undefined })
  const dispatch = useDispatch()

  function onPrepareNewTask() {
    const timeStart = 24 / (hourSlotsRef.current.getBoundingClientRect().height / y)
    const timeStartRounded = Number(timeStart.toFixed(1))
    setState({ isModalOpen: true, timeFrom: timeStartRounded })
  }

  const onModalClose = useCallback(() => {
    setState({ isModalOpen: false, timeFrom: undefined })
    dispatch(actions.removePreparedTask())
  }, [])

  return (
    <>
      <PlaceholderTaskWrap
        isBeingPrepared={timeFrom}
        top={y}
        accentColor={groups.find(x => x.name === taskBeingPrepared.group)?.color.value}
        onClick={onPrepareNewTask}
      >
        {taskBeingPrepared.name}
      </PlaceholderTaskWrap>
      
      
      {isModalOpen && (
        <Modal
          title="task details"
          width={17}
          onOverlayToggle={onModalClose}
        >
          <AddNewCalendarTask dateString={dateString} timeFrom={timeFrom} onModalClose={onModalClose} />
        </Modal>
      )}
    </>
  )
}

export default PlaceholderTask
