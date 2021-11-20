import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { getHello } from '~/serverSide/controllers/hello'
import { protect } from '~/serverSide/middlewares/protect'

const handlerController = nc<NextApiRequest, NextApiResponse>()

handlerController.use(protect).get(getHello)

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   res.status(200).json({ name: 'John Doe' })
// }
export default handlerController

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
}
