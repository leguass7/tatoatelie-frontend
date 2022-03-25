import { User } from '@prisma/client'

import { IReponseApi } from '~/serverSide/controllers/types'
import { ICreateAddress, IAddress, IUpdateAddress } from '~/serverSide/repositories/dto/adresses.dto'

import Api from './index'

export interface PayloadAuthorize {
  email: string
  password: string
}

export interface IResponseUserAdresses extends IReponseApi {
  adresses?: IAddress[]
}

export interface IResponseUser extends IReponseApi {
  user?: User
}

export interface IResponseUserAddress extends IReponseApi {
  address?: IAddress
}

export async function testAuthorization(data: PayloadAuthorize): Promise<IReponseApi> {
  try {
    const response = await Api.post(`/users/authorize`, data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function getUserAdresses(): Promise<IResponseUserAdresses> {
  try {
    const response = await Api.get(`/users/adresses`)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function addUserAddress(data: ICreateAddress): Promise<IResponseUserAddress> {
  try {
    const response = await Api.post(`/users/adresses`, data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function updateUserAddress(data: IUpdateAddress): Promise<IResponseUserAddress> {
  try {
    const { id } = data
    const response = await Api.patch(`/adresses/${id}`, data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function updateUser(data: Partial<User>): Promise<IResponseUser> {
  try {
    const response = await Api.patch('/users', data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function getUserByEmail(email?: string): Promise<IResponseUser> {
  try {
    const response = await Api.get(`/users/${email}`)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
