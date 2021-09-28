import React from 'react'

import { svgProps } from './commonSvg'

type Props = React.SVGProps<SVGSVGElement> & {
  size?: number
  color?: string
  stroke?: number
}
export const MaskBackgroundSvg: React.FC<Props> = ({ size = 314, color = 'currentColor', stroke = 2, ...rest }) => {
  return (
    <svg {...svgProps} {...rest} width={`${size}px`} height={`${size}px`} viewBox="0 0 312.32 312.32">
      <g id={`mask-background_1504145387376`}>
        <rect fill="none" stroke={color} strokeWidth={1} width="312.32" height="312.32" />
        <rect
          id="line"
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeMiterlimit="22.9256"
          x="25"
          y="25.01"
          width="167.02"
          height="248.65"
        />
      </g>
    </svg>
  )
}
