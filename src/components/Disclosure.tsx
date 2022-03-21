import { useCallback, useEffect, useState, MutableRefObject } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useResizeDetector } from 'react-resize-detector'
import styled, { css } from 'styled-components'

import { alpha } from '~/helpers/colors'
import { useIsMounted } from '~/hooks/useIsMounted'

import { ThemeColors } from './AppThemeProvider/types'

interface Props {
  targetRef: MutableRefObject<HTMLDivElement>
  arrowColor?: string
  themeColor?: keyof ThemeColors
}

export const Disclosure: React.FC<Props> = ({ children, targetRef, themeColor = 'background' }) => {
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const [position, setPosition] = useState(0)
  const isMounted = useIsMounted()

  const getTarget = useCallback(() => targetRef.current, [targetRef])

  const calculatePosition = useCallback(() => {
    if (isMounted.current) {
      const { scrollLeft, scrollWidth, clientWidth } = getTarget()
      const decimalPosition = scrollLeft / (scrollWidth - clientWidth)
      setPosition(decimalPosition * 100)
    }
  }, [isMounted, getTarget])

  const handlePrevClick = useCallback(() => {
    if (isMounted.current) {
      const { scrollLeft, clientWidth } = getTarget()
      getTarget().scrollTo({ left: scrollLeft - clientWidth })
    }
  }, [isMounted, getTarget])

  const handleNextClick = useCallback(() => {
    if (isMounted.current) {
      const { scrollLeft, clientWidth } = getTarget()
      getTarget().scrollTo({ left: scrollLeft + clientWidth })
    }
  }, [isMounted, getTarget])

  const handleShow = useCallback(() => {
    if (isMounted.current) {
      const { clientWidth, scrollWidth } = getTarget()

      if (scrollWidth > clientWidth) {
        setShowPrev(!!(position >= 1))
        setShowNext(!!(position <= 99))
      } else {
        setShowPrev(false)
        setShowNext(false)
      }
    }
  }, [position, getTarget, isMounted])

  useEffect(() => {
    handleShow()
  }, [handleShow])

  useEffect(() => {
    getTarget().addEventListener(
      'scroll',
      () => {
        setTimeout(calculatePosition, 300)
      },
      { passive: true }
    )
  }, [getTarget, calculatePosition])

  useResizeDetector({
    handleWidth: true,
    refreshMode: 'debounce',
    refreshRate: 300,
    onResize: handleShow,
    targetRef
  })

  return (
    <DisclosureContainer>
      {children}
      <DisclosureButton themeColor={themeColor} left={true} show={showPrev} onClick={handlePrevClick}>
        <GrFormPrevious size={33} />
      </DisclosureButton>
      <DisclosureButton themeColor={themeColor} show={showNext} onClick={handleNextClick}>
        <GrFormNext size={33} />
      </DisclosureButton>
    </DisclosureContainer>
  )
}

interface ButtonProps {
  show?: boolean
  left?: boolean
  themeColor?: keyof ThemeColors
  firstGradient?: string
  secondGradient?: string
}

const DisclosureButton = styled.button.attrs<ButtonProps>(({ themeColor, theme }) => ({
  firstGradient: alpha(theme.colors[`${themeColor}`], 0),
  secondGradient: alpha(theme.colors[`${themeColor}`], 0.8)
}))<ButtonProps>`
  outline: none;
  border: none;
  background: none;
  transition: all 0.3s linear;
  position: absolute;
  top: 0;
  border-radius: 0;
  min-width: 32px;
  height: 100%;
  svg {
    display: block;
    margin: 0 auto;
    margin-top: -10px;
    /* polyline {
      stroke: #000;
    } */
  }
  ${({ left, firstGradient, secondGradient }) =>
    left
      ? css`
          background: linear-gradient(to left, ${firstGradient}, ${secondGradient});
          left: 0;
          svg {
            margin-left: -10px;
          }
        `
      : css`
          background: linear-gradient(to right, ${firstGradient}, ${secondGradient});
          right: 0;
          svg {
            margin-right: -10px;
          }
        `}
  cursor: pointer;
  font-weight: 700;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  :hover,
  :hover svg,
  :hover svg polyline {
    color: ${props => props.theme.colors.primary};
    stroke: ${props => props.theme.colors.primary};
  }
`

const DisclosureContainer = styled.div`
  position: relative;
  width: auto;
  display: flex;
  flex-wrap: row nowrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  display: block;
`
