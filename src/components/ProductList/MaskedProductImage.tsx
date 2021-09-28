import React from 'react'
import styled from 'styled-components'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { MaskBackgroundSvg } from '../Images/BackgroundMaskSvg'
import { CoreArabescSvg } from '../Images/CoreArabescSvg'

const CoreContainer = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;

  svg {
    margin: 0;
    padding: 0;
    display: block;
    max-width: 100%;
  }
`

const MaskContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  border: 1px dashed #f00;
`

export const MaskedProductImage: React.FC = ({ children }) => {
  const { theme } = useAppTheme()
  return (
    <MaskContainer>
      <MaskBackgroundSvg color={theme.colors.primary} size={185} />
      {children}
      <CoreContainer>
        <CoreArabescSvg width={100} color={theme.colors.primary} />
      </CoreContainer>
    </MaskContainer>
  )
}
