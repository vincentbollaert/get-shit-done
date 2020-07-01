import React, { FC } from 'react'
import { string, number, func, bool } from 'prop-types'
import styled from 'styled-components'

export const CN_SVG = 'svg'

const Wrap = styled.span<{ size: number, isDanger: boolean, theme: string }>`
  display: flex;
  flex-shrink: 0;
  width: ${props => props.size}rem;
  height: ${props => props.size}rem;
  fill: ${p => p.theme === 'light' ? 'var(--sonic-silver)' : 'red'};

  &:hover {
    fill: ${p => p.isDanger ? 'var(--sunset-orange)' : p.theme === 'light' ? 'var(--gainsboro)' : 'var(--jet)'};
  };

  svg {
    width: 100%;
    height: 100%;
  };
`

interface Props {
  isDanger: boolean,
  theme: string,
  svg: string,
  size: number,
  className?: string,
  onClick: any,
}

const Svg: FC<Props> = ({ isDanger, theme, svg, size, className, onClick }) => (
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
