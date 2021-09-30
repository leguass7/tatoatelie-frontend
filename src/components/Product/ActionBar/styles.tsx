import styled from 'styled-components'

import { VariantColorsTypes } from '~/components/AppThemeProvider/types'
import { AlignType } from '~/styles/styledTypes'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.l}px;
`
export const ActionDescription = styled.div<AlignType & { color?: string }>`
  text-align: ${({ align }) => align};
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ theme, color }) => color || theme.colors.primary};
  font-size: 14px;
  span {
    font-size: 16px;
  }
`

export const Button = styled.button<{ color?: string; themeColor?: VariantColorsTypes } & { hoverColor?: string }>`
  font-size: 18px;
  cursor: pointer;
  outline: none;
  font-family: 'Maiandra GD';
  transition: all ease-in-out 0.2s;
  padding: ${({ theme }) => theme.spacing.l}px;
  border: 2px solid ${({ theme, themeColor = 'primary' }) => theme.colors[themeColor]};
  background-color: ${({ theme, themeColor = 'primary' }) => theme.colors[themeColor]};
  color: ${({ theme, color }) => color || theme.colors.white};
  border-radius: ${({ theme }) => theme.rounded}px;
  &:hover,
  &:active {
    border-color: ${({ theme, themeColor = 'primary', hoverColor }) => hoverColor || theme.colors[themeColor]};
  }
  &:disabled {
    filter: grayscale(100%);
    opacity: 0.4;
    cursor: default;
  }
`
