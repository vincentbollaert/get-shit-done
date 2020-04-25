import { useState } from 'react'
import format from 'date-fns/format'

const useFilterDays = (daysInMonth) => {
  const [daysToDisplay, setDaysToDisplay] = useState(daysInMonth)

  const filterDays = ({ from, to }) => {
    setDaysToDisplay(daysInMonth.filter(day => Number(format(day, 'd')) >= from && Number(format(day, 'd')) <= to))
  }

  return [daysToDisplay, filterDays]
}

export default useFilterDays
