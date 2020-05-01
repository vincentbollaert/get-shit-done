import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { SIZE_XLG, SONIC_SILVER, GRAY_X11, DARK_TRANSPARENT } from '../../styles'
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
`
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${DARK_TRANSPARENT};
`
const ModalWrap = styled.div`
  display: flex;
  position: fixed;
  flex-grow: 1;
  flex-direction: column;
  text-transform: none;
  outline: none;
  background-color: #fff;
  box-shadow: 3px 3px 11px -9px #00000054;
`

const InnerWrap = styled.div`
  position: relative;
`

const Header = styled.header`
  display: flex;
  padding: ${SIZE_XLG};
  padding-bottom: 0;
  line-height: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  white-space: nowrap;
  user-select: none;
`

const Content = styled.div`
  padding: ${SIZE_XLG};
  color: ${SONIC_SILVER};
`

const Icon = styled(Svg)`
  display: flex;
  box-sizing: content-box;
  margin-left: auto;
  padding-left: 2rem;
  width: 1rem;
  height: 1rem;
  fill: #e8e8e8;
  cursor: pointer;
  visibility: hidden;

  &:hover {
    fill: ${GRAY_X11};
  };

  ${ModalWrap}:hover & {
    visibility: visible;
  };
`

const Modal = ({ isVisible, title, children, onOverlayToggle }) => (
  ReactDOM.createPortal(
    !isVisible ? null :
    <Wrap>
      <Overlay onClick={onOverlayToggle} />
      <ModalWrap tabIndex={0}>
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
