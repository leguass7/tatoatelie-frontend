import React from 'react'

type Props = {
  bgColor?: string
  circleColor?: string
  size?: number
}
export const LogoCircleSvg: React.FC<Props> = ({ bgColor = '#B07B80', circleColor = '#FBE4DE', size = 27 }) => {
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
      viewBox="0 0 25.4 25.4"
      width={`${size}px`}
      height={`${size}px`}
    >
      <g id={`logo-circle_1960371294000`}>
        <path
          id="tinty"
          fill={bgColor}
          fillRule="nonzero"
          d="M13.28 22.93c0.02,0 0.03,0 0.04,-0.01 0.22,-0.02 0.48,-0.04 0.74,-0.07 0.04,-0.01 0.08,-0.02 0.13,-0.02 0.48,-0.01 0.96,-0.05 1.43,-0.12 -0.06,0.02 -0.11,0.05 -0.18,0.08 -0.07,0.03 -0.14,0.06 -0.21,0.09 -0.65,0.07 -1.3,0.09 -1.95,0.05zm-7.34 -3.37c-0.36,-0.26 -0.64,-0.52 -1.02,-0.88 -0.12,-0.12 -0.25,-0.35 -0.32,-0.49 -0.06,-0.14 -0.06,-0.19 0,-0.16 0.08,0.06 0.19,0.16 0.35,0.37 0.2,0.24 0.42,0.46 0.62,0.68 0.31,0.31 0.59,0.49 0.73,0.56 0.03,0.01 0.06,0.03 0.09,0.05l0.03 0.02c0.12,0.14 0.26,0.25 0.39,0.37l0.21 0.19c-0.1,-0.05 -0.23,-0.14 -0.37,-0.23 -0.3,-0.18 -0.53,-0.41 -0.71,-0.48zm-1.61 -1.68c-0.08,-0.06 -0.18,-0.23 -0.25,-0.39 -0.02,-0.04 -0.01,-0.07 -0.02,-0.1 0.02,0.02 0.04,0.03 0.06,0.07 0.08,0.09 0.14,0.23 0.2,0.33 0.04,0.08 0.05,0.12 0.01,0.09zm-0.49 -0.24c-0.03,-0.05 -0.05,-0.12 -0.08,-0.17 0,-0.01 0.01,0 0.02,0 0.03,0.03 0.07,0.09 0.13,0.21 0.01,0.02 0.02,0.06 0.02,0.07 0.01,0.04 -0.03,0 -0.09,-0.11zm-0.49 -0.74c-0.02,-0.03 -0.06,-0.14 -0.07,-0.18 -0.01,-0.03 0,-0.04 0.02,-0.02 0.03,0.05 0.07,0.14 0.11,0.21 0.01,0.06 0.04,0.15 0.04,0.14 -0.03,-0.03 -0.06,-0.08 -0.1,-0.15zm9.09 -16.15c0.26,-0.02 0.55,-0.03 0.83,-0.04 0.05,0 0.14,0.01 0.2,0.01 0.02,0 0.02,0.01 0.02,0.01 -0.02,0.01 -0.02,0.02 -0.07,0.03 -0.32,0.05 -0.68,0.05 -1.12,0.1 -0.03,0 -0.09,0.01 -0.11,0.01 -0.04,-0.01 -0.1,-0.01 -0.09,-0.02 0.01,-0.03 0.14,-0.06 0.34,-0.1zm0.2 -0.12c0.02,0.01 0.05,0.01 0.07,0.01 -0.01,0 -0.02,0.01 -0.03,0.01 -0.02,0 -0.06,-0.01 -0.08,-0.01 0.01,0 0.02,-0.01 0.04,-0.01zm4.5 1.22c0.02,0 0.07,0.02 0.1,0.04 0.01,0.01 0.03,0.02 0.03,0.02 -0.01,0 -0.05,-0.01 -0.07,-0.02 -0.1,-0.04 -0.12,-0.05 -0.06,-0.04zm0.75 0.39c0.05,0.02 0.12,0.05 0.19,0.09 -0.03,-0.01 -0.05,-0.02 -0.08,-0.03 -0.15,-0.05 -0.29,-0.11 -0.44,-0.16 0.11,0.03 0.22,0.06 0.33,0.1zm0.74 0.26c0.15,0.06 0.27,0.14 0.37,0.23 0.03,0.02 0.05,0.04 0.07,0.06 -0.06,-0.03 -0.12,-0.05 -0.17,-0.08 -0.11,-0.06 -0.23,-0.11 -0.34,-0.17 -0.03,-0.02 -0.06,-0.04 -0.08,-0.06 -0.08,-0.06 -0.02,-0.06 0.15,0.02zm1.15 0.59c0.12,0.08 0.23,0.16 0.35,0.25 0.12,0.09 0.24,0.19 0.33,0.29 0.05,0.04 0.09,0.09 0.13,0.13l-0.04 -0.04 -0.27 -0.19c-0.09,-0.07 -0.18,-0.14 -0.27,-0.19 -0.12,-0.08 -0.25,-0.15 -0.38,-0.23 -0.02,-0.03 -0.06,-0.06 -0.08,-0.09 -0.07,-0.09 0.01,-0.06 0.23,0.07zm0.72 0.42c0.03,0.02 0.1,0.07 0.15,0.11 0.1,0.08 0.13,0.15 0.08,0.11 -0.03,-0.02 -0.1,-0.07 -0.15,-0.11 -0.09,-0.08 -0.14,-0.14 -0.08,-0.11zm0.93 0.72c0.21,0.18 0.38,0.4 0.58,0.6l-0.22 -0.13c-0.16,-0.17 -0.28,-0.28 -0.49,-0.47 -0.03,-0.04 -0.1,-0.12 -0.1,-0.13 -0.02,-0.06 0.08,0 0.23,0.13zm0.6 0.62c0.04,-0.02 0.25,0.11 0.49,0.45 0.14,0.17 0.27,0.36 0.4,0.56 0.07,0.1 0.12,0.18 0.15,0.21 0.02,0.01 0.04,0.01 0.05,0.02 0.03,0 0.09,0.06 0.19,0.24 0.18,0.31 0.35,0.53 0.45,0.69 0.01,0.02 0.06,0.14 0.08,0.19 0.03,0.06 0.04,0.12 0.04,0.14 -0.01,0.04 -0.03,0.05 -0.03,0.1 -0.01,0.09 -0.05,0.08 -0.22,-0.29 -0.06,-0.12 -0.12,-0.21 -0.18,-0.28 -0.03,-0.04 -0.06,-0.07 -0.09,-0.1 -0.1,-0.17 -0.2,-0.34 -0.31,-0.51l-0.49 -0.63 -0.12 -0.16 -0.14 -0.15 -0.04 -0.04c-0.01,-0.08 -0.08,-0.23 -0.24,-0.44l0.01 0zm2.15 2.92c0.03,0.05 0.08,0.13 0.11,0.22 0.01,0.03 0.03,0.11 0.04,0.17 -0.01,0.04 -0.04,-0.01 -0.09,-0.16 -0.02,-0.05 -0.06,-0.15 -0.07,-0.19 -0.01,-0.04 -0.01,-0.06 0.01,-0.04zm-4.86 -4.77l-0.07 -0.04c-0.12,-0.06 -0.24,-0.12 -0.36,-0.18 -0.07,-0.06 -0.15,-0.12 -0.23,-0.17 0.16,0.08 0.32,0.16 0.48,0.24 0.05,0.05 0.11,0.1 0.18,0.15zm1.82 1.19c0.11,0.09 0.21,0.18 0.32,0.29 -0.1,-0.1 -0.21,-0.19 -0.32,-0.29zm0.89 1.17c0.06,0.06 0.13,0.14 0.19,0.22 -0.03,-0.05 -0.09,-0.11 -0.13,-0.16 -0.04,-0.03 -0.07,-0.07 -0.1,-0.1 0.01,0.01 0.03,0.02 0.04,0.04zm-3.97 -2.78c-0.05,-0.02 -0.09,-0.03 -0.09,-0.03 -0.02,0 0.03,0.02 0.1,0.05 0.01,0.01 0.02,0.03 0.03,0.04 -0.11,-0.03 -0.21,-0.06 -0.3,-0.09 -0.03,-0.02 -0.07,-0.03 -0.1,-0.04 0.01,-0.02 -0.03,-0.06 -0.11,-0.13 0.08,0.03 0.15,0.06 0.23,0.09 0.08,0.03 0.16,0.05 0.24,0.08 0,0.01 0,0.02 0,0.03zm1.03 0.53c-0.02,0 -0.02,0.01 -0.01,0.02 -0.09,-0.05 -0.19,-0.1 -0.29,-0.15 0.08,0.03 0.16,0.07 0.25,0.11 0.04,0.02 0.07,0.04 0.11,0.06 -0.02,-0.01 -0.04,-0.02 -0.06,-0.04zm-0.71 -0.35c0,0 0.02,-0.01 0.03,-0.01 0.03,0.02 0.07,0.03 0.1,0.05 0.13,0.06 0.28,0.14 0.31,0.16 0.04,0.03 -0.13,-0.06 -0.25,-0.11 -0.07,-0.03 -0.13,-0.06 -0.19,-0.09zm0.3 0.07c0.04,0.03 -0.06,-0.01 -0.17,-0.06 0.03,0 0.07,0.02 0.1,0.03 0.03,0.02 0.05,0.03 0.07,0.03zm-4.03 -1.2c0.01,0 0.01,0 0.02,0 0.13,-0.01 0.28,0.01 0.5,0.05 -0.17,-0.02 -0.35,-0.04 -0.52,-0.05zm-4.46 0.9l-0.27 0.07c-0.03,0 -0.06,0.01 -0.07,0.01 -0.01,0 0,-0.01 0.01,-0.02 0.06,-0.02 0.15,-0.05 0.17,-0.05 0.07,-0.01 0.11,-0.01 0.16,-0.01zm-2.31 1.23c0,0 0,0 0,0 0.09,-0.06 0.18,-0.13 0.28,-0.19 -0.07,0.04 -0.14,0.08 -0.2,0.13 0.14,-0.11 0.29,-0.22 0.54,-0.36 0.12,-0.08 0.23,-0.16 0.32,-0.21 0.15,-0.09 0.35,-0.19 0.64,-0.3 0.37,-0.14 0.62,-0.21 0.75,-0.31 0.12,-0.04 0.23,-0.09 0.34,-0.13 0.11,-0.03 0.23,-0.07 0.34,-0.1 0.22,-0.07 0.44,-0.13 0.65,-0.2 0.14,-0.02 0.29,-0.05 0.42,-0.08 0.01,0 0.02,0 0.02,-0.01 0.11,-0.01 0.21,-0.03 0.26,-0.04 -0.01,0 -0.07,0 -0.14,0.01 0.15,-0.03 0.3,-0.06 0.44,-0.09 0.04,-0.01 0.09,-0.01 0.14,-0.02 0.13,-0.02 0.27,-0.04 0.43,-0.04 0.17,-0.01 0.34,-0.02 0.51,-0.03 0.07,0 0.11,0 0.13,-0.01 0.04,0 0.08,0 0.12,0 0.13,-0.02 0.26,-0.01 0.38,0 0.13,0 0.26,0.01 0.38,0.01l0.41 0.02c0.14,0.01 0.28,0.04 0.41,0.06 0.28,0.04 0.55,0.07 0.81,0.13 0.28,0.07 0.56,0.14 0.84,0.22 0.02,0.02 0.05,0.04 0.11,0.07 0.07,0.05 0.01,0.04 -0.07,0.01 -0.48,-0.17 -0.99,-0.23 -1.49,-0.34 -0.34,-0.03 -0.7,-0.08 -0.94,-0.08 -0.02,0 -0.03,0 -0.05,0 -0.21,-0.01 -0.42,-0.02 -0.64,-0.02 -2.35,0 -4.52,0.76 -6.28,2.03 0.05,-0.04 0.09,-0.08 0.14,-0.13zm-4.46 7.4c0,0.03 -0.01,0.06 -0.01,0.1 0,-0.01 0,-0.01 0,-0.01 0,-0.02 0,-0.06 0.01,-0.09zm0.03 0.24c-0.01,0.02 -0.01,0.03 -0.02,0.05 -0.02,0 -0.02,-0.03 -0.02,-0.08 0,-0.1 0.02,-0.2 0.03,-0.3 0.02,-0.05 0.04,-0.05 0.04,0.01 -0.01,0.1 -0.02,0.21 -0.03,0.32zm18.98 -5.88c0.17,0.22 0.35,0.45 0.53,0.69l0.09 0.13 0.09 0.14 0.11 0.18c-0.14,-0.15 -0.28,-0.36 -0.51,-0.65 -0.12,-0.15 -0.22,-0.26 -0.33,-0.39 -0.01,-0.02 -0.02,-0.03 -0.03,-0.04 -0.02,-0.02 -0.03,-0.04 -0.04,-0.05 -0.05,-0.06 -0.1,-0.13 -0.16,-0.21 0,0 0.01,0 0.01,0 0.03,0.02 0.06,0.02 0.07,0.01 0.05,0.06 0.11,0.12 0.17,0.19zm-1.78 -1.69l0.32 0.24c0.25,0.2 0.48,0.41 0.7,0.63 0.12,0.13 0.24,0.28 0.37,0.44 0.04,0.05 0.08,0.1 0.12,0.16 -0.01,-0.01 -0.03,-0.01 -0.05,-0.02 -0.01,-0.02 -0.03,-0.04 -0.05,-0.06 -0.4,-0.48 -0.88,-0.91 -1.39,-1.31 0.01,-0.01 0.01,-0.03 -0.03,-0.09 -0.05,-0.02 -0.09,-0.03 -0.09,-0.01 -0.19,-0.14 -0.39,-0.28 -0.59,-0.42l-0.2 -0.12c0,0 0,-0.01 -0.01,-0.01 -0.02,-0.04 -0.05,-0.08 -0.09,-0.12 0.33,0.2 0.65,0.42 0.96,0.65 0.01,0.01 0.02,0.02 0.03,0.04zm-2.45 -1.42c0.05,0.03 0.08,0.06 0.09,0.07 0,0 0,0.01 0.01,0.01 -0.19,-0.07 -0.37,-0.14 -0.56,-0.21 -0.26,-0.09 -0.52,-0.2 -0.79,-0.25 -0.15,-0.05 -0.29,-0.08 -0.44,-0.12 0.01,-0.01 0.05,-0.02 0.11,-0.01 0.54,0.13 1.07,0.3 1.58,0.51zm-12.61 16.57c-0.01,-0.01 -0.02,-0.01 -0.03,-0.03 -0.01,-0.01 -0.03,-0.04 -0.05,-0.06 0.01,0.01 0.02,0.01 0.03,0.02 0.01,0.02 0.03,0.05 0.05,0.07zm1.52 1.33l-0.12 -0.11c-0.17,-0.15 -0.33,-0.3 -0.5,-0.45 -0.01,0 -0.01,-0.01 -0.02,-0.02 0.02,0.01 0.03,0.02 0.05,0.03 0.2,0.2 0.4,0.38 0.61,0.56 -0.01,0 -0.02,-0.01 -0.02,-0.01zm17.35 -10.93c0.05,0.23 0.12,0.49 0.11,0.53 0,0.04 -0.1,-0.32 -0.16,-0.55 -0.03,-0.09 -0.03,-0.09 -0.02,-0.04 0.06,0.24 0.12,0.48 0.18,0.71l0.05 0.17 0.03 0.17c0.01,0.12 0.03,0.23 0.05,0.35 0.03,0.09 0.05,0.14 0.07,0.25 0.04,0.16 0.04,0.23 0.04,0.38 -0.02,-0.03 -0.03,-0.03 -0.06,-0.03 -0.04,0 -0.08,0.07 -0.11,0.28 -0.01,0.04 -0.02,0.07 -0.02,0.1 -0.16,-2.63 -1.31,-4.99 -3.08,-6.75 0.1,0.07 0.21,0.16 0.32,0.26 0.08,0.08 0.16,0.16 0.24,0.26 0.09,0.09 0.2,0.21 0.17,0.16 0.13,0.16 0.28,0.35 0.45,0.58 0.13,0.22 0.25,0.38 0.29,0.38 0.01,0 0.02,0.01 0.03,0.02 0.02,0.03 0.04,0.05 0.06,0.08 0.05,0.07 0.12,0.17 0.2,0.3 0.08,0.13 0.18,0.27 0.26,0.45 0.09,0.18 0.18,0.35 0.27,0.53 0.04,0.09 0.09,0.18 0.13,0.27l0.1 0.27c0.04,0.11 0.07,0.16 0.07,0.15 0,-0.01 -0.02,-0.08 -0.06,-0.18 -0.01,-0.03 -0.02,-0.07 -0.03,-0.1l-0.07 -0.17c-0.02,-0.05 -0.05,-0.1 -0.07,-0.16 -0.06,-0.1 -0.11,-0.21 -0.16,-0.31 -0.05,-0.11 -0.1,-0.21 -0.15,-0.32l-0.08 -0.16 -0.09 -0.15c-0.05,-0.08 -0.1,-0.16 -0.16,-0.25 0.03,0.03 0.05,0.06 0.07,0.09 0.1,0.13 0.16,0.24 0.24,0.38 0.07,0.11 0.15,0.26 0.22,0.39 0.15,0.25 0.26,0.71 0.35,0.86 0.02,0.02 0.03,0.03 0.04,0.05l0.02 0.05c-0.01,-0.02 -0.01,-0.03 -0.02,-0.04 0.03,0.03 0.05,0.05 0.07,0.07 0,0.01 0,0.02 0.01,0.03 0.07,0.21 0.15,0.42 0.2,0.64zm-16.74 14.4c-0.04,0 -0.22,-0.08 -0.36,-0.17 -0.16,-0.1 -0.25,-0.17 -0.22,-0.17 0.04,-0.01 0.22,0.08 0.38,0.17 0.16,0.1 0.24,0.17 0.2,0.17zm-5.2 -15.89c-0.02,0.06 -0.06,0.15 -0.09,0.2 -0.03,0.06 -0.06,0.1 -0.07,0.11 -0.03,0.02 -0.01,-0.07 0.03,-0.2 0.02,-0.05 0.06,-0.14 0.09,-0.19 0.02,-0.05 0.04,-0.07 0.07,-0.1 0.01,0 0.02,0.05 -0.03,0.18zm-0.07 6.98c-0.01,0.01 -0.06,-0.11 -0.09,-0.25 -0.02,-0.14 -0.05,-0.33 -0.04,-0.38 0.01,-0.05 0.02,-0.08 0.03,-0.11 0.02,0.03 0.03,0.04 0.04,0.06 0.03,0.05 0.07,0.27 0.08,0.38 0.02,0.19 0.01,0.28 -0.02,0.3zm-0.3 -5.4c-0.01,0.08 -0.03,0.18 -0.04,0.27 -0.01,0.04 -0.02,0.08 -0.03,0.1 -0.01,0.01 -0.01,0.02 -0.01,0.01 0,-0.18 -0.02,-0.34 0.07,-0.64 0.01,-0.05 0.04,-0.15 0.07,-0.2 0.01,-0.05 0.04,-0.08 0.04,-0.06 -0.03,0.16 -0.07,0.34 -0.1,0.52zm0.01 4.21c0,0.04 -0.02,0.04 -0.02,0.01 -0.07,-0.39 -0.18,-0.79 -0.2,-1.14 -0.01,-0.04 -0.01,-0.13 -0.01,-0.2 0,-0.13 0.02,-0.35 0.03,-0.36 0.01,0.01 0.03,0 0.03,0.04 0.04,0.42 0.07,0.91 0.17,1.46 0,0.05 0,0.16 0,0.19zm23.23 0.05l-0.09 -0.65c-0.03,-0.22 -0.04,-0.48 -0.09,-0.64 -0.04,-0.12 -0.08,-0.25 -0.11,-0.39 -0.08,-0.32 -0.17,-0.58 -0.26,-0.68 -0.02,-0.34 -0.08,-0.65 -0.12,-0.96 -0.02,-0.16 -0.02,-0.18 0.01,-0.06 0.02,0.13 0.05,0.29 0.08,0.46 -0.02,-0.14 -0.04,-0.27 -0.05,-0.4 -0.02,-0.13 -0.03,-0.26 -0.07,-0.37 -0.08,-0.36 -0.16,-0.67 -0.25,-0.95 -0.04,-0.09 -0.09,-0.2 -0.13,-0.32 0.01,0.01 0.02,0.02 0.03,0.04 0.06,0.07 0.13,0.14 0.19,0.24 0.03,0.05 0.06,0.15 0.1,0.31l0.11 0.46c0.09,0.38 0.11,0.66 0.18,0.86 0.03,0.14 0.07,0.3 0.11,0.45 0.03,0.13 0.06,0.16 0.08,0.16 0.06,0.01 0.08,-0.2 0.05,-0.64l0.01 0.02c-0.03,-0.17 -0.06,-0.36 -0.08,-0.57 -0.11,-0.59 -0.2,-1.14 -0.4,-1.65 -0.1,-0.25 -0.17,-0.51 -0.29,-0.75 -0.12,-0.25 -0.23,-0.49 -0.35,-0.74 -0.19,-0.4 -0.44,-0.77 -0.66,-1.14 -0.26,-0.36 -0.51,-0.7 -0.78,-1.01 -0.37,-0.4 -0.75,-0.84 -1.21,-1.26 -0.35,-0.38 -0.74,-0.63 -1.02,-0.81 -0.06,-0.04 -0.16,-0.11 -0.24,-0.16 -0.13,-0.07 -0.27,-0.17 -0.41,-0.3 -0.11,-0.1 -0.26,-0.2 -0.31,-0.21 -0.14,-0.04 -0.5,-0.19 -0.89,-0.37l-0.09 -0.04c-0.16,-0.07 -0.32,-0.16 -0.52,-0.24 -0.1,-0.04 -0.25,-0.1 -0.31,-0.12 -0.46,-0.15 -1.08,-0.28 -1.56,-0.37 -0.22,-0.02 -0.48,-0.05 -0.74,-0.09 -0.26,-0.03 -0.53,-0.07 -0.8,-0.07 -0.13,-0.01 -0.36,-0.05 -0.36,-0.06 -0.02,-0.09 0.17,-0.19 0.98,-0.1l0.32 0.05c0.37,0.05 0.64,0.07 0.81,0.09 0.14,0 0.26,0 0.55,0.06 0.41,0.07 0.76,0.2 1.16,0.32 0.36,0.1 0.55,0.17 0.75,0.22 0.07,0.02 0.03,-0.02 -0.07,-0.1 -0.14,-0.1 -0.33,-0.22 -0.58,-0.32 -0.7,-0.3 -1.44,-0.54 -2.15,-0.69 -0.85,-0.16 -1.74,-0.26 -2.61,-0.24 -0.76,0 -1.54,0.1 -2.18,0.23 -0.2,0.05 -0.43,0.11 -0.66,0.17 -0.33,0.07 -0.66,0.18 -0.99,0.3 -0.19,0.07 -0.29,0.08 -0.4,0.09 -0.08,0.02 -0.26,0.07 -0.31,0.11 -0.04,0.02 -0.11,0.06 -0.11,0.07 -0.03,0.08 -0.35,0.25 -0.77,0.45 -0.35,0.19 -0.63,0.39 -0.92,0.58 -0.21,0.13 -0.4,0.29 -0.67,0.44 -0.24,0.15 -0.42,0.27 -0.53,0.4 -0.08,0.08 -0.12,0.13 -0.16,0.19 -0.05,0.07 -0.13,0.16 -0.29,0.29 -0.46,0.37 -0.69,0.7 -0.84,0.91 -0.05,0.08 -0.16,0.21 -0.24,0.34 -0.25,0.37 -0.51,0.71 -0.73,1.13 -0.11,0.19 -0.23,0.39 -0.35,0.59 -0.1,0.21 -0.2,0.43 -0.3,0.64 -0.01,0.03 -0.08,0.14 -0.1,0.16 -0.07,0.08 -0.08,0.04 -0.06,-0.05 0.06,-0.2 0.16,-0.47 0.28,-0.78 0.06,-0.13 0.17,-0.29 0.3,-0.47 0.34,-0.46 0.33,-0.46 0.33,-0.57 -0.01,-0.01 -0.01,-0.02 0.01,-0.06 0.03,-0.04 0.08,-0.11 0.12,-0.16l0.24 -0.27c0.16,-0.17 0.27,-0.33 0.22,-0.31 -0.04,0.01 -0.09,0.05 -0.14,0.08 -0.06,0.03 -0.09,0.02 0,-0.11 0.21,-0.31 0.47,-0.59 0.72,-0.9 0.02,-0.03 0.11,-0.12 0.17,-0.16 0.06,-0.04 0.1,-0.06 0.16,-0.1 0.05,-0.04 0.13,-0.09 0.17,-0.13 0.05,-0.04 0.08,-0.08 0.08,-0.09 0.01,-0.04 -0.01,-0.07 -0.01,-0.1 0,-0.04 0.09,-0.15 0.3,-0.32 0.27,-0.22 0.5,-0.37 0.65,-0.51 0.08,-0.07 0.24,-0.2 0.39,-0.3 0.22,-0.14 0.46,-0.28 0.68,-0.41 0.43,-0.27 0.48,-0.33 0.11,-0.21 -0.11,0.04 -0.23,0.09 -0.35,0.13 -0.21,0.1 -0.48,0.2 -0.75,0.38 -0.14,0.09 -0.29,0.19 -0.43,0.29 -0.5,0.32 -0.94,0.73 -1.38,1.11 -0.41,0.42 -0.83,0.82 -1.14,1.27 -0.15,0.21 -0.37,0.44 -0.52,0.69 -0.21,0.33 -0.44,0.65 -0.62,0.99 -0.17,0.34 -0.34,0.67 -0.48,0.99 -0.15,0.45 -0.36,0.9 -0.47,1.38 -0.11,0.44 -0.25,0.87 -0.3,1.31 -0.07,0.43 -0.13,0.85 -0.12,1.26 -0.01,0.39 -0.03,0.79 0.01,1.2 0.03,0.41 0.05,0.82 0.13,1.24 0.05,0.28 0.08,0.59 0.16,0.89 0.07,0.3 0.15,0.61 0.23,0.92 0.05,0.22 0.13,0.4 0.2,0.54 0.08,0.17 0.17,0.4 0.27,0.63 0.26,0.51 0.51,1.05 0.85,1.54 0.07,0.1 0.15,0.22 0.22,0.36 0.24,0.4 0.46,0.62 0.63,0.81 0.12,0.14 0.29,0.34 0.45,0.47 0.17,0.15 0.39,0.45 0.59,0.65 0.11,0.09 0.21,0.19 0.31,0.27 0.44,0.4 0.95,0.74 1.35,0.99 0.28,0.16 0.63,0.32 0.95,0.5 0.09,0.05 0.23,0.14 0.36,0.19 0.28,0.07 0.64,0.23 1.02,0.35 0.31,0.08 0.62,0.17 0.94,0.26 0.31,0.06 0.63,0.11 0.95,0.17 0.5,0.06 1.04,0.11 1.36,0.07 0.04,0 0.1,-0.01 0.18,-0.01 0.44,0 0.74,-0.01 1.1,-0.06 0.01,0 0.01,0 0.01,0 0.3,0.02 0.6,0.04 0.91,0.04 0.3,-0.01 0.6,-0.02 0.9,-0.04 0.03,0 0.06,0 0.08,-0.01 -0.24,0.08 -0.53,0.15 -0.94,0.22 -0.32,0.03 -0.57,0.06 -0.82,0.09 -0.13,0.01 -0.28,0.03 -0.43,0.05 -0.15,0 -0.31,0 -0.47,0 -0.33,0 -0.69,0 -1.09,-0.08 -0.23,-0.03 -0.45,-0.06 -0.61,-0.07 -0.25,-0.02 -0.41,-0.04 -0.79,-0.14 -0.09,-0.03 -0.16,-0.03 -0.19,-0.03 -0.09,0.02 -0.28,0 -0.53,-0.08 -0.16,-0.05 -0.33,-0.11 -0.43,-0.12 -0.29,-0.03 -0.73,-0.23 -1.18,-0.42 -0.38,-0.15 -0.74,-0.39 -1.11,-0.59 -0.37,-0.21 -0.7,-0.46 -1.03,-0.67 -0.07,-0.05 -0.16,-0.13 -0.23,-0.19 -0.34,-0.3 -0.71,-0.57 -1.02,-0.91 -0.13,-0.14 -0.26,-0.27 -0.41,-0.44 -0.32,-0.4 -0.57,-0.7 -0.82,-1.02 -0.31,-0.47 -0.65,-0.92 -0.9,-1.43 -0.06,-0.11 -0.11,-0.21 -0.16,-0.29 -0.18,-0.25 -0.31,-0.58 -0.46,-0.94 -0.16,-0.35 -0.28,-0.74 -0.39,-1.14 -0.15,-0.43 -0.22,-0.92 -0.3,-1.34 -0.06,-0.28 -0.11,-0.56 -0.12,-0.85 -0.03,-0.3 -0.05,-0.6 -0.07,-0.9 0.02,-0.61 0.01,-1.23 0.1,-1.81 0.01,-0.06 0.02,-0.14 0.03,-0.21 0.05,-0.56 0.22,-1.08 0.35,-1.65 0.11,-0.33 0.17,-0.54 0.18,-0.67 0,-0.14 0.01,-0.28 0.01,-0.39 -0.01,-0.06 -0.07,0.03 -0.17,0.2 -0.07,0.13 -0.15,0.29 -0.22,0.45 -0.33,0.8 -0.58,1.64 -0.7,2.45 -0.09,0.41 -0.09,0.86 -0.13,1.3 -0.05,0.35 -0.02,0.69 -0.02,1.03 0.01,0.34 0.01,0.68 0.07,1.01 0.1,0.9 0.29,1.82 0.59,2.7 0.07,0.2 0.14,0.41 0.21,0.61 0.02,0.08 0.05,0.18 0.09,0.26 0.07,0.16 0.11,0.3 0.1,0.33 -0.03,0.07 0,0.14 0.15,0.45 0.05,0.1 0.1,0.19 0.15,0.3 0.06,0.1 0.13,0.24 0.15,0.3 0.01,0.06 0.01,0.09 0.04,0.17 0.01,0.03 0.06,0.14 0.1,0.21 0.03,0.06 0.08,0.14 0.11,0.17 0.04,0.05 0.07,0.07 0.09,0.08 0.13,0.09 0.38,0.36 0.82,0.92 0.16,0.22 0.31,0.37 0.49,0.55 0.1,0.11 0.21,0.23 0.32,0.35 0.11,0.12 0.29,0.36 0.38,0.47 0.02,0.03 0.01,0.04 -0.03,0.01 -0.11,-0.09 -0.23,-0.22 -0.34,-0.34 -0.15,-0.18 -0.26,-0.3 -0.34,-0.35 -0.04,-0.04 -0.08,-0.06 -0.11,-0.08 -0.07,-0.04 -0.21,-0.16 -0.38,-0.4 -0.08,-0.11 -0.16,-0.21 -0.23,-0.31 -0.12,-0.16 -0.13,-0.1 -0.02,0.08 0.09,0.15 0.19,0.31 0.29,0.44 0.11,0.12 0.21,0.22 0.31,0.33l0.49 0.51c0.18,0.17 0.36,0.32 0.54,0.49 0.03,0.02 0.11,0.11 0.16,0.17 0.02,0.02 0.04,0.04 0.02,0.04 -0.03,-0.02 -0.06,-0.03 -0.13,-0.08 -0.28,-0.24 -0.6,-0.47 -0.86,-0.74 -0.1,-0.1 -0.2,-0.19 -0.29,-0.26 -0.02,-0.02 -0.03,0 0,0.04 0.04,0.07 0.12,0.18 0.19,0.26 0.31,0.42 0.71,0.74 1.05,1.07 0.87,0.72 1.85,1.44 2.91,1.94 1.6,0.79 3.31,1.23 4.96,1.33 0.81,0.06 1.54,0.01 2.32,-0.06 1.06,-0.13 2.02,-0.35 2.93,-0.7 0.27,-0.1 0.54,-0.2 0.8,-0.31 0.25,-0.13 0.5,-0.25 0.75,-0.38 0.25,-0.12 0.5,-0.26 0.75,-0.42 0.24,-0.16 0.5,-0.31 0.77,-0.49 0.06,-0.04 0.11,-0.08 0.16,-0.12 0.96,-0.7 1.78,-1.56 2.51,-2.46 0.56,-0.76 1.05,-1.52 1.43,-2.38 0.35,-0.7 0.53,-1.35 0.71,-2 0.09,-0.44 0.15,-0.8 0.18,-1.13 0.01,-0.28 0.02,-0.58 0.03,-0.87 0,-0.12 -0.01,-0.22 -0.01,-0.32zm-17.75 8.44l0 0 0 0 -0.01 -0.01 -0.01 0 0.02 0.01zm-0.11 0c0.05,0.03 0.11,0.08 0.16,0.11 0.16,0.08 0.3,0.14 0.27,0.1 -0.03,-0.03 -0.14,-0.1 -0.24,-0.16l-0.08 -0.05c-0.04,-0.01 -0.08,-0.01 -0.12,-0.02 -0.01,0 -0.01,0.01 0.01,0.02zm-5.98 -4.77c-0.01,0 0,0.03 0,0.05 0.02,0.03 0.05,0.08 0.05,0.1 0.04,0.07 0.04,0.04 -0.01,-0.08 -0.01,-0.02 -0.03,-0.06 -0.04,-0.07zm3.63 -14.19l0.05 -0.05 -0.07 0.07 0.02 -0.02zm8.78 -1.4c0,0 0,0 0,0 -0.03,0 -0.03,0 0,0zm3.06 0.43c-0.31,-0.08 -0.63,-0.17 -0.95,-0.24 -0.32,-0.05 -0.65,-0.1 -0.97,-0.15 -0.33,-0.01 -0.66,-0.03 -1,-0.05 -0.04,0 -0.09,0.01 -0.14,0.01 0.29,0 0.57,0.02 0.84,0.04 0.74,0.06 1.49,0.19 2.22,0.39z"
        />
        <path
          id="circle"
          fill={circleColor}
          fillRule="nonzero"
          d="M23.24 15.69c-0.29,0.97 -0.72,1.89 -1.26,2.74 -0.45,0.69 -0.95,1.34 -1.52,1.93 -0.08,0.08 -0.16,0.15 -0.24,0.23 -0.08,0.07 -0.15,0.15 -0.24,0.22l-0.24 0.22 -0.13 0.1 -0.12 0.11 -0.26 0.2c-0.09,0.06 -0.18,0.13 -0.26,0.19 -0.18,0.14 -0.36,0.25 -0.54,0.37 -0.03,0.02 -0.05,0.04 -0.08,0.06 -0.03,0.02 -0.06,0.04 -0.1,0.05 -0.06,0.04 -0.13,0.08 -0.2,0.13 -0.14,0.09 -0.32,0.17 -0.5,0.27 -0.05,0.03 -0.09,0.05 -0.14,0.08 -0.05,0.02 -0.1,0.04 -0.15,0.07 -0.1,0.04 -0.21,0.09 -0.32,0.14 -0.22,0.09 -0.46,0.2 -0.71,0.28 -1.01,0.36 -2.27,0.59 -3.53,0.59 -1.26,0 -2.52,-0.23 -3.53,-0.59 -0.25,-0.08 -0.49,-0.19 -0.71,-0.28 -0.11,-0.05 -0.22,-0.1 -0.32,-0.14 -0.05,-0.03 -0.1,-0.05 -0.15,-0.07 -0.05,-0.03 -0.1,-0.05 -0.14,-0.08 -0.19,-0.1 -0.36,-0.18 -0.5,-0.27 -0.07,-0.05 -0.14,-0.09 -0.21,-0.13 -0.03,-0.01 -0.06,-0.03 -0.09,-0.05 -0.03,-0.02 -0.06,-0.04 -0.08,-0.06 -0.69,-0.44 -1.33,-0.95 -1.92,-1.53 -0.61,-0.62 -1.15,-1.31 -1.63,-2.04 -0.54,-0.85 -0.97,-1.77 -1.26,-2.74 -0.3,-0.96 -0.43,-1.98 -0.44,-2.99 0.01,-1.02 0.14,-2.03 0.44,-3 0.29,-0.97 0.72,-1.89 1.26,-2.73 0.45,-0.69 0.95,-1.34 1.52,-1.93 0.08,-0.08 0.16,-0.15 0.24,-0.23 0.07,-0.07 0.15,-0.15 0.23,-0.22l0.25 -0.22 0.12 -0.11 0.13 -0.1 0.26 -0.2c0.08,-0.07 0.17,-0.13 0.26,-0.2 0.17,-0.13 0.36,-0.25 0.54,-0.37 0.02,-0.02 0.05,-0.03 0.08,-0.05 0.03,-0.02 0.06,-0.04 0.09,-0.06 0.07,-0.04 0.14,-0.08 0.21,-0.12 0.14,-0.09 0.31,-0.18 0.5,-0.27 0.04,-0.03 0.09,-0.05 0.14,-0.08 0.05,-0.02 0.1,-0.04 0.15,-0.07 0.1,-0.05 0.21,-0.09 0.32,-0.15 0.22,-0.08 0.46,-0.19 0.71,-0.27 1.01,-0.37 2.27,-0.59 3.53,-0.6 1.26,0.01 2.52,0.23 3.53,0.6 0.25,0.08 0.49,0.19 0.71,0.27 0.11,0.06 0.22,0.1 0.32,0.15 0.05,0.03 0.1,0.05 0.15,0.07 0.05,0.03 0.09,0.05 0.14,0.08 0.18,0.09 0.36,0.18 0.5,0.27 0.07,0.04 0.14,0.08 0.2,0.12 0.04,0.02 0.07,0.04 0.1,0.06 0.03,0.02 0.05,0.03 0.08,0.05 0.68,0.45 1.33,0.96 1.91,1.54 0.62,0.61 1.16,1.3 1.64,2.04 0.54,0.84 0.97,1.76 1.26,2.73 0.29,0.97 0.43,1.98 0.44,3 -0.01,1.01 -0.15,2.03 -0.44,2.99zm0.69 -3l0 0c-0.01,-1.04 -0.15,-2.07 -0.45,-3.06 -0.29,-0.99 -0.73,-1.93 -1.29,-2.8l-0.26 -0.4c0,0 -0.08,-0.1 -0.2,-0.27 -0.11,-0.16 -0.28,-0.36 -0.44,-0.57 -0.18,-0.2 -0.34,-0.41 -0.48,-0.55 -0.14,-0.14 -0.23,-0.23 -0.23,-0.23 0,0 -0.03,-0.03 -0.07,-0.07 -0.04,-0.04 -0.1,-0.1 -0.17,-0.16 -0.14,-0.15 -0.34,-0.32 -0.54,-0.49 -0.1,-0.09 -0.2,-0.17 -0.3,-0.25 -0.05,-0.03 -0.1,-0.07 -0.14,-0.11 -0.05,-0.03 -0.09,-0.06 -0.13,-0.09 -0.16,-0.12 -0.27,-0.19 -0.27,-0.19 0,0 -0.02,-0.02 -0.06,-0.05 -0.04,-0.02 -0.09,-0.06 -0.14,-0.09 -0.1,-0.07 -0.2,-0.13 -0.2,-0.13 -0.02,-0.02 -0.05,-0.04 -0.08,-0.06 -0.03,-0.02 -0.06,-0.04 -0.1,-0.06 -0.06,-0.03 -0.13,-0.08 -0.2,-0.12 -0.15,-0.1 -0.33,-0.18 -0.52,-0.28 -0.04,-0.03 -0.09,-0.06 -0.14,-0.08 -0.05,-0.02 -0.1,-0.05 -0.15,-0.07 -0.11,-0.05 -0.22,-0.1 -0.33,-0.15 -0.23,-0.09 -0.47,-0.2 -0.73,-0.28 -1.03,-0.38 -2.32,-0.61 -3.61,-0.62 -1.29,0.01 -2.58,0.24 -3.61,0.62 -0.26,0.08 -0.5,0.19 -0.73,0.28 -0.11,0.05 -0.22,0.1 -0.33,0.15 -0.05,0.02 -0.1,0.05 -0.15,0.07 -0.05,0.02 -0.1,0.05 -0.15,0.08 -0.18,0.1 -0.36,0.18 -0.51,0.28 -0.07,0.04 -0.14,0.09 -0.21,0.12 -0.03,0.02 -0.06,0.04 -0.09,0.06 -0.03,0.02 -0.06,0.04 -0.08,0.06 0,0 -0.1,0.06 -0.2,0.13 -0.05,0.03 -0.1,0.07 -0.14,0.09 -0.04,0.03 -0.06,0.05 -0.06,0.05 0,0 -0.11,0.07 -0.27,0.19 -0.04,0.03 -0.08,0.06 -0.13,0.09 -0.04,0.04 -0.09,0.08 -0.14,0.11 -0.1,0.08 -0.2,0.16 -0.3,0.25 -0.2,0.17 -0.4,0.34 -0.54,0.49 -0.07,0.06 -0.13,0.12 -0.17,0.16 -0.05,0.04 -0.07,0.07 -0.07,0.07 0,0 -0.09,0.09 -0.23,0.23 -0.14,0.14 -0.31,0.35 -0.48,0.55 -0.16,0.21 -0.33,0.41 -0.45,0.57 -0.11,0.17 -0.19,0.27 -0.19,0.27l-0.27 0.4c-0.55,0.87 -0.99,1.81 -1.28,2.8 -0.31,0.99 -0.45,2.02 -0.45,3.06l0 0 0 0.01 0 0.01 0 0c0,1.03 0.14,2.07 0.45,3.06 0.29,0.99 0.73,1.93 1.28,2.79l0.27 0.4c0,0 0.08,0.11 0.19,0.27 0.12,0.17 0.29,0.37 0.45,0.58 0.17,0.2 0.34,0.4 0.48,0.54 0.14,0.15 0.23,0.24 0.23,0.24 0,0 0.02,0.03 0.07,0.07 0.04,0.04 0.1,0.09 0.17,0.16 0.14,0.14 0.34,0.31 0.54,0.49 0.1,0.08 0.2,0.16 0.3,0.24 0.05,0.04 0.1,0.08 0.14,0.11 0.05,0.04 0.09,0.07 0.13,0.1 0.16,0.11 0.27,0.19 0.27,0.19 0,0 0.02,0.02 0.06,0.04 0.04,0.03 0.09,0.06 0.14,0.1 0.1,0.06 0.2,0.13 0.2,0.13 0.02,0.02 0.05,0.04 0.08,0.06 0.03,0.01 0.06,0.03 0.09,0.05 0.07,0.04 0.14,0.08 0.21,0.13 0.15,0.09 0.33,0.18 0.51,0.28 0.05,0.03 0.1,0.05 0.15,0.08 0.05,0.02 0.1,0.04 0.15,0.07 0.11,0.05 0.22,0.1 0.33,0.15 0.23,0.09 0.47,0.2 0.73,0.28 1.03,0.38 2.32,0.61 3.61,0.61 1.29,0 2.58,-0.23 3.61,-0.61 0.26,-0.08 0.5,-0.19 0.73,-0.28 0.11,-0.05 0.22,-0.1 0.33,-0.15 0.05,-0.03 0.1,-0.05 0.15,-0.07 0.05,-0.03 0.1,-0.05 0.14,-0.08 0.19,-0.1 0.37,-0.19 0.52,-0.28 0.07,-0.05 0.14,-0.09 0.21,-0.13 0.03,-0.02 0.06,-0.04 0.09,-0.05 0.03,-0.02 0.06,-0.04 0.08,-0.06 0,0 0.1,-0.07 0.2,-0.13 0.05,-0.04 0.1,-0.07 0.14,-0.1 0.04,-0.02 0.06,-0.04 0.06,-0.04 0,0 0.11,-0.08 0.27,-0.19 0.04,-0.03 0.08,-0.06 0.13,-0.1 0.04,-0.03 0.09,-0.07 0.14,-0.11 0.1,-0.08 0.2,-0.16 0.3,-0.24 0.2,-0.18 0.4,-0.35 0.54,-0.49 0.07,-0.07 0.13,-0.12 0.17,-0.16 0.04,-0.04 0.07,-0.07 0.07,-0.07 0,0 0.09,-0.09 0.23,-0.24 0.14,-0.14 0.3,-0.34 0.48,-0.54 0.16,-0.21 0.33,-0.41 0.44,-0.58 0.12,-0.16 0.2,-0.27 0.2,-0.27l0.26 -0.4c0.56,-0.86 1,-1.8 1.29,-2.79 0.3,-0.99 0.44,-2.03 0.45,-3.06l0 0 0 -0.01 0 -0.01z"
        />
      </g>
    </svg>
  )
}
