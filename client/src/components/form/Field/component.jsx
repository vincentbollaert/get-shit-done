import React, { memo, useState } from 'react'
import styled from 'styled-components'
import { SIZE_XSM, SIZE_SM, SONIC_SILVER, GRAY_X11 } from '../../../styles'

import Svg from '../../Svg/component'
import Placeholder from '../Placeholder/component'
import {
  STYLE_COLOR_LIGHT,
  STYLE_COLOR_DARK,
  STYLE_UNDERLINE_LIGHT,
  STYLE_UNDERLINE_ERROR,
  STYLE_UNDERLINE_HOVER_LIGHT,
  STYLE_HEIGHT,
} from '../shared'
import ErrorField from '../../error/Field/component'

export const CN_FIELD_SVG = 'field-svg'

const Wrap = styled.div`
  display: flex;
  position: relative;
  color: ${p => p.theme === 'light' ? STYLE_COLOR_LIGHT : STYLE_COLOR_DARK};

  ${p => p.isInForm && `
    margin-top: ${SIZE_SM};

    &:first-child {
      margin-top: 0;
    };
  `};
`
const Input = styled.input`
  padding-top: ${SIZE_SM};
  width: 100%;
  height: ${STYLE_HEIGHT};
  box-shadow: ${p => p.isError ? STYLE_UNDERLINE_ERROR : STYLE_UNDERLINE_LIGHT};
  background-color: transparent;
  color: inherit;

  &:hover {
    ${p => !p.isError && `
      box-shadow: ${STYLE_UNDERLINE_HOVER_LIGHT};

      & ~ .${CN_FIELD_SVG} {
        fill: ${SONIC_SILVER};
      };
    `};
  };
`
const SvgStyled = styled(Svg)`
  position: absolute;
  right: ${SIZE_XSM};
  transform: translate(0, -50%);
  top: 50%;
  fill: ${GRAY_X11};
`
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
}) => {
  const [value, setValue] = useState(defaultValue)
  const hasValue = (value !== undefined && value !== '')
  const onChange = (event) => { setValue(event.target.value) }
  console.log(defaultValue)

  return (
    <Wrap isInForm={isInForm} theme={theme} className={className}>
      <Placeholder theme={theme} hasValue={hasValue}>{placeholder}</Placeholder>
      <Input name={name} type={type} isError={errorMessage} onChange={onChange} ref={inputRef} />
      {svg && <SvgStyled svg={svg} size={1.2} className={CN_FIELD_SVG} />}
      <ErrorField errorMessage={errorMessage} />
    </Wrap>
  )
}

export default memo(Field)
