import React, { useState } from 'react'
import styled from 'styled-components'
import chevronDownSvg from '../../assets/svg/chevron-down.svg'
import Svg from '../Svg/component'

const Wrap = styled.div`
  position: relative;
  margin-top: 8px;
`
const Header = styled.div`
  display: flex;
  color: white;
  height: 32px;
  align-items: center;
  padding-top: 8px;
`
const Toggle = styled(Svg)`
  margin-left: auto;
  width: 12px;
  height: 12px;
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
  color: ${p => p.isActive ? 'pink' : '#eee'};
  cursor: pointer;

  &:hover {
    color: ${p => p.isActive ? 'pink' : '#fff'};
  };
`
const Dropdown = ({ label, displayName, list, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveId] = useState({})

  function onItemSelect(id) {
    setActiveId(id)
    onSelect(id)
  }
  return (
    <Wrap tabIndex={0} onBlur={() => setIsOpen(false)}>
    {/* <Wrap> */}
      <Header onClick={() => setIsOpen(!isOpen)}>
        {activeItem[displayName] || label}
        <Toggle svg={chevronDownSvg} />
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
