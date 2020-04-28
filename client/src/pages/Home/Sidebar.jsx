import React from 'react'
import styled from 'styled-components'
import {
  SIZE_XLG,
  ISABELLINE,
  STYLE_TRANSITION,
  CHARCOAL,
  STYLE_SIDEBAR_WIDTH_UNIT,
  ROMAN_SILVER,
  INDEPENDENCE,
} from '../../styles'
import lisSvg from '../../assets/svg/list.svg'
import Svg from '../../components/Svg/component'

const Wrap = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
`
const Tabs = styled.div`
  z-index: 1;
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
    fill: ${ROMAN_SILVER};
  };

  &:hover {
    svg {
      fill: ${ISABELLINE};
    };
  };

  ${p => p.isOpen && `
    svg {
      fill: ${ISABELLINE};
    };
  `};
`
const SvgStyled = styled(Svg)`
  width: 1.6rem;
  height: 1.6rem;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  flex-direction: column;
  padding: ${SIZE_XLG};
  width: ${STYLE_SIDEBAR_WIDTH_UNIT}rem;
  color: ${ISABELLINE};
  background-color: ${CHARCOAL};
  box-shadow: inset -1px 0 0 0px ${INDEPENDENCE}; 
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
        <Tasks isOpen={isOpen} onClick={setIsOpen}>
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
