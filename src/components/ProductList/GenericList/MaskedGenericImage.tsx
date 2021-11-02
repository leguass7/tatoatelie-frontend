import cx from 'classnames'
import React, { useCallback, useMemo, useState } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import styled from 'styled-components'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { BackgroundMaskSvg } from '~/components/Images/BackgroundMaskSvg'
import { CoreArabescSvg } from '~/components/Images/CoreArabescSvg'
import { round } from '~/helpers'

import { CoreContainer, MaskContainer } from '../styles'

const SquareLimit = styled.div<{ internalWidth: number; bColor: string; bgImage?: string }>`
  position: relative;
  width: ${({ internalWidth }) => internalWidth}px;
  height: ${({ internalWidth }) => internalWidth}px;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ bColor }) => bColor};
  display: block;
  transition: all ease-in-out 0.2s;
  display: block;
  margin: 0 auto;
  box-sizing: border-box;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ bgImage = '' }) => bgImage});
  img {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    border: 0;
    transition: all ease-in-out 0.2s;
  }
  &.portrait > img {
    position: absolute;
    max-width: 100%;
    width: 100%;
    top: 0;
    left: 0;
    margin-top: 50%;
    transform: translateY(-50%);
  }
  &.landscape > img {
    position: absolute;
    max-height: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin-left: 50%;
    transform: translateX(-50%);
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
  transition: all ease-in-out 0.2s;
  background-color: #fff;
  overflow: hidden;
`

type Props = {
  width?: number
  actived?: boolean
  bgImage?: string
  imageWidth?: number
  imageHeight?: number
}
export const MaskedGenericImage: React.FC<Props> = ({
  children,
  width = 420,
  actived,
  imageWidth,
  imageHeight,
  bgImage
}) => {
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
      round(initialWidth * 0.79, 0),
      Math.min(round(initialWidth / 3.119475928044089, 0)),
      round(initialWidth / 12, 0),
      Math.min(round(initialWidth / 95.5, 2), 2.5)
    ]
  }, [initialWidth])

  const squareRule = useMemo(() => {
    if (!imageWidth || !imageHeight) return null
    return cx({ landscape: !!(imageWidth >= imageHeight), portrait: !!(imageHeight > imageWidth) })
  }, [imageWidth, imageHeight])

  return (
    <MaskContainer ref={resizeRef}>
      <BackgroundMaskSvg color={theme.colors.primary} size={externalWidth} lineWidth={lineWidth} orientation="square" />
      <MaskContainerImage internalWidth={internalWidth} internalMargin={internalMargin} color={theme.colors.secondary}>
        <SquareLimit
          bColor={theme.colors.secondary}
          internalWidth={internalWidth}
          bgImage={bgImage}
          className={squareRule}
        >
          {squareRule ? children : null}
        </SquareLimit>
      </MaskContainerImage>
      <CoreContainer>
        <CoreArabescSvg width={actived ? coreWidth * 1.1 : coreWidth} color={theme.colors.primary} />
      </CoreContainer>
    </MaskContainer>
  )
}
