import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import espatulaImg from '~/assets/icons/spatulas.png'
import { mergeDeep, removeInvalidValues } from '~/helpers'
import type { ISegment } from '~/serverSide/repositories/segment'

export const defaultCategories: ISegment[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas', image: espatulaImg, actived: false, customPage: true },
  { id: 2, slug: 'estencil', label: 'Estêncil', image: estencilImg, actived: true, customPage: true },
  { id: 3, slug: 'organizador', label: 'Organizador', image: coreImg, actived: false },
  { id: 4, slug: 'caixas', label: 'Caixas', image: caixasImg, actived: false },
  { id: 5, slug: 'bandejas', label: 'Bandejas', image: bandejasImg, actived: false },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards', image: cakeboardsImg, actived: false }
]

export function mergeSegments(list: Partial<ISegment>[] = []) {
  return defaultCategories.map(s => {
    const found = list.find(c => c?.id === s?.id)
    if (found) {
      return mergeDeep(s, removeInvalidValues(found))
    }
    return s
  })
}

interface SegmentFilter {
  id?: number
  slug?: string
}

export async function segmentsFindOne({ id, slug }: SegmentFilter): Promise<ISegment> {
  return defaultCategories.find(s => s.id === id || s.slug === slug)
}
