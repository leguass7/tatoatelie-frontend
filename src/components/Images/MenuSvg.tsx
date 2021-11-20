import React from 'react'

import { svgProps } from './commonSvg'

type Props = {
  size?: number
  lineColor?: string
}
export const MenuSvg: React.FC<Props> = ({ size = 32, lineColor = 'currentColor' }) => {
  return (
    <svg {...svgProps} width={`${size}px`} height={`${size}px`} viewBox="0 0 60.79 60.79">
      <g id="_1960378971312">
        <rect id="square" fill="none" width="60.79" height="60.79" />
        <path
          fill={lineColor}
          d="M8.89 8.52l43.01 0c2.48,0 4.5,2.02 4.5,4.5l0 0c0,2.47 -2.02,4.5 -4.5,4.5l-43.01 0c-2.48,0 -4.5,-2.03 -4.5,-4.5l0 0c0,-2.48 2.02,-4.5 4.5,-4.5zm0 18l43.01 0c2.48,0 4.5,2.02 4.5,4.5l0 0c0,2.47 -2.02,4.5 -4.5,4.5l-43.01 0c-2.48,0 -4.5,-2.03 -4.5,-4.5l0 0c0,-2.48 2.02,-4.5 4.5,-4.5zm0 17.99l43.01 0c2.48,0 4.5,2.03 4.5,4.5l0 0c0,2.48 -2.02,4.5 -4.5,4.5l-43.01 0c-2.48,0 -4.5,-2.02 -4.5,-4.5l0 0c0,-2.47 2.02,-4.5 4.5,-4.5z"
        />
      </g>
    </svg>
  )
}
