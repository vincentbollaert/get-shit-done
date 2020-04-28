import React, { useState } from 'react'
import styled from 'styled-components'
import { SONIC_SILVER, PASTEL_GRAY, ONYX, JET, SIZE_XLG, ISABELLINE, QUICK_SILVER, STYLE_TRANSITION, CHARCOAL } from '../../styles'
import lisSvg from '../../assets/svg/list.svg'
import Svg from '../../components/Svg/component'

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  padding-right: 40px;
`
const Tabs = styled.div`
  z-index: 1;
  position: absolute;
  right: 0;
  height: 100%;
  background-color: ${CHARCOAL};
  width: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const Tasks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  svg {
    fill: #838899;
  };

  &:hover {
    svg {
      fill: #eee;
    };
  };

  ${p => p.isOpen && `
    svg {
      fill:#eee;
    };
  `};
`
const SvgStyled = styled(Svg)`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${QUICK_SILVER};
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 40px;
  bottom: 0;
  flex-direction: column;
  flex-grow: 1;
  padding: ${SIZE_XLG};
  width: 240px;
  color: ${ISABELLINE};
  background-color: ${CHARCOAL};
  box-shadow: inset -1px 0 0 0px #4f5466;
  transform: translateX(100%);
  transition: transform ${STYLE_TRANSITION};

  ${p => p.isOpen && `
    transform: translateX(0);
  `};
`

const Sidebar = ({ isOpen, setIsOpen, children }) => {

  return (
    <Wrap>
      <Tabs>
        <Tasks isOpen={isOpen} onClick={() => setIsOpen(o => !o)}>
          <SvgStyled svg={lisSvg} />
        </Tasks>
      </Tabs>
      <Content isOpen={isOpen}>
        {children}
      </Content>
    </Wrap>
  )
}

export default Sidebar
