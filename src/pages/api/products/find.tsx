import nc from 'next-connect'

import * as productsController from '~/serverSide/controllers/products.controller'

const handler = nc().post(productsController.productsByIds)

export default handler
