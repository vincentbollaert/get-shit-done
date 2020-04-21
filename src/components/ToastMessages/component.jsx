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
`
const ToastWrap = styled.div`
  position: absolute;
  right: 0;
  bottom: ${p => p.index * 10}px;
  z-index: ${p => -p.index};
  display: flex;
  align-items: center;
  margin-top: ${SIZE_MD};
  cursor: pointer;
  transform: ${p => `scale(${p.scaling})`};
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
  const { toastMessages } = useSelector(state => state.toastMessages)
  const dispatch = useDispatch()
  const onRemove = (id) => { dispatch(actions.removeToast(id)) }
  const onUndo = (id) => {
    dispatch({ type: 'UNDO' })
    onRemove(id)
  }

  return (
    <Wrap>
      {toastMessages.map(({ id, message, messagePrefix, undoFunction}, index) => (
        <ToastWrap key={id} index={index} scaling={1 - index / 10}>
          <Toast onClick={() => onRemove(id)}>
            <Message><Prefix>{messagePrefix}</Prefix>{message}</Message>
          </Toast>
          <Undo onClick={() => onUndo(id)}>undo</Undo>
        </ToastWrap>
      ))}
    </Wrap>
  )
}

export default ToastMessages
