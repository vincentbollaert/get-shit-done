import React from 'react'
import styled from 'styled-components'
import { SIZE_MD, SIZE_XLG, WHITE, SUNSET_ORANGE, SIZE_LG, SIZE_SM } from '../../styles'
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
const Toast = styled.div`
  padding: ${SIZE_XLG};
  padding-right: 8.8rem;
  width: 100%;
  width: 30rem;
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
  padding: ${SIZE_SM} ${SIZE_MD};
  font-weight: bold;
  color: ${SUNSET_ORANGE};
  text-transform: uppercase;
  background-color: ${WHITE};
  font-size: 10px;
  border-radius: 21px;
`

const ToastMessages = () => {
  const { message, messagePrefix } = useSelector(state => state.toast.toast)
  const dispatch = useDispatch()
  const onRemove = () => { dispatch(actions.removeToast()) }
  const onUndo = () => {
    dispatch({ type: 'UNDO' })
    onRemove()
  }

  return (
    !message ? null : (
      <Wrap>
        <Toast onClick={() => onRemove()}>
          <Message><Prefix>{messagePrefix}</Prefix>{message}</Message>
        </Toast>
        <Undo onClick={() => onUndo()}>undo</Undo>
      </Wrap>
    )
  )
}

export default ToastMessages
