import React, { useCallback, useMemo, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

import { round } from '~/helpers'

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
  overflow: hidden;
  svg {
    margin: 0;
    padding: 0;
    display: block;
    max-width: 100%;
  }
`

const MaskContainerImage = styled.div<{ internalWidth?: number; color: string; internalMargin: number }>`
  position: absolute;
  display: block;
  width: ${({ internalWidth }) => internalWidth}px;
  max-width: 100%;
  height: auto;
  top: ${({ internalMargin }) => internalMargin}px;
  left: ${({ internalMargin }) => internalMargin}px;
  img {
    border-width: 2px;
    border-style: solid;
    border-color: ${({ color }) => color};
    max-width: 100%;
  }
`
type Props = {
  width?: number
}
export const MaskedProductImage: React.FC<Props> = ({ children, width = 254 }) => {
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
      round(initialWidth / 92.5, 2)
    ]
  }, [initialWidth])

  return (
    <MaskContainer ref={resizeRef}>
      <MaskBackgroundSvg color={theme.colors.primary} size={externalWidth} lineWidth={lineWidth} />
      <MaskContainerImage internalWidth={internalWidth} internalMargin={internalMargin} color={theme.colors.secondary}>
        {children}
      </MaskContainerImage>
      <CoreContainer>
        <CoreArabescSvg width={coreWidth} color={theme.colors.primary} />
      </CoreContainer>
    </MaskContainer>
  )
}
