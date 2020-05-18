// https://gist.github.com/vincentbollaert/e90def9b351d8d97c90ef7cfd887685e

// font-size
export const FONT_SIZE = {
  xxsm: '0.9rem',
  xsm: '1rem',
  sm: '1.1rem',
  md: '1.2rem',
  lg: '1.3rem',
  xlg: '1.6rem',
}

// units
export const UNIT_SIZE = {
  xsm: '0.4rem',
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xlg: '2.4rem',
}

// scrollbar
export const SCROLLBARS_MIN_LIGHT = `
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-left: 1px solid var(--white-smoke);
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    border: none;
    border-radius: 0;
    background: #b3c1c5;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`
