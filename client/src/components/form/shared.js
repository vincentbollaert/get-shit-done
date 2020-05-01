import styled from 'styled-components'

import { INDEPENDENCE, ISABELLINE, SUNSET_ORANGE, SIZE_XSM, SIZE_SM, SONIC_SILVER, GAINSBORO } from '../../styles'
import Svg, { CN_SVG } from '../Svg/component'

export const STYLE_COLOR_LIGHT = ISABELLINE
export const STYLE_COLOR_DARK = 'red'

export const STYLE_BORDER_COLOR = 'rgba(213, 213, 213, 0.62)'

export const STYLE_UNDERLINE_LIGHT = `0 2px 0 -1px ${INDEPENDENCE}`
export const STYLE_UNDERLINE_HOVER_LIGHT = `0 2px 0 -1px ${GAINSBORO}`
export const STYLE_UNDERLINE_ERROR = `0 2px 0 -1px ${SUNSET_ORANGE}`

export const STYLE_PLACEHOLDER_COLOR_DARK = 'rgba(0, 0, 0, 0.3)'
export const STYLE_PLACEHOLDER_COLOR_LIGHT = 'rgba(255, 255, 255, 0.6)'
export const STYLE_HEIGHT = '3.2rem'


export const Wrap = styled.div`
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

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding-top: ${SIZE_SM};
  width: 100%;
  height: ${STYLE_HEIGHT};
  box-shadow: ${p => p.isError ? STYLE_UNDERLINE_ERROR : STYLE_UNDERLINE_LIGHT};
  background-color: transparent;
  color: inherit;

  &:hover {
    ${p => !p.isError && `
      box-shadow: ${STYLE_UNDERLINE_HOVER_LIGHT};

      & ~ .${CN_SVG} {
        fill: ${SONIC_SILVER};
      };
    `};
  };
`

export const SvgStyled = styled(Svg)`
  position: absolute;
  right: ${SIZE_XSM};
  transform: translate(0, -50%);
  top: 50%;
  width: 1.2rem;
  height: 1.2rem;

  ${Wrap}:hover & {
    svg {
      fill: ${GAINSBORO};
    };
  };
`
