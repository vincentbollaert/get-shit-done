// https://gist.github.com/vincentbollaert/e90def9b351d8d97c90ef7cfd887685e

import { WHITE_SMOKE, SONIC_SILVER } from './variables'

export default `
  html {
    height: 100%;
    background-color: ${WHITE_SMOKE};
    color: ${SONIC_SILVER};
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    height: 100%;
    font-size: 1.2rem;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: ${SONIC_SILVER};
    text-decoration: none;
    cursor: pointer;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  input,
  button {
    border: none;
    outline: none;
  }
  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  button {
    padding: 0;
    line-height: 1;
    font-family: inherit;
    color: inherit;
    text-transform: inherit;
    font-weight: inherit;
    text-align: inherit;
    background: transparent;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
    font-family: 'Lato', sans-serif
  }
  p {
    margin: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    text-align: left;
  }
`
