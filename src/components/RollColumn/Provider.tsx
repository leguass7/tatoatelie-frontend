import { useCallback, useMemo, useState } from 'react'

import { wait } from '~/helpers'
import { useIsMounted } from '~/hooks/useIsMounted'

import Column from './Column'
import RollColumnContext, { IColumn } from './Context'
import { filterChildrenElements } from './reactUtils'
import { RollColumn } from './styles'

function round(number: number, precision = 4): number {
  if (number) {
    const factor = Math.pow(10, precision)
    return Math.round(number * factor) / factor
  }
  return 0
}

export type ColumnChangeHandler = <T = unknown>(_order: number, _props?: T) => void
export interface RollColumnProviderProps {
  onColumnChange?: ColumnChangeHandler
  /** milliseconds */
  duration?: number
  defaultColumn?: number
}

const RollColumnProvider: React.FC<RollColumnProviderProps> = ({
  children,
  onColumnChange,
  duration = 300,
  defaultColumn = 1
}) => {
  const isMounted = useIsMounted()
  const [columns, setColumns] = useState<IColumn[]>([])
  const [position, setPosition] = useState(defaultColumn)

  const initialColumnsCount = useMemo(() => {
    return filterChildrenElements(children, [Column]).length
  }, [children])

  const registerColumn = useCallback(({ id, ...rest }: IColumn) => {
    setColumns(old => {
      const newColumn = { id, ...rest }
      return [...old, newColumn]
    })
  }, [])

  const unregisterColumn = useCallback((columnId: string) => {
    setColumns(old => old.filter(c => c.id !== columnId))
  }, [])

  const goToColumn = useCallback(
    function <T>(columnOrder: number, props?: T) {
      setPosition(columnOrder)
      wait(duration).then(() => {
        if (isMounted.current) {
          if (onColumnChange) onColumnChange(columnOrder, props || {})
        }
      })
    },
    [isMounted, onColumnChange, duration]
  )

  const columnsCount = useMemo(() => columns.length || initialColumnsCount || 0, [columns, initialColumnsCount])

  const columnWidth = useMemo(() => (columnsCount ? round(100 / columnsCount, 4) : 0), [columnsCount])

  const mainWidth = useMemo(() => (columnsCount ? round(100 * columnsCount, 4) : 0), [columnsCount])

  const mainPosition = useMemo(() => {
    let result = position - 1
    if (result < 0) result = 0
    else if (result > columnsCount) result = columnsCount
    return `${result * columnWidth * -1}%`
  }, [position, columnsCount, columnWidth])

  return (
    <RollColumnContext.Provider
      value={{
        registerColumn,
        unregisterColumn,
        columns,
        goToColumn,
        mainWidth,
        mainPosition,
        setPosition
      }}
    >
      <RollColumn columnWidth={columnWidth} mainPosition={mainPosition} mainWidth={mainWidth} duration={duration}>
        {children}
      </RollColumn>
    </RollColumnContext.Provider>
  )
}
export default RollColumnProvider
