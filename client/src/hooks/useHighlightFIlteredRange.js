import { useState, useEffect } from 'react'

const UseSetCustomRangeLabels = ({ isBeingFiltered, isFiltered, from }) => {
  const [filteredRange, setFilteredRange] = useState([])

  const updateList = (current) => {
    if (!isBeingFiltered) return
    const fromFormatted = Number(from)
    const fromToDifference = Math.max(current, fromFormatted) - Math.min(current, fromFormatted)
    const differenceArray = Array(fromToDifference).fill(null).map((x, index) => Math.max(current, fromFormatted) - index)
    const updatedRange = [...new Set([fromFormatted, ...differenceArray, current])]
    setFilteredRange(updatedRange)
  }

  useEffect(() => {
    if (isFiltered) {
      setFilteredRange([])
    }
  }, [isFiltered])

  return [filteredRange, updateList]
}

export default UseSetCustomRangeLabels
