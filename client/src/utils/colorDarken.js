// https://jsperf.com/color-darken
export function colorDarken(color, amount) {
  const colorValues = color.match(/[0-9]+/g).map(x => Number(x))
  const primary = Math.max(...colorValues)
  const colorValuesUpdated = colorValues.map(x => x === primary ? x + (Math.round(amount / 1.5)) : x + amount).join(',')

  return `rgb(${colorValuesUpdated})`
}
