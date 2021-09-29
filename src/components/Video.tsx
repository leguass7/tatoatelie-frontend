import React, { useCallback, useMemo } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import YouTube, { Options } from 'react-youtube'
import styled from 'styled-components'

import { round } from '~/helpers'

import { ContentLimit } from './styled'

const VideoContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  max-width: 100%;
  width: 100%;
`

type Props = {
  videoId: string
}
export const Video: React.FC<Props> = ({ videoId }) => {
  const { ref, width } = useResizeDetector()

  const dimentions = useMemo(() => {
    if (width) {
      return { w: width, h: round(width / 1.618, 0) }
    }
    return { w: 0, h: 0 }
  }, [width])

  const opts: Options = useMemo(() => {
    return {
      width: `${dimentions.w}`,
      height: `${dimentions.h}`,
      playerVars: {
        autoplay: 0
      }
    }
  }, [dimentions])

  const onReady = useCallback((_evt: { target: any }) => {
    // console.log('onReady', evt)
  }, [])

  return (
    <ContentLimit horizontalPad={10} widthLimit={768}>
      <VideoContainer ref={ref}>
        {dimentions.w ? (
          <React.Fragment key={`video-${videoId}-${dimentions.w}`}>
            <YouTube videoId={videoId} opts={opts} onReady={onReady} />
          </React.Fragment>
        ) : null}
      </VideoContainer>
    </ContentLimit>
  )
}
