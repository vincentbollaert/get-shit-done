import { useState } from 'react'

const UseSetCustomRange = ({ from, to, cb }) => {
  const [{ fromDefault, toDefault }] = useState({ fromDefault: from, toDefault: to })
  const [{ fromCustom, toCustom}, setCustom] = useState({}) 

  const onSetCustom = (hour) => {
    if (!fromCustom) {
      setCustom({ fromCustom: hour })
    } else {
      setCustom({ toCustom: hour, fromCustom })
      cb({ from: fromCustom, to: hour })
    }

    if (fromCustom !== undefined && toCustom !== undefined) {
      setCustom({})
      cb({ from: fromDefault, to: toDefault })
    }
  }

  return [
    {
      isCustomSet: fromCustom !== undefined && toCustom !== undefined,
      isSetInProgress: fromCustom !== undefined && toCustom === undefined,
      from: fromCustom || fromDefault,
      to: toCustom || toDefault,
    },
    onSetCustom,
  ]
}

export default UseSetCustomRange
