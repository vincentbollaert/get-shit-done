import { useState } from 'react'

const UseConvertPXToScale = (initialValue) => {
  const [scaleSaved, setScale] = useState(initialValue)

  const updateScale = ({ ref, inPixels, show }) => {
    if (!show) {
      setScale(1)
      return
    }
    const { width } = ref.current.getBoundingClientRect()
    const scale = 1 - inPixels / width
    const scaleRounded = Number(scale.toFixed(4))
    setScale(scaleRounded)
  }

  return [scaleSaved, updateScale]
}

export default UseConvertPXToScale
