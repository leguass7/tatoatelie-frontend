import type { Segment } from '@prisma/client'

import prisma from '~/serverSide/database/prisma'

export interface ISegment extends Partial<Segment> {}

export async function segmentsFindAll() {
  const segments = await prisma?.segment?.findMany?.({
    select: {
      id: true,
      actived: true,
      slug: true,
      image: true,
      label: true,
      description: true,
      customPage: true
    }
  })

  return segments || []
}
