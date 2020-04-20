import styled from 'styled-components'
import { FONT_SIZE__SM, SUNSET_ORANGE } from '../../../styles'

import { STYLE_PLACEHOLDER_COLOR_DARK, STYLE_PLACEHOLDER_COLOR_LIGHT } from '../shared'

export default styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  color: ${p => p.theme === 'light' ? STYLE_PLACEHOLDER_COLOR_LIGHT : STYLE_PLACEHOLDER_COLOR_DARK};
  ${p => p.isError && `color: ${SUNSET_ORANGE}`}; 
  pointer-events: none;
  transform: translateY(-50%);
  transition: top 0.1s ease-out, transform 0.1s ease-out, font-size 0.1s ease-out;

  ${p => p.hasValue && `
    top: 2px;
    font-size: ${FONT_SIZE__SM};
    transform: translateY(0);
  `};
`
