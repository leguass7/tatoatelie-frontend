import type { NextPage } from 'next'
import styled from 'styled-components'

import logo from '~/assets/images/logo-face.png'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { FlexOne } from '~/components/styled'

const ImageContainer = styled.div<{ color: string }>`
  img {
    max-width: 100%;
    width: 280px;
    margin: 0 auto;
  }
  p {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-weight: bold;

    color: ${({ color }) => color};
  }
`

const Home: NextPage = () => {
  const { theme } = useAppTheme()
  return (
    <FlexOne justify="center" align="center" height="100%" backgroundTheme="secondary">
      <FlexOne grow={2} justify="center" align="center">
        <ImageContainer color={theme.colors.primary}>
          <img src={logo} alt="Tato Ateliê" />
          <p>growing</p>
        </ImageContainer>
      </FlexOne>
      <FlexOne grow={1}></FlexOne>
    </FlexOne>
  )
}

export default Home
