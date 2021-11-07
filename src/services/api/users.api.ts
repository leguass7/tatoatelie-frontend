import Api from './index'
import { IApiResponse } from './types.api'

export interface PayloadAuthorize {
  email: string
  password: string
}

export async function testAuthorization(data: PayloadAuthorize): Promise<IApiResponse> {
  try {
    const response = await Api.post(`/users/authorize`, data)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
