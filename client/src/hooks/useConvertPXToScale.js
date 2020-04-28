import { useState } from 'react'

const UseConvertPXToScale = (initialValue) => {
  const [state, setState] = useState(initialValue)

  const setScale = ({ ref, inPixels }) => {
    const { width } = ref.current.getBoundingClientRect()
    const scale = 1 - inPixels / width
    const scaleRounded = Number(scale.toFixed(4))
    setState(scaleRounded)
  }

  return [state, setScale]
}

export default UseConvertPXToScale
