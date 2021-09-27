import React, { useMemo } from 'react'

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      version="1.1"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        imageRendering: 'auto'
      }}
      width={`${w}px`}
      height={`${h}px`}
      viewBox={viewBox}
    >
      <g id={`${orientation}_2533842516336`}>
        {paths.map((path, i) => {
          const key = `path-${i}`
          return <path key={key} stroke={color} fill={color} d={path} />
        })}
      </g>
    </svg>
  )
}
