import { memo } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createGlobalStyle } from 'styled-components'

import { BackgroundSvg } from '~/components/Images/BackgroundSvg'
import { brighten } from '~/helpers/colors'

const renderBackground = (orientation: 'portrait' | 'landscape', color?: string) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSvg orientation={orientation} color={color} />))
  return `url("data:image/svg+xml,${svgString}")`
}

const GlobalStyle = createGlobalStyle`
  * {
     box-sizing: border-box;
  }

  html {
    height: 100%;
    margin: 0 auto;
    padding: 0;
  }

  body {
    margin: 0 auto;
    padding: 0;
    background-color: rgba(255, 255, 255, 1);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  @media (orientation: landscape) {
    body { background-image: ${({ theme }) => renderBackground('landscape', brighten(theme.colors.secondary, 0.5))}; }
  }

  @media (orientation: portrait) {
    body { background-image: ${({ theme }) => renderBackground('portrait', brighten(theme.colors.secondary, 0.5))}; }
  }

  #__next{
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
  }

`

export default memo(GlobalStyle)
