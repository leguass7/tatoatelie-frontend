import { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  name: string
}

export async function getHello(req: NextApiRequest, res: NextApiResponse<Data>) {
  return res.status(200).json({ name: 'John Doe' })
}
