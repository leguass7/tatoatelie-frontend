import React, { useMemo } from 'react'

import { round } from '~/helpers'

import { CommonSvgTypes, svgProps } from './commonSvg'

type Props = CommonSvgTypes & {
  size?: number
  color?: string
  lineWidth?: number
  orientation?: 'portrait' | 'landscape'
}
export const BackgroundMaskSvg: React.FC<Props> = ({
  size = 314,
  color = 'currentColor',
  lineWidth = 2,
  orientation = 'portrait',
  ...rest
}) => {
  const [w, h, viewBox] = useMemo(() => {
    if (orientation === 'portrait') {
      return [size, size, '0 0 312.32 312.32']
    }
    return [size, round(size / 1.64, 0), '0 0 348.41 212.77']
  }, [orientation, size])
  return (
    <svg {...svgProps} {...rest} width={`${w}px`} height={`${h}px`} viewBox={viewBox}>
      {orientation === 'portrait' ? (
        <g id={`${orientation}-mask-background_1504145387376`}>
          <rect fill="none" stroke={'none'} strokeWidth={1} width="312.32" height="312.32" />
          <rect
            id="line"
            fill="none"
            stroke={color}
            strokeWidth={lineWidth}
            strokeLinecap="round"
            strokeMiterlimit="22.9256"
            x="25"
            y="25.01"
            width="167.02"
            height="248.65"
          />
        </g>
      ) : (
        <g id={`${orientation}-mask-background_1504145387376`}>
          <rect fill="none" width="348.41" height="212.78" />
          <rect
            id="line"
            fill="none"
            stroke={color}
            strokeWidth={lineWidth}
            strokeMiterlimit="22.9256"
            x="14.24"
            y="14.27"
            width="242.89"
            height="140.92"
          />
        </g>
      )}
    </svg>
  )
}
