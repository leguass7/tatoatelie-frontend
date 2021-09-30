import styled from 'styled-components'

import { alpha } from '~/helpers/colors'

export const SegmentsContainer = styled.div<{ center?: boolean }>`
  border: 0;
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  align-items: stretch;
  align-content: center;
  overflow-x: hidden;
  padding: 0;
  margin: 0 auto;

  @media (min-width: 768px) {
    justify-content: center;
  }
`

export const SegmentItemContainer = styled.a`
  display: block;
  border: 0;
  padding: 0 3px;
  width: 80px;
  max-width: 80px;
  text-decoration: none;
  outline: none;

  &:visited {
    text-decoration: none;
    outline: none;
    color: inherit;
  }
`

export const SegmentIcon = styled.div`
  margin: 0 auto;
  width: 74px;
  height: 74px;
  text-align: center;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    margin-left: 50%;
    margin-top: 50%;
    transform: translate(-50%, -50%);
  }
`
export const SegmentDescription = styled.div<{ colorLabel?: string }>`
  font-size: 14px;
  max-width: 74px;
  min-width: 74px;
  text-align: center;
  color: ${({ colorLabel = 'inherit' }) => colorLabel};
`

export const Container = styled.div<{ mouse?: boolean }>`
  display: inline-block;
  position: relative;
  width: 100%;
  background-color: ${({ theme, mouse }) => (mouse ? alpha(theme.colors.contrast, 0.5, 'rgba') : 'transparent')};
  padding: ${({ theme }) => theme.spacing.m}px 0px;
  border-radius: ${({ theme }) => theme.rounded}px;
  transition: all ease-in-out 0.2s;
  #know {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-64px);
    max-width: 128px;
  }
`
