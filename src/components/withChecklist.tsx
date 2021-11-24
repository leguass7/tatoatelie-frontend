import { useCallback, useEffect, useState, FC } from 'react'

export interface CheckListItemProps extends Record<string, any> {
  selected?: boolean
  id: number
  label?: string
  onClick?: (_id: number) => void
}

export interface CheckListProps<T> {
  list?: T[]
  onChange?: (_idSelected: number[]) => void
  multiple?: boolean
  defaultSelected?: number[]
}

interface Selected {
  id: number
  selected?: boolean
}

function normalizeList(list: Selected[] = [], defaultSelected = []): Selected[] {
  const newList = list
    .filter(l => !!l)
    .map(l => {
      const selected = !!l?.selected || defaultSelected.includes(l?.id)
      return { id: l.id, selected }
    })
    .filter(l => !!l)
  return newList
}

function findId(list?: Selected[], id?: number): Selected {
  return list && list.find(l => l && id && l.id === id)
}

export function withCheckList<T extends CheckListItemProps>(Component: FC<T>) {
  const CheckList = ({ list = [], multiple, onChange, defaultSelected }: CheckListProps<T>) => {
    const [selected, setSelected] = useState<Selected[]>(normalizeList(list, defaultSelected))
    const [toEmit, setToEmit] = useState(false)

    const handleItemClick: CheckListItemProps['onClick'] = useCallback(
      id => {
        const filter = (lst: Selected[]) => {
          const found = findId(lst, id)
          const clicked = found || { id, selected: false }
          const newList = found ? lst : [...lst, clicked]
          if (multiple) {
            return newList.map(l => (l.id === id ? { ...l, selected: !l.selected } : l))
          }
          return newList.map(l => ({ ...l, selected: l.id === id ? !clicked.selected : false }))
        }

        setSelected(filter)
        if (onChange) setToEmit(true)
      },
      [multiple, onChange]
    )

    const emitChange = useCallback(() => {
      if (onChange && typeof onChange === 'function') {
        onChange(selected.filter(l => !!l.selected).map(l => l.id))
      }
      setToEmit(false)
    }, [onChange, selected])

    useEffect(() => {
      if (toEmit) emitChange()
    }, [toEmit, emitChange])

    return (
      <>
        {list.map(item => {
          const found = findId(selected, item.id)
          return <Component key={item.id} {...item} selected={!!(found && found.selected)} onClick={handleItemClick} />
        })}
      </>
    )
  }
  return CheckList
}
