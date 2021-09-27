import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/global'

import { useAppTheme } from './useAppTheme'

export const StyledProvider: React.FC = ({ children }) => {
  const { theme } = useAppTheme()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
