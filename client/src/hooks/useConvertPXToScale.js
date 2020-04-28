import { useState } from 'react'

const UseConvertPXToScale = (initialValue) => {
  const [scaleSaved, setScale] = useState(initialValue)
  const [isSaved, setIsSaved] = useState(false)

  const updateScale = ({ ref, inPixels }) => {
    console.log('in or out')
    if (isSaved) {
      setScale(1)
      setIsSaved(false)
      return
    }
    const { width } = ref.current.getBoundingClientRect()
    const scale = 1 - inPixels / width
    const scaleRounded = Number(scale.toFixed(4))
    setScale(scaleRounded)
    setIsSaved(true)
  }

  return [scaleSaved, updateScale]
}

export default UseConvertPXToScale
