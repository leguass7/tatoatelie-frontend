import React, { useRef, useEffect } from 'react'

import { LoadContainer } from './styles'

type CircleLoadingProps = {
  size?: number
  color?: string
  hidden?: boolean
  speed?: number
  stroke?: number
  backgroundColor?: string
  parentRelativate?: boolean
  light?: boolean
  relative?: boolean
  description?: string
}

export const CircleLoading: React.FC<CircleLoadingProps> = ({
  size = 32,
  color = '#000',
  hidden,
  speed = 300,
  stroke = 3,
  backgroundColor = 'rgba(0,0,0,0.5)',
  parentRelativate,
  light,
  relative,
  description
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref && ref.current && !hidden) {
      if (parentRelativate) {
        const parent = ref?.current?.parentElement
        if (parent) parent.style.position = 'relative'
      }
    }
  }, [hidden, parentRelativate])

  return (
    <LoadContainer
      ref={ref}
      size={size}
      bColor={color}
      speed={speed}
      stroke={stroke}
      bgColor={light ? 'rgba(255,255,255,0.5)' : backgroundColor}
      relative={relative}
    >
      <div>
        <div />
      </div>
      {description ? <p>{description}</p> : null}
    </LoadContainer>
  )
}
