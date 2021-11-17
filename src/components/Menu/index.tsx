import { Modal } from '@mui/material'
import { useSession, signOut } from 'next-auth/client'
import React, { useCallback, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { FormButton } from '~/components/Forms/FormButton'
import { AvatarProfile } from '~/components/Signin/AvatarProfile'
import { ContentRow } from '~/components/Signin/ContentRow'
import { ContentLimit, Divider } from '~/components/styled'

import { ButtonItemMenu, ButtonItemMenuProps } from './ButtonItemMenu'
import { CloseModal, MenuContainer, MenuItem, ModalContainer } from './styles'

type Props = {
  links: ButtonItemMenuProps[]
  onToogleLogin: () => void
}
export const Menu: React.FC<Props> = ({ links, onToogleLogin }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [session] = useSession()
  const [loginOpen, setLoginOpen] = useState(false)

  const toogleLogin = useCallback(() => {
    if (onToogleLogin) onToogleLogin()
    setLoginOpen(old => !old)
  }, [onToogleLogin])

  const handleLogOut = useCallback(() => {
    signOut()
  }, [])

  return (
    <>
      <MenuContainer textColor={theme.colors.primary}>
        <MenuItem>
          <>
            {session ? (
              <ButtonItemMenu title={session?.user?.name} path="/me">
                <AvatarProfile />
              </ButtonItemMenu>
            ) : (
              <ButtonItemMenu title={'Login'} onClick={toogleLogin}>
                <AvatarProfile />
              </ButtonItemMenu>
            )}
          </>
        </MenuItem>
        <Divider textColor={theme.colors.secondary} />
        {links.map(link => (
          <ButtonItemMenu key={`link-${link.path}`} {...link} />
        ))}
        {session ? (
          <>
            <Divider textColor={theme.colors.secondary} />
            <MenuItem>
              <FormButton type="button" onClick={handleLogOut} label={'Sair'} />
            </MenuItem>
          </>
        ) : null}
      </MenuContainer>
      <Modal open={loginOpen} onClose={toogleLogin} onBackdropClick={toogleLogin}>
        <ModalContainer>
          <ContentLimit widthLimit={900} bgColor="#fff" verticalPad={24}>
            <CloseModal
              onClick={toogleLogin}
              bgColor={theme.colors.primary}
              textColor={matchingBackgroudText('primary')}
            >
              <IoMdClose size={38} />
            </CloseModal>
            <ContentRow />
          </ContentLimit>
        </ModalContainer>
      </Modal>
    </>
  )
}
