import { useState } from 'react'

const UseConvertPXToScale = (initialValue) => {
  const [scaleSaved, setScale] = useState(initialValue)
  const [axisSaved, setAxis] = useState('x')

  const updateScale = ({ ref, inPixels, show, axis }) => {
    if (show === false) {
      setScale(1)
      return
    }
    const { width, height } = ref.current.getBoundingClientRect()
    const scale = 1 - inPixels / (axis === 'y' ? height : width)
    const scaleRounded = Number(scale.toFixed(4))
    setScale(scaleRounded)
    if (axis === 'y') setAxis('y')
  }

  return [{ axis: axisSaved, scale: scaleSaved, updateScale }]
}

export default UseConvertPXToScale
