import { useSession } from 'next-auth/client'
import { useMemo } from 'react'
import styled from 'styled-components'

import imgProfile from '~/assets/icons/profile.svg'

const MaskAvatar = styled.div<{ size?: number }>`
  display: block;
  margin: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid currentColor;
  background-color: rgba(255, 255, 255, 0.3);
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`

interface AvatarProps {
  image?: string
  size?: number
}

export const AvatarProfile: React.FC<AvatarProps> = ({ image, size = 38 }) => {
  const [session] = useSession()
  const src = useMemo(() => {
    const img = (session && session?.user?.image) || null
    return image || img || imgProfile
  }, [image, session])

  return (
    <MaskAvatar size={size}>
      <img src={src} alt="avatar" />
    </MaskAvatar>
  )
}
