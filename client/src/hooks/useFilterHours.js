import { useState } from 'react'

const useFilterHours = () => {
  const hoursInDay = Array(24).fill(null).map((item, index) => index)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(23)
  const [hoursToDisplay, setHoursToDisplay] = useState(hoursInDay)

  const filterHours = (event) => {
    const { name, value } = event.target
    if (name === 'min') {
      setMin(value)
    } else {
      setMax(value)
    }
    setHoursToDisplay(hoursInDay.filter(hour => hour >= min && hour <= max))
  }

  return [hoursToDisplay, filterHours]
}

export default useFilterHours
