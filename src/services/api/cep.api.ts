import { IResponseCities, IResponseStates } from '~/serverSide/controllers/address.types'

import Api from './index'

export async function getCepStates(): Promise<IResponseStates> {
  try {
    const response = await Api.get(`/cep/uf`)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}

export async function getCepCities(uf: number): Promise<IResponseCities> {
  try {
    const response = await Api.get(`/cep/cities/${uf}`)
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
