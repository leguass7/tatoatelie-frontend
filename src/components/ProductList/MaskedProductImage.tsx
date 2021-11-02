import React, { useCallback, useMemo, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

import { round } from '~/helpers'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { BackgroundMaskSvg } from '../Images/BackgroundMaskSvg'
import { CoreArabescSvg } from '../Images/CoreArabescSvg'
import { CoreContainer, MaskContainer } from './styles'

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
export const MaskedProductImage: React.FC<Props> = ({ children, width = 254, actived }) => {
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
      round(initialWidth / 1.56779, 0),
      round(initialWidth / 2.055555, 0),
      round(initialWidth / 8.40909, 0),
      Math.min(round(initialWidth / 92.5, 2), 2.5)
    ]
  }, [initialWidth])

  return (
    <MaskContainer ref={resizeRef}>
      <BackgroundMaskSvg color={theme.colors.primary} size={externalWidth} lineWidth={lineWidth} />
      <MaskContainerImage internalWidth={internalWidth} internalMargin={internalMargin} color={theme.colors.secondary}>
        {children}
      </MaskContainerImage>
      <CoreContainer>
        <CoreArabescSvg width={actived ? coreWidth * 1.1 : coreWidth} color={theme.colors.primary} />
      </CoreContainer>
    </MaskContainer>
  )
}
