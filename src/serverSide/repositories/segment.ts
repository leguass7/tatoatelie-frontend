import { Segment } from '@prisma/client'

import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import homeImg from '~/assets/icons/home.svg'
import lockImg from '~/assets/icons/lock.svg'
import personImg from '~/assets/icons/person.svg'
import espatulaImg from '~/assets/icons/spatulas.png'
import { mergeDeep, removeInvalidValues } from '~/helpers'

export interface ISegment extends Partial<Segment> {
  customPage?: boolean
}

export const defaultCategories: ISegment[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas', image: espatulaImg, actived: false, customPage: true },
  { id: 2, slug: 'estencil', label: 'Estêncil', image: estencilImg, actived: true, customPage: true },
  { id: 3, slug: 'organizador', label: 'Organizador', image: coreImg, actived: false },
  { id: 4, slug: 'caixas', label: 'Caixas', image: caixasImg, actived: false },
  { id: 5, slug: 'bandejas', label: 'Bandejas', image: bandejasImg, actived: false },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards', image: cakeboardsImg, actived: false }
]

export const defaultUserActions: ISegment[] = [
  { id: 1, actived: true, label: 'Dados do usuário', slug: 'me?type=data', image: personImg, customPage: true },
  {
    id: 2,
    actived: true,
    label: 'Trocar senha',
    slug: 'me?type=password',
    image: lockImg,
    customPage: true
  },
  {
    id: 3,
    actived: true,
    label: 'Endereços',
    slug: 'me?type=address',
    image: homeImg,
    customPage: true
  }
]

export async function segmentsFindAll() {
  // TEMP
  const segments = await global?.prisma?.segment?.findMany?.({
    select: {
      id: true,
      actived: true,
      slug: true,
      image: true,
      label: true,
      description: true
    }
  })

  return segments
}

export function mergeSegments(list: Segment[]) {
  return list.map(s => {
    let found = defaultCategories.find(c => c?.id === s?.id)
    found = removeInvalidValues(found)

    if (found) found = mergeDeep(found, s)
    return found || s
  })
}

interface SegmentFilter {
  id?: number
  slug?: string
}

export async function segmentsFindOne({ id, slug }: SegmentFilter): Promise<ISegment> {
  return defaultCategories.find(s => s.id === id || s.slug === slug)
}
