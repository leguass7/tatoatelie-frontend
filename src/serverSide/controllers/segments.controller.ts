import type { NextApiResponse } from 'next'

import { AuthorizedApiRequest } from '../middlewares/protect'
import { segmentsFindAll } from '../repositories/segment'

export async function findSegments(_req: AuthorizedApiRequest, res: NextApiResponse): Promise<void> {
  const segments = await segmentsFindAll()

  return res.status(201).json({ success: true, segments })
}
