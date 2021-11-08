import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'

import { IconSegment, IconSegmentName } from '../Images/IconSegment'
import { ButtonItem } from './styles'

export type ButtonItemMenuProps = {
  title: string
  iconName?: IconSegmentName
  path?: string
  onClick?: () => void
}
export const ButtonItemMenu: React.FC<ButtonItemMenuProps> = ({ title, iconName, path, onClick, children }) => {
  const { prefetch, push, asPath } = useRouter()

  const disabled = !!(asPath === path)

  const handleClick = useCallback(() => {
    if (path) push(path)
    if (onClick) onClick()
  }, [onClick, push, path])

  useEffect(() => {
    if (path) prefetch(path)
  }, [path, prefetch])

  return (
    <ButtonItem onClick={handleClick} disabled={!!disabled}>
      {children}
      {iconName ? <IconSegment iconName={iconName} /> : null}
      <span>{title}</span>
    </ButtonItem>
  )
}
