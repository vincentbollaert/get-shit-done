import React from 'react'
import styled from 'styled-components'
import { SIZE_MD, SIZE_XLG, WHITE, SUNSET_ORANGE, SIZE_LG, SIZE_SM } from '../../styles'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from './reducer'

const Wrap = styled.div`
  position: absolute;
  right: 24px;
  bottom: 24px;
`
const ToastWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${SIZE_MD};
  cursor: pointer;
`
const Toast = styled.div`
  padding: ${SIZE_XLG};
  padding-right: 8rem;
  width: 100%;
  max-width: 30rem;
  line-height: 1.4;
  background: ${SUNSET_ORANGE};
  color: ${WHITE};
  border-radius: 2px;
  transition: opacity 0.2s ease-out;

  &:hover {
    opacity: 0.5;
  };
`
const Message = styled.div``
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

  return (
    <Wrap>
      {toastMessages.map(({ id, message, undoFunction}) => (
        <ToastWrap key={id}>
          <Toast onClick={() => dispatch(actions.remove(id))}>
            <Message>{message}</Message>
          </Toast>
          <Undo>undo</Undo>
        </ToastWrap>
      ))}
    </Wrap>
  )
}

export default ToastMessages
