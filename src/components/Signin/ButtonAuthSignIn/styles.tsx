import styled from 'styled-components'
import { darken } from '~/helpers/colors'

export const Button = styled.button<{ spacing?: number; bgColor?: string; textColor?: string }>`
  cursor: pointer;
  border: 1px solid ${({ bgColor = 'none' }) => bgColor};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  color: ${({ textColor = 'inherit' }) => textColor};
  font-weight: bold;
  font-size: 16px;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  margin: 0px ${({ spacing }) => spacing || 'auto'}px;
  border-radius: ${({ theme }) => theme.rounded}px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: ${({ theme }) => theme.spacing.l}px;
  &:hover {
    background-color: ${({ bgColor = 'transparent' }) => darken(bgColor, 0.5)};
  }
`