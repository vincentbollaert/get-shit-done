// https://jsperf.com/color-darken
export function rgbAdjust(color, amount) {
  const colorValues = color.match(/[0-9]+/g).map(x => Number(x))
  const primary = Math.max(...colorValues)
  const colorValuesUpdated = colorValues.map(x => x === primary ? x + (Math.round(amount / 1.5)) : x + amount).join(',')

  return `rgb(${colorValuesUpdated})`
}

export const flex = ({ grow, shrink, basis, isCenter }) => `
  display: flex;
  flex-grow: ${grow};
  flex-shrink: ${shrink};
  flex-basis: ${basis};

  ${isCenter && `
    justify-content: center;
    align-items: center;
    text-align: center;
  `};
`

export const ellipsis = () => `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
