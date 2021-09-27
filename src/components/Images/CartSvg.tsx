import React from 'react'

type Props = {
  size?: number
  bgColor?: string
  lineColor?: string
}
export const CartSvg: React.FC<Props> = ({ size = 32, bgColor = '#FBE4DE', lineColor = '#B07B80' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      version="1.1"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 13.28 13.28"
    >
      <g id="_1960378977200">
        <rect id="square" fill="none" width="13.28" height="13.28" />
        <g>
          <path
            id="cart-background"
            fill={bgColor}
            d="M3.56 8.01c0.11,0.71 0.14,1.6 1.13,1.6l5.73 0c0.94,0 0.98,-0.78 1.14,-1.44l1.2 -4.81 -9.98 0 0.78 4.65z"
          />
          <path
            id="circle2"
            fill={lineColor}
            d="M9.27 11.02c-0.52,0 -0.94,0.42 -0.94,0.93 0,0.52 0.42,0.94 0.94,0.94 0.51,0 0.93,-0.42 0.93,-0.94 0,-0.51 -0.42,-0.93 -0.93,-0.93z"
          />
          <path
            id="circle1"
            fill={lineColor}
            d="M5.69 11.02c-0.52,0 -0.94,0.42 -0.94,0.93 0,0.52 0.42,0.94 0.94,0.94 0.51,0 0.93,-0.42 0.93,-0.94 0,-0.51 -0.42,-0.93 -0.93,-0.93z"
          />
          <path
            id="cart-stroke"
            fill={lineColor}
            d="M11.95 4.86l-6.35 0c-0.26,0 -0.47,0.21 -0.47,0.47l0 0c0,0.26 0.21,0.47 0.47,0.47l6.12 0 -0.27 1.06 -4.71 0c-0.26,0 -0.47,0.21 -0.47,0.47l0 0c0,0.26 0.21,0.47 0.47,0.47l4.48 0 -0.05 0.19c-0.15,0.59 -0.18,1.29 -1.02,1.29l-5.14 0c-0.89,0 -0.91,-0.8 -1.02,-1.43l-0.69 -4.17 8.95 0 -0.3 1.18zm0.93 -2.11l-9.75 0 -0.26 -1.95c-0.04,-0.28 -0.2,-0.41 -0.48,-0.41l-1.92 0c-0.26,0 -0.47,0.21 -0.47,0.47 0,0.26 0.21,0.47 0.47,0.47l1.52 0 1.09 6.64c0.18,1.14 0.44,2.25 1.93,2.25l5.14 0c1.5,0 1.66,-1.08 1.93,-2.16l1.15 -4.58c0.09,-0.35 0.11,-0.73 -0.35,-0.73z"
          />
        </g>
      </g>
    </svg>
  )
}
