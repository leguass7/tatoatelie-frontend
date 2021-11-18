import Drawer from '@mui/material/Drawer'
import React, { useCallback, useMemo, useState } from 'react'

import { Cart } from '~/components/Cart'
import { CartSvg } from '~/components/Images/CartSvg'
import { MenuSvg } from '~/components/Images/MenuSvg'
import { Menu } from '~/components/Menu'
import type { ButtonItemMenuProps } from '~/components/Menu/ButtonItemMenu'
import { useCartItems } from '~/hooks/useCart'

import { AppBarContainer, ItemBar, ItemBadge } from './styles'

export const AppBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { count } = useCartItems()

  const toogleMenu = useCallback((_e?: any, _reason?: 'backdropClick' | 'escapeKeyDown') => {
    setMenuOpen(old => !old)
  }, [])

  const toogleCart = useCallback((_e?: any, _reason?: 'backdropClick' | 'escapeKeyDown') => {
    setCartOpen(old => !old)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

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
        <ItemBar onClick={toogleCart}>
          <CartSvg />
          <ItemBadge showing={true}>{count}</ItemBadge>
        </ItemBar>
      </AppBarContainer>
      <Drawer anchor={'left'} open={menuOpen} onClose={closeMenu}>
        <Menu links={linksProps} onToogleLogin={closeMenu} />
      </Drawer>
      <Drawer anchor={'left'} open={cartOpen} onClose={closeCart}>
        <Cart />
      </Drawer>
    </>
  )
}
