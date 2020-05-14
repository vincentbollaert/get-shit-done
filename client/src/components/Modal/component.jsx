import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { STYLE_TRANSITION } from '../../styles'
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
  background-color: var(--charcoal);
  box-shadow: 3px 3px 8px -5px var(--charcoal);
`

const InnerWrap = styled.div`
  position: relative;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: var(--size-xlg);
  padding-bottom: 0;
  font-size: var(--font-size-lg);
  color: var(--isabelline);
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
`

const Content = styled.div`
  padding: var(--size-xlg);
  color: var(--sonic-silver);
`

const Icon = styled(Svg)`
  position: absolute;
  right: var(--size-md);
  display: flex;
  box-sizing: content-box;
  margin-left: auto;
  padding-left: 2rem;
  width: 1rem;
  height: 1rem;
  padding: var(--size-md);
  fill: var(--rhythm);
  cursor: pointer;
  visibility: hidden;

  &:hover {
    fill: var(--isabelline);
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
