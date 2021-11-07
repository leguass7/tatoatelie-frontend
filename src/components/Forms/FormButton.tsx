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
}
export const FormButton: React.FC<Props> = ({
  label,
  variant = 'default',
  type = 'button',
  themeColor = 'primary',
  bold
}) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const textColor = matchingBackgroudText(themeColor)

  return (
    <Button type={type} bgColor={theme.colors[themeColor]} variant={variant} bold={!!bold} textColor={textColor}>
      {label}
    </Button>
  )
}
