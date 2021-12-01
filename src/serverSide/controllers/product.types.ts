import { IProduct } from '../repositories/dto/product.dto'
import { IReponseApi } from './types'

export interface IResponseProducts extends IReponseApi {
  products?: IProduct[]
}
