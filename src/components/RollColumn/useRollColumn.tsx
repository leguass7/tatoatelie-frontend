import { useCallback, useContext } from 'react'
import RollColumnContext from './Context'

export default function useRollColumn() {
  const { goToColumn } = useContext(RollColumnContext)

  const goto = useCallback(
    function <T>(order: number, props?: T) {
      if (goToColumn) goToColumn(order, props)
    },
    [goToColumn]
  )

  return { goToColumn: goto }
}
