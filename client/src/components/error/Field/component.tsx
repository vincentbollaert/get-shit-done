import React from 'react'
import styled from 'styled-components'

export const CN_ERROR_FIELD = 'error-field'

const Wrap = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: var(--size-xsm);
  font-size: var(--font-size-xxsm);
  color: ${props => props.isInfoVariant ? 'var(--very-light-tangelo)' : 'var(--sunset-orange)'};
`

const FieldError = ({ errorMessage, className }) => {
  return (
    !errorMessage ? null : <Wrap className={`${className} ${CN_ERROR_FIELD}`}>{errorMessage}</Wrap>
  )
}

export default FieldError
