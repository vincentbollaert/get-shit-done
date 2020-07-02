import { useState } from 'react'

const UseFullscreenToggle = (initialState: boolean) => {
  const [state, setIsFullscreen] = useState(initialState)

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
        setIsFullscreen(true)
        document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return [state, toggleFullScreen]
}

export default UseFullscreenToggle
