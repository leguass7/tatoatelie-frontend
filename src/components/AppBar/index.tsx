import Drawer from '@mui/material/Drawer'
import Modal from '@mui/material/Modal'
import { signOut, useSession } from 'next-auth/client'
import React, { useCallback, useMemo, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

// import { CartSvg } from '~/components/Images/CartSvg'
import { MenuSvg } from '~/components/Images/MenuSvg'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { FormButton } from '../Forms/FormButton'
import { AvatarProfile } from '../Signin/AvatarProfile'
import { ContentRow } from '../Signin/ContentRow'
import { ContentLimit } from '../styled'
import { ButtonItemMenu, ButtonItemMenuProps } from './ButtonItemMenu'
import { AppBarContainer, ItemBar, MenuContainer, MenuItem, Divider, ModalContainer, CloseModal } from './styles'

export const AppBar: React.FC = () => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [session] = useSession()

  const toogleMenu = useCallback((_e?: any, _reason?: 'backdropClick' | 'escapeKeyDown') => {
    setMenuOpen(old => !old)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toogleLogin = useCallback(() => {
    setMenuOpen(false)
    setLoginOpen(old => !old)
  }, [])

  const handleLogOut = useCallback(() => {
    signOut()
  }, [])

  const linksProps = useMemo(() => {
    const links: ButtonItemMenuProps[] = [
      { title: 'Espátulas', iconName: 'espatulas', path: '/espatulas' },
      { title: 'Estêncil', iconName: 'estencil', path: '/estencil' },
      { title: 'Organizadores', iconName: 'organizadores', path: '/segmentation/organizador' },
      { title: 'Caixas', iconName: 'caixas', path: '/segmentation/caixas' },
      { title: 'Bandejas', iconName: 'bandejas', path: '/segmentation/bandejas' }
    ]
    return links.map(link => ({ ...link, onClick: closeMenu }))
  }, [closeMenu])

  return (
    <>
      <AppBarContainer>
        <ItemBar onClick={toogleMenu}>
          <MenuSvg />
        </ItemBar>
        <ItemBar>{/* <CartSvg /> */}</ItemBar>
      </AppBarContainer>
      <Drawer anchor={'left'} open={menuOpen} onClose={closeMenu}>
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
          {linksProps.map(link => (
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
      </Drawer>
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
