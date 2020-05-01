import React from 'react'
import styled from 'styled-components'
import { SIZE_LG, SIZE_XLG, LAVENDER, FONT_SIZE_MD, CAPRI, INDEPENDENCE, WHITE } from '../../styles'

const Wrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${SIZE_LG};
  padding-bottom: 1px;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: ${CAPRI};
  color: rgba(255, 255, 255, 0.9);
  font-size: ${FONT_SIZE_MD};
  text-transform: uppercase;
  cursor: pointer;

  ${p => p.isInForm && `
    margin-top: ${SIZE_XLG};
  `};

  &:hover {
    background-color: #58cbff;
    color: ${WHITE};
  };

  &:disabled {
    pointer-events: none;
    background-color: ${INDEPENDENCE};
    color: ${LAVENDER};
  };
`
const Button = ({ isDisabled, isInForm, type = 'button', children, onClick }) => (
  <Wrap disabled={isDisabled} isInForm={isInForm} type={type} onClick={onClick}>
    {children}
  </Wrap>
)

export default Button