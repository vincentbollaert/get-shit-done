import React, { useState } from 'react'
import styled from 'styled-components'
import { SONIC_SILVER, PASTEL_GRAY, ONYX, JET, SIZE_XLG, ISABELLINE, QUICK_SILVER } from '../../styles'
import lisSvg from '../../assets/svg/list.svg'
import Svg from '../../components/Svg/component'

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: margin 0.2s ease;

  ${p => p.isOpen && `
    margin-right: -240px
  `};
`

const Toggle = styled.div`
  position: absolute;
  top: 50%;
  right: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${ONYX};
  fill: ${SONIC_SILVER};
  cursor: pointer;
  transform: translate(0, -50%);
  transition: transform 0.2s cubic-bezier(0, 0, 0.51, 0.99), opacity 0.2s cubic-bezier(0, 0, 0.51, 0.99);
  transition-delay: 0.1s;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;

  &:hover {
    fill:${PASTEL_GRAY};
    transform: translate(0, -50%);
    opacity: 1;
    transition-delay: 0s;
  };

  ${p => p.isOpen && `
    fill:${PASTEL_GRAY};
    opacity: 0.6;
    transform: translate(28px, -50%);
  `};
`
const SvgStyled = styled(Svg)`
  fill: ${QUICK_SILVER};
`

const Content = styled.div`
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  padding: ${SIZE_XLG};
  width: 240px;
  color: ${ISABELLINE};
  background-color: ${JET};
  box-shadow: ${p => p.isOpen ? '3px 0rem 12px -6px #1b1b1b' : 'none'};
`

const Sidebar = ({ isRight, children }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Wrap isOpen={isOpen} isRight={isRight}>
      <Toggle isOpen={isOpen} isRight={isRight} onClick={() => setIsOpen(o => !o)}>
        <SvgStyled svg={lisSvg} size={1.6} />
      </Toggle>
      <Content>
        {children}
      </Content>
    </Wrap>
  )
}

export default Sidebar
