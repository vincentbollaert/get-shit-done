import React from 'react'
import { string, number, func } from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.span`
  display: flex;
  flex-shrink: 0;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;

  svg {
    width: 100%;
    height: 100%;
  };
`

const Svg = ({ svg, size, className, onClick }) => (
  <Wrap
    size={size}
    className={className}
    onClick={onClick}
    dangerouslySetInnerHTML={{ __html: svg }}
  />
)

Svg.propTypes = {
  svg: string.isRequired,
  size: number,
  onClick: func,
  className: string,
}

Svg.defaultProps = {
  size: 2.4,
  onClick() {},
  className: undefined,
}

export default Svg
