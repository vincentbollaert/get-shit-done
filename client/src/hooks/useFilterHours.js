import { useState } from 'react'

const useFilterHours = () => {
  const hoursInDay = Array(24).fill(null).map((item, index) => index)
  const [hoursToDisplay, setHoursToDisplay] = useState(hoursInDay)

  const filterHours = ({ from, to }) => {
    setHoursToDisplay(hoursInDay.filter(hour => hour >= from && hour <= to))
  }

  return [hoursToDisplay, filterHours]
}

export default useFilterHours
