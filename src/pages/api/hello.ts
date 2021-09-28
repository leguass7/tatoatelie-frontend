import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

import { getHello } from '~/serverSide/controllers/hello'

const handlerController = nc<NextApiRequest, NextApiResponse>()
handlerController.get(getHello)

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
