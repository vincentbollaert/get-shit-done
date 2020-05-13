// https://gist.github.com/vincentbollaert/e90def9b351d8d97c90ef7cfd887685e

// font-size
export const FONT_SIZE___SM = '0.9rem'
export const FONT_SIZE__SM = '1rem'
export const FONT_SIZE_SM = '1.1rem'
export const FONT_SIZE_MD = '1.2rem'
export const FONT_SIZE_LG = '1.3rem'
export const FONT_SIZE__LG = '1.6rem'


// units
export const SIZE = {
  xsm: '0.4rem',
  sm: '0.8rem',
  md: '1.2rem',
  lg: '1.6rem',
  xlg: '2.4rem',
}
export const SIZE_XSM_UNIT = 0.4
export const SIZE_SM_UNIT = 0.8
export const SIZE_MD_UNIT = 1.2
export const SIZE_LG_UNIT = 1.6
export const SIZE_XLG_UNIT = 2.4

export const SIZE_XSM = `${SIZE_XSM_UNIT}rem`
export const SIZE_SM = `${SIZE_SM_UNIT}rem`
export const SIZE_MD = `${SIZE_MD_UNIT}rem`
export const SIZE_LG = `${SIZE_LG_UNIT}rem`
export const SIZE_XLG = `${SIZE_XLG_UNIT}rem`


// colors
export const CAPRI = '#3dc3ff'
export const SKY_BLUE = '#78E0FF'
export const LIGHT_SEA_GREEN = '#21baa6'
export const AMAZONITE = '#03d2b6'
export const STEEL_BLUE = '#607D8B'

export const PASTEL_GREEN = '#7bd37c'
export const SUNSET_ORANGE = '#ff5d5d'
export const RED_ORANGE = '#ff4d4d'
export const VERY_LIGHT_TANGELO = '#ffae74'

export const WHITE = '#fff'
export const WHITE_SMOKE = '#f5f5f5'
export const SNOW = '#fafafa'
export const ISABELLINE = '#eee'
export const LAVENDER = '#e2e7f9'
export const GAINSBORO = '#dedede'
export const PASTEL_GRAY = '#ccc'
export const GRAY_X11 = '#bbb'
export const QUICK_SILVER = '#a2a2a2'
export const RHYTHM = '#71788f'
export const SONIC_SILVER = '#787878'
export const SONIC_SILVER_TRANSPARENT = '#f5f5f573'
export const ROMAN_SILVER = '#838899'
export const COOL_GRAY = '#8f99b9'
export const GRANITE_GRAY = '#666'
export const ARSENIC = '#444'
export const ONYX = '#393939'
export const INDEPENDENCE = '#4f5466'
export const JET = '#333'
export const CHARCOAL = '#3d4150'
export const CHARLESTON_GREEN = '#282828'
export const CHARLESTON__GREEN = '#2d2d2d'
export const RAISIN_BLACK = '#222121'
export const EERIE_BLACK = '#1e1e1e'
export const DARK_TRANSPARENT = 'rgba(0, 0, 0, 0.4)'


// styles
export const BOX_SHADOW_LIGHT = '0 2px 11px -7px #0000004f'

// scrollbar
export const SCROLLBARS_MIN_LIGHT = `
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-left: 1px solid ${WHITE_SMOKE};
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

// media queries
const customMediaQuery = (minWidth) =>
  `@media (min-width: ${minWidth}px)`

export const media = {
  custom: customMediaQuery,
  sm: customMediaQuery(540),
  md: customMediaQuery(940),
  lg: customMediaQuery(1140),
}
