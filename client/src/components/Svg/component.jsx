import React from 'react'
import { string, number, func, bool } from 'prop-types'
import styled from 'styled-components'
import { SONIC_SILVER, SUNSET_ORANGE, GAINSBORO, JET } from '../../styles'

export const CN_SVG = 'svg'

const Wrap = styled.span`
  display: flex;
  flex-shrink: 0;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  fill: ${p => p.theme === 'light' ? SONIC_SILVER : 'red'};

  &:hover {
    fill: ${p => p.isDanger ? SUNSET_ORANGE : p.theme === 'light' ? GAINSBORO : JET};
  };

  svg {
    width: 100%;
    height: 100%;
  };
`

const Svg = ({ isDanger, theme, svg, size, className, onClick }) => (
  <Wrap
    isDanger={isDanger}
    theme={theme}
    size={size}
    className={`${className} ${CN_SVG}`}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

Svg.propTypes = {
  isDanger: bool,
  theme: string,
  svg: string.isRequired,
  size: number,
  onClick: func,
  className: string,
}

Svg.defaultProps = {
  isDanger: false,
  theme: 'light',
  size: 2.4,
  onClick() {},
  className: undefined,
}

export default Svg
