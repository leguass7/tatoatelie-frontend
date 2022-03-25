import { IReponseApi } from '~/serverSide/controllers/types'

import Api from './index'

export interface IRequestRegister {
  name: string
  password: string
  cellPhone?: string
  email: string
}

export interface IResponseRegister extends IReponseApi {
  userId?: number
}

export async function registerUser(data: IRequestRegister): Promise<IResponseRegister> {
  try {
    const response = await Api.post('/register', data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
