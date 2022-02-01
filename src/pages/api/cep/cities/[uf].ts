import nc from 'next-connect'

import { getCitiesController } from '~/serverSide/controllers/adresses.controller'

const handler = nc().get(getCitiesController)

export default handler
