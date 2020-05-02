import React, { memo, useState } from 'react'

import Placeholder from '../Placeholder/component'
import { SvgStyled, Input, Wrap } from '../shared'
import ErrorField from '../../error/Field/component'


const Field = ({
  isInForm,
  theme,
  name,
  type = 'text',
  defaultValue,
  placeholder,
  svg,
  errorMessage,
  className,
  inputRef,
  bubbleValue,
}) => {
  const [value, setValue] = useState(defaultValue)
  const hasValue = (value !== undefined && value !== '')
  const onChange = (event) => {
    const { name, value } = event.target
    setValue(value)
    bubbleValue && bubbleValue({ name, value })
  }

  return (
    <Wrap isInForm={isInForm} theme={theme} className={className}>
      <Placeholder theme={theme} hasValue={hasValue}>{placeholder}</Placeholder>
      <Input name={name} type={type} isError={errorMessage} onChange={onChange} ref={inputRef} />
      {svg && <SvgStyled svg={svg} />}
      <ErrorField errorMessage={errorMessage} />
    </Wrap>
  )
}

export default memo(Field)
