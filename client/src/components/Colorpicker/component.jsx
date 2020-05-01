import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { CHARCOAL } from '../../styles'

const Wrap = styled.div`
  position: relative;
`
const Toggle = styled.div`
  background-color: ${p => p.color || '#eee'};
  width: 16px;
  height: 16px;
  border-radius: 50%;
`
const Colors = styled.div`
  display: ${p => p.isOpen ? 'flex' : 'none'};
  width: 208px;
  background-color: ${CHARCOAL};
  position: absolute;
  top: 0;
  left: 100%;
  flex-wrap: wrap;
  padding: 4px;
  margin-left: 28px;
  background: ${CHARCOAL};
  box-shadow: 3px 3px 8px -5px ${CHARCOAL};
`
const Color = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${p => p.color};

  &:hover {
    z-index: 1;
    box-shadow: 0 0 0 1px ${CHARCOAL};
  };
`

const Colorpicker = ({ selectColor }) => {
  const { colors } = useSelector(state => state.settings)
  const [isOpen, toggleIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(false)

  function handleClick(color) {
    setSelectedColor(color)
    selectColor(color)
  }
  return (
    <Wrap>
      <Toggle color={colors[selectedColor]} onClick={() => toggleIsOpen(!isOpen)}></Toggle>
      <Colors isOpen={isOpen}>
        {Object.entries(colors).map(([key, value]) => (
          <Color color={value} key={key} onClick={() => handleClick(key)} />
        ))}
      </Colors>
    </Wrap>
  )
}

export default Colorpicker
