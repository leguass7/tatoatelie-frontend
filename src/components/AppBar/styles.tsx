import styled from 'styled-components'

import { alpha } from '~/helpers/colors'

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

export const ItemBar = styled.div``

export const ButtonItem = styled.button<{ textSize?: number; disabled?: boolean }>`
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m}px;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  padding-left: ${({ theme }) => theme.spacing.m}px;
  cursor: pointer;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.rounded}px;
  border: 0;
  font-size: ${({ textSize = 16 }) => textSize}px;
  font-family: 'Maiandra GD', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  filter: grayscale(${({ disabled }) => (disabled ? 100 : 0)}%);

  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? 'transparent' : alpha(theme.colors.border, 0.3))};
  }
`

export const Divider = styled.hr<{ textColor?: string }>`
  padding: 0;
  margin: ${({ theme }) => theme.spacing.m}px auto;
  height: 1px;
  border: 0;
  border-bottom: 1px solid ${({ theme, textColor }) => textColor || theme.colors.border};
  color: ${({ textColor = 'inherit' }) => textColor};
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m}px;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  padding-left: 0;
`

export const MenuContainer = styled.div<{ textColor?: string }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ textColor = 'inherit' }) => textColor};
  ${MenuItem} {
    color: ${({ textColor = 'inherit' }) => textColor};
  }
  ${ButtonItem} {
    color: ${({ textColor = 'inherit' }) => textColor};
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
`

export const CloseModal = styled.button<{ bgColor?: string; textColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  top: 0;
  left: 0;
  border: 3px solid ${({ textColor }) => textColor};
  transform: translate(-50%, -50%);
  border-radius: 50%;
  padding: 0;
  margin: 0 auto;
  margin-left: 50%;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  width: 38px;
  height: 38px;
  box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 3px;
  cursor: pointer;
`
