import { IReponseApi } from '~/serverSide/controllers/types'

import Api from './index'

export interface PayloadAuthorize {
  email: string
  password: string
}

export interface IResponseUserAdresses extends IReponseApi {
  adresses?: any[]
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
