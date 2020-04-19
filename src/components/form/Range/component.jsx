import React from 'react'
import { string, number, func } from 'prop-types'
import styled from 'styled-components'
import { AMAZONITE, WHITE } from '../../../styles'
import { STYLE_BORDER_COLOR } from '../constants'

const STYLE_THUMB_SIZE = '2rem'
const STYLES_TRACK = `
  width: 100%;
  height: 3px;
  background-color: ${STYLE_BORDER_COLOR};
`
const TEST = '#e78b8b'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  width: 150px;
  height: 3px;
`

const ProgressBar = styled.div`
  position: absolute;
  left: ${p => p.left}%;
  right: ${p => p.right}%;
  height: 3px;
  background-color: ${TEST};
`
const Thumb = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${p => p.left}%;
  top: 0;
  transform: translate(-50%, -50%);
  width: ${STYLE_THUMB_SIZE};
  height: ${STYLE_THUMB_SIZE};
  border-radius: 50%;
  background-color: ${TEST};
  font-weight: bold;
  color: ${WHITE};
  font-size: 9px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;

  &:active {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
    background-color: ${AMAZONITE};
  };
`

const Slider = styled.input`
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  position: absolute;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-moz-slider-runnable-track {
    ${STYLES_TRACK};
  }

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    ${STYLES_TRACK};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:active + ${ProgressBar} {
    background-color: ${AMAZONITE};
  }
`

const Range = ({ valueFrom, valueTo, step, idFrom, idTo, max, className, onChange }) => (
  <Wrap className={className}>
    <Slider
      type="range"
      id={idFrom}
      name={idFrom}
      step={step}
      value={valueFrom || 0}
      max={max}
      onChange={onChange}
    />
    <Slider
      type="range"
      id={idTo}
      name={idTo}
      step={step}
      value={valueTo || max}
      min={0}
      max={max}
      onChange={onChange}
    />
    <ProgressBar isVisible={valueFrom || valueTo} left={(valueFrom / max) * 100} right={100 - (valueTo / max) * 100} />
    <Thumb left={(valueFrom / max) * 100}>{valueFrom}</Thumb>
    <Thumb left={(valueTo / max) * 100}>{valueTo}</Thumb>
  </Wrap>
)

Range.propTypes = {
  label: string,
  valueFrom: number,
  valueTo: number,
  idFrom: string,
  idTo: string,
  step: number,
  max: number,
  className: string,
  onChange: func,
}

Range.defaultProps = {
  label: undefined,
  idFrom: undefined,
  idTo: undefined,
  valueFrom: 0,
  valueTo: 100,
  step: 1,
  max: 100,
  className: '',
  onChange() {},
}

export default Range
