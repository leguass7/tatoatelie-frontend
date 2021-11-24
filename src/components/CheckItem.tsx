import React, { useCallback } from 'react'
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md'
import styled, { css } from 'styled-components'

import { VariantColorsTypes } from './AppThemeProvider/types'
import { useAppTheme } from './AppThemeProvider/useAppTheme'
import { CheckListItemProps } from './withChecklist'

export type CheckItemProps = CheckListItemProps & {
  themeColor?: VariantColorsTypes
  iconSize?: number
}

export const CheckItem = ({ children, id, selected, onClick, themeColor = 'primary', iconSize = 28 }) => {
  const { theme } = useAppTheme()

  const handleClick = useCallback(() => {
    if (onClick) onClick(id)
  }, [id, onClick])

  return (
    <CheckItemContainer textColor={theme.colors[themeColor]}>
      <CheckItemIcon onClick={handleClick}>
        {selected ? <MdOutlineRadioButtonChecked size={iconSize} /> : <MdOutlineRadioButtonUnchecked size={28} />}
      </CheckItemIcon>
      {children}
    </CheckItemContainer>
  )
}

export const CheckItemLine = styled.span<{ textSize?: number; bold?: boolean }>`
  display: block;
  font-size: ${({ textSize = 16 }) => textSize}px;
  line-height: ${({ textSize = 16 }) => textSize}px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`

export const CheckItemDescription = styled.div<{ grow?: number }>`
  transition: all ease-in-out 0.2s;
  padding-top: ${({ theme }) => theme.spacing.m}px;
  padding-bottom: ${({ theme }) => theme.spacing.m}px;
  padding-left: 0;
  padding-right: ${({ theme }) => theme.spacing.l}px;

  ${({ grow }) =>
    grow
      ? css`
          flex: ${grow};
        `
      : null}
`

export const CheckItemIcon = styled.label`
  padding: ${({ theme }) => theme.spacing.l}px;
  display: flex;
  align-self: center;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
`

export const CheckItemContainer = styled.div<{ widthLimit?: number; textColor?: string; stroke?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-width: 100%;
  overflow: hidden;
  transition: all ease-in-out 0.2s;
  width: ${({ widthLimit }) => (widthLimit ? `${widthLimit}px` : 'auto')};
  border-width: ${({ stroke = 2 }) => stroke}px;
  border-color: ${({ textColor = 'inherit' }) => textColor};
  border-style: solid;

  margin-bottom: ${({ theme }) => theme.spacing.l}px;
  border-radius: ${({ theme }) => theme.rounded}px;
  color: ${({ textColor }) => textColor};
`
