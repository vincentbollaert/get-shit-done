import React from 'react'
import styled from 'styled-components'
import { SIZE_XSM, FONT_SIZE___SM, VERY_LIGHT_TANGELO, SUNSET_ORANGE } from '../../../styles'

export const CN_ERROR_FIELD = 'error-field'

const Wrap = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: ${SIZE_XSM};
  font-size: ${FONT_SIZE___SM};
  color: ${props => props.isInfoVariant ? VERY_LIGHT_TANGELO : SUNSET_ORANGE};
`

const FieldError = ({ errorMessage, className }) => {
  return (
    !errorMessage ? null : <Wrap className={`${className} ${CN_ERROR_FIELD}`}>{errorMessage}</Wrap>
  )
}

export default FieldError
