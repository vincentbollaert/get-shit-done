import React from 'react'
import { string, number, func } from 'prop-types'
import styled from 'styled-components'
import { SONIC_SILVER } from '../../styles'

const Wrap = styled.span`
  display: flex;
  flex-shrink: 0;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  fill: ${p => p.theme === 'light' ? SONIC_SILVER : 'red'};

  svg {
    width: 100%;
    height: 100%;
  };
`

const Svg = ({ theme, svg, size, className, onClick }) => (
  <Wrap
    theme={theme}
    size={size}
    className={className}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

Svg.propTypes = {
  theme: string,
  svg: string.isRequired,
  size: number,
  onClick: func,
  className: string,
}

Svg.defaultProps = {
  theme: 'light',
  size: 2.4,
  onClick() {},
  className: undefined,
}

export default Svg
