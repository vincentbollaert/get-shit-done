import { useState } from 'react'

const UseRangeFilter = ({ from, to, cb }) => {
  const [{ fromDefault, toDefault }] = useState({ fromDefault: from, toDefault: to })
  const [{ fromCustom, toCustom}, applyFilters] = useState({}) 

  const onFilter = (hour) => {
    if (!fromCustom) {
      applyFilters({ fromCustom: hour })
    } else {
      applyFilters({ toCustom: hour, fromCustom })
      cb({ from: Math.min(fromCustom, hour), to: Math.max(fromCustom, hour) })
    }

    if (fromCustom !== undefined && toCustom !== undefined) {
      applyFilters({})
      cb({ from: fromDefault, to: toDefault })
    }
  }

  return [
    {
      isFiltered: fromCustom !== undefined && toCustom !== undefined,
      isBeingFiltered: fromCustom !== undefined && toCustom === undefined,
      from: fromCustom || fromDefault,
      to: toCustom || toDefault,
    },
    onFilter,
  ]
}

export default UseRangeFilter
