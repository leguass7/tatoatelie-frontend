import { memo } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createGlobalStyle } from 'styled-components'

import { BackgroundSvg } from '~/components/Images/BackgroundSvg'
import { brighten } from '~/helpers/colors'
import { maiandraGd } from '~/styles/fonts'

const renderBackground = (orientation: 'portrait' | 'landscape', color?: string) => {
  const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSvg orientation={orientation} color={color} />))
  return `url("data:image/svg+xml,${svgString}")`
}

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Maiandra GD';
    src: local("Maiandra GD"),
      url('${maiandraGd.maiandraGdWOFF2}') format('woff2'),    
      url('${maiandraGd.maiandraGdWOFF}') format('woff'),
      url('${maiandraGd.maiandraGdEOT}'),
      url('${maiandraGd.maiandraGdEOT}?#iefix') format('embedded-opentype'),
      url('${maiandraGd.maiandraGdSVG}') format('svg');
    font-weight: 300;
    font-style: normal;
  }
  
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
    background-attachment: fixed;
    font-family: 'Maiandra GD', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  @media (orientation: landscape) {
    body { background-image: ${({ theme }) => renderBackground('landscape', brighten(theme.colors.secondary, 1.2))}; }
  }

  @media (orientation: portrait) {
    body { background-image: ${({ theme }) => renderBackground('portrait', brighten(theme.colors.secondary, 1.2))}; }
  }

  #__next{
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
  }

`

export default memo(GlobalStyle)
