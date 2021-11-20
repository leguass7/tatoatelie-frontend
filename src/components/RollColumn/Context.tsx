/* eslint-disable no-unused-vars */
import { createContext } from 'react'

export interface IColumn {
  id: string
  ref?: HTMLDivElement
  onChange?: (_columnOrder: number, _ref: HTMLDivElement) => void
}

interface IRollColumnContext {
  registerColumn: (column: IColumn) => void
  unregisterColumn: (columnId: string) => void
  goToColumn: <T>(columnOrder: number, props?: T) => void
  setPosition: (columnOrder: number) => void
  columns?: IColumn[]
  columnWidth?: number
  mainWidth?: number
  mainPosition?: string
}

const errorMessage = (funName: string): void =>
  // eslint-disable-next-line no-console
  console.error(`RollColumn "${funName}" was called out of context`)

const defaultContext: IRollColumnContext = {
  registerColumn: () => errorMessage('registerColumn'),
  unregisterColumn: () => errorMessage('unregisterColumn'),
  goToColumn: () => errorMessage('goToColumn'),
  setPosition: () => errorMessage('setPosition'),
  columns: [],
  columnWidth: 0,
  mainWidth: 0
}

const RollColumnContext = createContext<IRollColumnContext>(defaultContext)

export default RollColumnContext
