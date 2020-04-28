import React, { useEffect, memo, useState, useRef } from 'react'
import styled from 'styled-components'
import { SIZE_MD, SIZE_XLG, WHITE, SUNSET_ORANGE, SIZE_LG, SIZE_SM, SIZE_XSM } from '../../styles'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from './reducer'

const Wrap = styled.div`
  z-index: 1;
  position: absolute;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const InnerWrap = styled.div`
  padding: ${SIZE_XLG};
  padding-right: 10rem;
  width: 100%;
  width: 32rem;
  line-height: 1.4;
  background: ${SUNSET_ORANGE};
  color: ${WHITE};
  border-radius: 2px;
  transition: opacity 0.2s ease-out;
  box-shadow: 0px -3px 6px -1px #ffc0c06b;

  &:hover {
    opacity: 0.5;
  };
`
const Prefix = styled.span`
  margin-right: ${SIZE_SM};
  border-right: 1px solid #ffffff5e;
  padding-right: ${SIZE_SM};
  font-size: 14px;
  font-weight: bold;
`
const Message = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
const Undo = styled.div`
  position: absolute;
  right: ${SIZE_LG};
  padding: ${SIZE_SM} ${SIZE_LG};
  font-weight: bold;
  color: ${SUNSET_ORANGE};
  text-transform: uppercase;
  background-color: ${WHITE};
  border-radius: 21px;
`
const TimeRemaining = styled.span`
  margin-left: ${SIZE_XSM};
  font-weight: bold;
`

function Toast() {
  const timeoutIdRef = useRef(null)
  const timeRemainingRef = useRef(null)
  const [timeRemaining, setTimeRemaining] = useState(5)
  const { message, messagePrefix } = useSelector(state => state.toast.toast)
  const dispatch = useDispatch()
  timeRemainingRef.current = timeRemaining

  const onRemove = () => { dispatch(actions.removeToast()) }
  const onUndo = () => {
    dispatch({ type: 'UNDO' })
    onRemove()
  }
  const onUpdateTimer = () => {
    setTimeRemaining(t => t - 1)
    if (timeRemainingRef.current === 0) {
      onRemove()
    }
  }

  useEffect(() => {
    if (message) {
      timeoutIdRef.current = setInterval(() => onUpdateTimer(), 1000)
    }

    return () => {
      clearTimeout(timeoutIdRef.current)
      setTimeRemaining(5)
    }
  }, [message])


  return (
    !message ? null : (
      <Wrap>
        <InnerWrap onClick={onRemove}>
          <Message><Prefix>{messagePrefix}</Prefix>{message}</Message>
        </InnerWrap>
        <Undo onClick={onUndo}>
          undo
          <TimeRemaining>{timeRemaining}</TimeRemaining>
        </Undo>
      </Wrap>
    )
  )
}

export default React.memo(Toast)
