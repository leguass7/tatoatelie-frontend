import React from 'react'

import { VariantColorsTypes } from '../AppThemeProvider/types'
import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { Button } from './styles'
type Props = {
  label: string
  variant?: 'text' | 'default'
  type?: 'button' | 'submit'
  themeColor?: VariantColorsTypes
  bold?: boolean
  disabled?: boolean
  onClick?: () => void
  textSize?: number
}
export const FormButton: React.FC<Props> = ({
  label,
  variant = 'default',
  type = 'button',
  themeColor = 'primary',
  bold,
  disabled,
  onClick,
  textSize = 14
}) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const textColor = matchingBackgroudText(themeColor)

  return (
    <Button
      type={type}
      bgColor={theme.colors[themeColor]}
      variant={variant}
      bold={!!bold}
      textColor={textColor}
      disabled={!!disabled}
      onClick={onClick}
      textSize={textSize}
    >
      {label}
    </Button>
  )
}
