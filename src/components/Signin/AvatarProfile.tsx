import Avatar from '@mui/material/Avatar'
import { useSession } from 'next-auth/client'
import { useMemo } from 'react'
import styled from 'styled-components'

import imgProfile from '~/assets/icons/profile.svg'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'

const MaskAvatar = styled.div<{ size?: number }>`
  display: block;
  margin: 0;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;
  min-height: ${({ size }) => size}px;

  overflow: hidden;
  border-radius: 50%;
  border: 2px solid currentColor;
  background-color: ${({ theme }) => theme.colors.primary};
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`

interface AvatarProps {
  name?: string
  image?: string
  size?: number
}

export const AvatarProfile: React.FC<AvatarProps> = ({ image, name, size = 38 }) => {
  const [session] = useSession()
  const { theme } = useAppTheme()

  const src = useMemo(() => {
    const img = session && session?.user?.image
    return image || img || imgProfile
  }, [image, session])

  return (
    <>
      <Avatar src={src} alt={name} sx={{ bgcolor: theme.colors.primary }} />
      {/* <MaskAvatar size={size}>
       <img src={src} alt="avatar" />
     </MaskAvatar> */}
    </>
  )
}
