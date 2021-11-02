import React, { useCallback, useMemo, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { BackgroundMaskSvg } from '~/components/Images/BackgroundMaskSvg'
import { CoreArabescSvg } from '~/components/Images/CoreArabescSvg'
import { round } from '~/helpers'

import { CoreContainer, MaskContainer } from '../styles'

const MaskContainerImage = styled.div<{ internalWidth?: number; color: string; internalMargin: number }>`
  position: absolute;
  display: block;
  width: ${({ internalWidth }) => internalWidth}px;
  max-width: 100%;
  height: auto;
  top: ${({ internalMargin }) => internalMargin}px;
  left: ${({ internalMargin }) => internalMargin}px;
  transition: all ease-in-out 0.2s;
  background-color: #fff;
  overflow: hidden;
  img {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ color }) => color};
    max-width: 100%;
    transition: all ease-in-out 0.2s;
  }
`
type Props = {
  width?: number
  actived?: boolean
}
export const MaskedStencilImage: React.FC<Props> = ({ children, width = 420, actived }) => {
  const [initialWidth, setInitialWidth] = useState(width)
  const { theme } = useAppTheme()

  const onResize = useCallback(
    w => {
      setInitialWidth(() => (w < width ? w : width))
    },
    [width]
  )
  const { ref: resizeRef } = useResizeDetector({ onResize })

  const [externalWidth, internalWidth, coreWidth, internalMargin, lineWidth] = useMemo(() => {
    return [
      initialWidth,
      round(initialWidth / 1.23, 0),
      Math.min(round(initialWidth / 3.119475928044089, 0)),
      round(initialWidth / 11.1, 0),
      Math.min(round(initialWidth / 92.5, 2), 2.5)
    ]
  }, [initialWidth])

  return (
    <MaskContainer ref={resizeRef}>
      <BackgroundMaskSvg
        color={theme.colors.primary}
        size={externalWidth}
        lineWidth={lineWidth}
        orientation="landscape"
      />
      <MaskContainerImage internalWidth={internalWidth} internalMargin={internalMargin} color={theme.colors.secondary}>
        {children}
      </MaskContainerImage>
      <CoreContainer>
        <CoreArabescSvg width={actived ? coreWidth * 1.1 : coreWidth} color={theme.colors.primary} />
      </CoreContainer>
    </MaskContainer>
  )
}
