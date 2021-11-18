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

export const ItemBadge = styled.span<{ showing?: boolean }>`
  visibility: ${({ showing }) => (showing ? 'visible' : 'hidden')};
  position: absolute;
  display: inline-block;
  line-height: 10px;
  font-size: 10px;
  width: 14px;
  height: 14px;
  overflow: hidden;
  text-align: center;
  top: -4px;
  right: -14px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 2px;
  margin: 0;
  border-radius: 7px;
  transition: all ease-in-out 0.3s;
  transform: scale(${({ showing }) => (showing ? 1 : 0.5)});
`

export const ItemBar = styled.button`
  position: relative;
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
