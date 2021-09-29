import styled from 'styled-components'

export const AppBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-self: center;
  align-content: center;
  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing.l || 10}px;
`

export const ItemBar = styled.div``
