import React from 'react'
import styled from 'styled-components'
import { WHITE, BOX_SHADOW_LIGHT, SIZE_LG, SIZE_MD, SIZE_SM, WHITE_SMOKE } from '../../styles'

const Github = styled.a`
  margin-left: ${SIZE_MD};
  padding: ${SIZE_SM} ${SIZE_MD};
  background-color: ${WHITE_SMOKE};
  border-radius: 2px;
`
const Wrap = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: ${SIZE_LG};
  background-color: ${WHITE};
  box-shadow: ${BOX_SHADOW_LIGHT};
`

const Header = () => (
  <Wrap>
    <Github href="https://github.com/vincentbollaert/react-boilerplate-simple" target="_blank" rel="noopener noreferrer">
      GitHub
    </Github>
  </Wrap>
)

export default Header
