import { Drawer } from '@mui/material'
import React from 'react'

import { useCartAddingProduct } from '~/hooks/useCart'

import { AddingProduct } from './AddingProduct'

type Props = {
  anchor?: 'top' | 'left' | 'right' | 'bottom'
}

export const DrawerAddingProduct: React.FC<Props> = ({ anchor = 'top' }) => {
  const [adding, setAdding] = useCartAddingProduct()
  const close = () => setAdding(0)

  return (
    <Drawer anchor={anchor} open={!!adding} onClose={close} onBackdropClick={close}>
      {adding ? <AddingProduct productId={adding} /> : null}
    </Drawer>
  )
}
