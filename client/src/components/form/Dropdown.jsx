import React, { useState } from 'react'
import styled from 'styled-components'
import chevronDownSvg from '../../assets/svg/chevron-down.svg'
import Placeholder from './Placeholder/component'
import { SvgStyled, Input, Wrap } from './shared'
import { CAPRI, WHITE, ISABELLINE } from '../../styles'

const Header = styled.div`
  width: 100%;
`
const List = styled.div`
  display: ${p => p.isOpen ? 'flex' : 'none'};
  position: absolute;
  flex-direction: column;
  background-color: #525769;
  padding: 8px;
  z-index: 1;
  top: 0;
  left: -12px;
  right: -12px;
  border-radius: 2px;
  box-shadow: 3px 3px 8px -5px #343742;
`
const Item = styled.div`
  padding: 4px;
  color: ${p => p.isActive ? CAPRI : ISABELLINE};
  cursor: pointer;

  &:hover {
    color: ${p => p.isActive ? CAPRI : WHITE};
  };
`
const Dropdown = ({ theme, isInForm, label, displayName, list, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveId] = useState({})

  function onItemSelect(id) {
    setActiveId(id)
    onSelect(id)
  }
  return (
    <Wrap theme={theme} isInForm={isInForm} tabIndex={0} onBlur={() => setIsOpen(false)}>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <Placeholder theme={theme} hasValue={activeItem.id !== undefined && activeItem.id !== ''}>{label}</Placeholder>
        <Input as="div">{activeItem[displayName]}</Input>
        <SvgStyled them="light" svg={chevronDownSvg} />
      </Header>
      <List isOpen={isOpen}>
        {list.map((item) => {
          const { id } = item

          return (
            <Item
              isActive={id === activeItem.id}
              onClick={() => onItemSelect(item)}
              key={id}
            >
              {item[displayName]}
            </Item>
          )
        })}
      </List>
    </Wrap>
  )
}

export default Dropdown
