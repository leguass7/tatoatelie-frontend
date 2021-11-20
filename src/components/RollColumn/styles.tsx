import styled, { css } from 'styled-components'

export const ColumnContainer = styled.div`
  border: 0;
  width: 100%;
  overflow-x: hidden;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  border: 0;
  box-sizing: border-box;
  transform: translateX(0);
`

interface RollColumnProps {
  columnWidth?: number
  mainWidth: number
  mainPosition: string
  duration: number
}

export const RollColumn = styled.div<RollColumnProps>`
  box-sizing: border-box;
  outline: none;
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 100% !important;
  overflow-x: hidden;
  height: auto;
  padding: 0;
  border: 0;
  * {
    box-sizing: border-box;
  }
  ${MainContainer} {
    transition: all ease-in-out 0.3s;
    width: ${({ mainWidth }) => (mainWidth ? `${mainWidth}%` : '100%')};
    max-width: ${({ mainWidth }) => (mainWidth ? `${mainWidth}%` : '100%')};
    transform: translateX(${({ mainPosition }) => mainPosition});
    transition-duration: ${({ duration }) => duration}ms;
    ${({ columnWidth }) =>
      !columnWidth
        ? css`
            transition: none !important;
          `
        : null}
    ${ColumnContainer} {
      width: ${({ columnWidth }) => (columnWidth ? `${columnWidth}%` : '100%')};
      max-width: ${({ columnWidth }) => (columnWidth ? `${columnWidth}%` : '100%')};
      min-width: ${({ columnWidth }) => (columnWidth ? `${columnWidth}%` : '100%')};
    }
  }
`
