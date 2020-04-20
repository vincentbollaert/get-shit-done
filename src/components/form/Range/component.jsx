import React from 'react'
import { string, number, func } from 'prop-types'
import styled from 'styled-components'
import { AMAZONITE, WHITE } from '../../../styles'

const STYLE_THUMB_SIZE = '3rem'
const STYLE_TRACK_HEIGHT = '0.9rem'
const TEST = '#5bccff'

const STYLES_THUMB = `
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${STYLE_THUMB_SIZE};
  height: ${STYLE_THUMB_SIZE};
  border-radius: 50%;
  background-color: ${WHITE};
  font-weight: bold;
  color: ${TEST};
  font-size: 11px;
  box-shadow: 0px 1px 5px -2px #8a8a8abf;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 160px;
  height: ${STYLE_THUMB_SIZE};
`
const InnerWrap = styled.div`
  position: relative;
  height: ${STYLE_TRACK_HEIGHT};
  margin: 0 12px;
`
const Track = styled.div`
  height: 100%;
  background-color: rgba(188, 188, 188, 0.5);
  border-radius: 4px;
  box-shadow: inset 0 2px 5px -3px #8a8a8abf;
`

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: ${p => p.left}%;
  right: ${p => p.right}%;
  height: 100%;
  background-color: ${TEST};
  box-shadow: inset 0 2px 5px -3px #07567a80;
`
const Thumb = styled.div`
  ${STYLES_THUMB};
  position: absolute;
  left: ${p => p.left}%;
`

const Slider = styled.input`
  position: absolute;
  pointer-events: none;
  -webkit-appearance: none;
  z-index: 1;
  height: 100%;
  top: 0;
  width: 100%;
  opacity: 0;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: transparent;
    border: transparent;
  }

  &::-webkit-slider-thumb {
    pointer-events: all;
    width: ${STYLE_THUMB_SIZE};
    height: ${STYLE_THUMB_SIZE};
    -webkit-appearance: none;
  }

  &:active + ${ProgressBar} {
    background-color: ${AMAZONITE};
  }
`

const Range = ({ valueFrom, valueTo, step, idFrom, idTo, min, max, className, onChange }) => (
  <Wrap className={className}>
    <InnerWrap>
      <Track />
      <ProgressBar
        isVisible={valueFrom || valueTo}
        left={(valueFrom / max) * 100}
        right={100 - (valueTo / max) * 100}
      />
      <Thumb left={parseInt((valueFrom / max) * 100)}>{valueFrom}</Thumb>
      <Thumb left={parseInt((valueTo / max) * 100)}>{valueTo}</Thumb> 
    </InnerWrap>
    <Slider
      type="range"
      id={idFrom}
      name={idFrom}
      step={step}
      value={valueFrom}
      min={min}
      max={max}
      onChange={onChange}
    />
    <Slider
      type="range"
      id={idTo}
      name={idTo}
      step={step}
      value={valueTo || max}
      min={min}
      max={max}
      onChange={onChange}
    />
  </Wrap>
)

Range.propTypes = {
  label: string,
  valueFrom: number.isRequired,
  valueTo: number.isRequired,
  idFrom: string,
  idTo: string,
  step: number,
  min: number,
  max: number,
  className: string,
  onChange: func,
}

Range.defaultProps = {
  label: undefined,
  idFrom: undefined,
  idTo: undefined,
  step: 1,
  min: 0,
  max: 23,
  className: '',
  onChange() {},
}

export default Range
