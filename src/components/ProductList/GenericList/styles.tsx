import styled, { css } from 'styled-components'

export const GenericItemContainer = styled.div<{ space?: number }>`
  display: flex;
  margin: 0;
  flex-flow: column nowrap;
  padding: ${({ space }) => space || 0}px;
  width: 100%;
`

export const GenericProductsContainer = styled.div<{ columns?: number }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 500px) {
    justify-content: space-around;
  }

  ${GenericItemContainer} {
    @media (min-width: 500px) {
      width: 50%;
    }
    @media (min-width: 720px) {
      width: 33.333%;
    }
    ${({ columns }) =>
      columns
        ? css`
            width: ${100 / columns}%;
          `
        : null}
  }
`
