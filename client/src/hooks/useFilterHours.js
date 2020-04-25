import { useState } from 'react'

const useFilterHours = (hoursInDay) => {
  const [hoursToDisplay, setHoursToDisplay] = useState(hoursInDay)

  const filterHours = ({ from, to }) => {
    setHoursToDisplay(hoursInDay.filter(hour => hour >= from && hour <= to))
  }

  return [hoursToDisplay, filterHours]
}

export default useFilterHours
