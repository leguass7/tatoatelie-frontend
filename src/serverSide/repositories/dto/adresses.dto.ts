import { Adresses } from '.prisma/client'

import { serializedDto } from '~/serverSide/database/helpers'

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
  complement?: string
  actived?: boolean
  createdAt: string
  updatedBy?: number
  updatedAt?: string
}

export type ICreateAddress = Omit<IAddress, 'id' | 'createdAt'>
export type IUpdateAddress = Omit<IAddress, 'updatedAt'>

export function addressDto(address: Adresses): IAddress {
  if (!address) return null
  const result = serializedDto<any>(address) as IAddress
  return result
}

//
export interface IState {
  id: number
  name: string
  abbr: string
  actived: boolean
}

export interface ICity {
  id: number
  stateId: number
  name: string
  capital: boolean
  actived: boolean
}
