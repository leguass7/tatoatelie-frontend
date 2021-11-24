import React from 'react'

import { IAddress } from '~/serverSide/repositories/dto/adresses.dto'

import { CheckItem, CheckItemDescription, CheckItemLine } from '../CheckItem'
import { CheckListItemProps } from '../withChecklist'

export type AddressItemProps = Partial<IAddress> & CheckListItemProps & {}

export const AddressItem: React.FC<AddressItemProps> = ({ id, onClick, selected, label, cep, street, houseNumber }) => {
  return (
    <CheckItem id={id} selected={!!selected} onClick={onClick} themeColor="primary">
      <CheckItemDescription grow={1}>
        <CheckItemLine bold>{label}</CheckItemLine>
        <CheckItemLine>{cep}</CheckItemLine>
        <CheckItemLine>
          {street}
          {houseNumber ? `, ${houseNumber}` : ''}
        </CheckItemLine>
      </CheckItemDescription>
      {/* <CheckItemDescription>
        <CheckItemLine>{label}</CheckItemLine>
        <CheckItemLine>{cep}</CheckItemLine>
      </CheckItemDescription> */}
    </CheckItem>
  )
}
