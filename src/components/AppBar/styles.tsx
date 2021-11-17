import styled from 'styled-components'

import { darken } from '~/helpers/colors'

export const AppBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-self: center;
  align-content: center;
  margin: 0 auto;
  min-height: 44px;

  padding: ${({ theme }) => theme.spacing.l || 10}px;
`

export const ItemBar = styled.button`
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => darken(theme.colors.primary, 0.5)};
  transition: all ease-in-out 0.2s;
  &:hover {
    color: ${({ theme }) => darken(theme.colors.primary, 0.8)};
  }
`
