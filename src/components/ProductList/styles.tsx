import styled from 'styled-components'

export const ProductLink = styled.a`
  margin: 0;
  padding: 0;
  outline: none;
  display: flex;
  flex-flow: column nowrap;
`

export const ProductItemContainer = styled.div<{ space?: number }>`
  display: flex;
  margin: 0;
  flex-flow: column nowrap;
  padding: ${({ space }) => space || 0}px;
  width: 50%;
  border: 1px solid #000;
  @media (min-width: 500px) {
    width: auto;
  }
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;
`
