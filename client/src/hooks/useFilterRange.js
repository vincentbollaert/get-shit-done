import { useState } from 'react'
import { useDispatch } from 'react-redux'

const UseRangeFilter = ({ from, to, cb }) => {
  const dispatch = useDispatch()
  const [{ fromDefault, toDefault }] = useState({ fromDefault: from, toDefault: to })
  const [{ fromCustom, toCustom}, applyFilters] = useState({}) 

  const onFilter = (hour) => {
    if (!fromCustom) {
      applyFilters({ fromCustom: hour })
    } else if (!toCustom){
      applyFilters({ toCustom: hour, fromCustom })
      dispatch(cb({ from: Math.min(fromCustom, hour), to: Math.max(fromCustom, hour) }))
    }

    if (fromCustom !== undefined && toCustom !== undefined) {
      applyFilters({})
      dispatch(cb({ from: fromDefault, to: toDefault }))
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
