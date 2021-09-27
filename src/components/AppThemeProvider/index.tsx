import React from 'react'

import ThemeProvider from './Provider'
import { StyledProvider } from './StyledProvider'
import { ThemeProviderProps } from './types'

export const AppThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledProvider>{children}</StyledProvider>
    </ThemeProvider>
  )
}
