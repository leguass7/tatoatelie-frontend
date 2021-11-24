import { Adresses } from '.prisma/client'

import { serializedDto } from '~/helpers/database'

export interface IAddress {
  id: number
  userId: number
  label: string
  stateId?: number
  cityId?: number
  cepId?: number
  cep: string
  street: string
  district: string
  houseNumber: string
  actived?: boolean
  createdAt: string
  updatedBy?: number
  updatedAt?: string
}

export function addressDto(address: Adresses): IAddress {
  if (!address) return null
  const result = serializedDto<any>(address) as IAddress
  return result
}
