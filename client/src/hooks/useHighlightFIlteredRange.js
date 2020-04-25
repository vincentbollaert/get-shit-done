import { useState, useEffect } from 'react'

const UseSetCustomRangeLabels = ({ isBeingFiltered, isFiltered, from }) => {
  const [filteredRange, setFilteredRange] = useState([])

  const updateList = (e) => {
    if (!isBeingFiltered) return
    const fromFormatted = Number(from)

    const current = Number(e.target.innerHTML)
    const fromToDifference = Math.max(current, fromFormatted) - Math.min(current, fromFormatted)
    // console.log('fromToDifference', fromToDifference, current, Math.max(current, fromFormatted))
    const differenceArray = Array(fromToDifference).fill(null).map((x, index) => Math.max(current, fromFormatted) - index)
    const updatedRange = [...new Set([fromFormatted, ...differenceArray, current])]
    console.log(updatedRange)
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
