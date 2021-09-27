import { memo } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body {
    background-color: rgba(0,0,0,0.09);
  }
`

export default memo(GlobalStyle)
