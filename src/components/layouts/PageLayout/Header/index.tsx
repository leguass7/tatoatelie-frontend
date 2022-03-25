import Link from 'next/link'
import React from 'react'

import logo from '~/assets/images/logo-face.png'
import { AppBar } from '~/components/AppBar'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ContentLimit } from '~/components/styled'
import { ISegment } from '~/serverSide/repositories/segment'

import { ImageContainer } from './styles'
type Props = {
  segments: ISegment[]
}
export const Header: React.FC<Props> = ({ segments }) => {
  const { theme } = useAppTheme()
  return (
    <>
      <ContentLimit>
        <AppBar segments={segments} />
      </ContentLimit>
      <ImageContainer color={theme?.colors?.primary}>
        <Link href="/" passHref>
          <a>
            <img src={logo} alt="Tato Ateliê" />
          </a>
        </Link>
      </ImageContainer>
    </>
  )
}
