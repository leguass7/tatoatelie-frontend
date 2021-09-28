import React, { useMemo } from 'react'

import { svgProps } from './commonSvg'
import { pathLandscape, pathPortrait } from './paths'

type Props = {
  color?: string
  orientation?: 'portrait' | 'landscape'
  width?: number
  height?: number
}
export const BackgroundSvg: React.FC<Props> = ({
  color = 'currentColor',
  orientation = 'landscape',
  width = 1300,
  height = 709
}) => {
  const [w, h, viewBox, paths] = useMemo(() => {
    if (orientation === 'landscape') {
      return [width, height, '0 0 1298.32 708.21', pathLandscape]
    }
    return [height, width, '0 0 707.32 1296.68', pathPortrait]
  }, [orientation, height, width])

  return (
    <svg {...svgProps} width={`${w}px`} height={`${h}px`} viewBox={viewBox}>
      <g id={`${orientation}_2533842516336`}>
        {paths.map((path, i) => {
          const key = `path-${i}`
          return <path key={key} stroke={color} fill={color} d={path} />
        })}
      </g>
    </svg>
  )
}
