import nc from 'next-connect'

import { getUfController } from '~/serverSide/controllers/adresses.controller'

const handler = nc().get(getUfController)

export default handler
