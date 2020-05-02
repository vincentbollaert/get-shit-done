import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import {
  SIZE_XLG,
  SONIC_SILVER,
  ISABELLINE,
  RHYTHM,
  CHARCOAL,
  FONT_SIZE_LG,
  SIZE_MD,
  STYLE_TRANSITION,
} from '../../styles'
import closeSvg from '../../assets/svg/close.svg'
import Svg from '../Svg/component'

const Wrap = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${STYLE_TRANSITION};
`
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.3); */
`
const ModalWrap = styled.div`
  display: flex;
  position: fixed;
  width: ${p => `${p.width}rem` || 'auto'};
  flex-grow: 1;
  flex-direction: column;
  text-transform: none;
  outline: none;
  background-color: ${CHARCOAL};
  box-shadow: 3px 3px 8px -5px ${CHARCOAL};
`

const InnerWrap = styled.div`
  position: relative;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: ${SIZE_XLG};
  padding-bottom: 0;
  font-size: ${FONT_SIZE_LG};
  color: ${ISABELLINE};
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
`

const Content = styled.div`
  padding: ${SIZE_XLG};
  color: ${SONIC_SILVER};
`

const Icon = styled(Svg)`
  position: absolute;
  right: ${SIZE_MD};
  display: flex;
  box-sizing: content-box;
  margin-left: auto;
  padding-left: 2rem;
  width: 1rem;
  height: 1rem;
  padding: ${SIZE_MD};
  fill: ${RHYTHM};
  cursor: pointer;
  visibility: hidden;

  &:hover {
    fill: ${ISABELLINE};
  };

  ${ModalWrap}:hover & {
    visibility: visible;
  };
`

const Modal = ({ title, width, children, onOverlayToggle }) => (
  ReactDOM.createPortal(
    <Wrap>
      <Overlay onClick={onOverlayToggle} />
      <ModalWrap width={width} tabIndex={0}>
        <InnerWrap>
          <Header>
            {title}
            <Icon svg={closeSvg} onClick={onOverlayToggle} />
          </Header>
          <Content>{children}</Content>
        </InnerWrap>
      </ModalWrap>
    </Wrap>,
    document.querySelector('#app')
  )
)

export default Modal
