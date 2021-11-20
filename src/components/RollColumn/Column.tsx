import { useCallback, useContext, useEffect, useRef, useState } from 'react'

import RollColumnContext from './Context'
import { ColumnContainer } from './styles'

interface ColumnChangeParams {
  columnId?: string
  order?: number
}
interface ColumnChange {
  (_params?: ColumnChangeParams, _ref?: HTMLDivElement): void
}

interface ColumnProps {
  id?: string
  onChange?: ColumnChange
}

function genColumnId(): string {
  return `${Math.floor(Math.random() * 10000)}`
}

const Column: React.FC<ColumnProps> = ({ children, id, onChange }) => {
  const columnRef = useRef<HTMLDivElement>(null)
  const { registerColumn, unregisterColumn } = useContext(RollColumnContext)
  const [useId] = useState(genColumnId())

  const columnChange = useCallback(
    (order, ref) => {
      if (onChange && typeof onChange === 'function') {
        onChange({ columnId: useId, order }, ref)
      }
    },
    [onChange, useId]
  )

  useEffect(() => {
    if (columnRef && columnRef.current) {
      registerColumn({
        id: useId,
        ref: columnRef.current,
        onChange: columnChange
      })
    }
    return () => unregisterColumn(useId)
  }, [registerColumn, unregisterColumn, useId, columnChange])

  return (
    <ColumnContainer id={id} ref={columnRef}>
      {children}
    </ColumnContainer>
  )
}

export default Column
