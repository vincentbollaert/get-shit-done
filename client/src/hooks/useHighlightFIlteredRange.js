import { useState, useEffect } from 'react'

const UseSetCustomRangeLabels = ({ isBeingFiltered, isFiltered, from }) => {
  const [filteredRange, setFilteredRange] = useState([])

  const updateList = (e) => {
    if (!isBeingFiltered) return

    const current = Number(e.target.innerHTML)
    const fromToDifference = Math.max(current, from) - Math.min(current, from)
    const differenceArray = Array(fromToDifference).fill(null).map((x, index) => Math.max(current, from) - index)
    const updatedRange = [...new Set([from, ...differenceArray, current])]
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
