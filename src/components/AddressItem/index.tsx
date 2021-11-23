import React, { useCallback } from 'react'

import { IAddress } from '~/serverSide/repositories/dto/adresses.dto'

import { CheckListItemProps } from '../withChecklist'

export type AddressItemProps = Partial<IAddress> & CheckListItemProps & {}

export const AddressItem: React.FC<AddressItemProps> = ({ id, onClick, selected, label }) => {
  const handleClick = useCallback(() => {
    if (onClick) onClick(id)
  }, [id, onClick])

  return (
    <div onClick={handleClick}>
      <div>{label}</div>
      {id} ADDRESS {selected ? '1' : '0'}
    </div>
  )
}
