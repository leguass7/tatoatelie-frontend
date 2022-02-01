import type { IAddress, ICity, IState } from '../repositories/dto/adresses.dto'
import type { IReponseApi } from './types'

export interface IResponseAdresses extends IReponseApi {
  adresses?: IAddress[]
}

export interface IResponseStates extends IReponseApi {
  states?: IState[]
}

export interface IResponseCities extends IReponseApi {
  cities?: ICity[]
}
