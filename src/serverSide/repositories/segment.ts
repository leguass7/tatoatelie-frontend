import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import espatulaImg from '~/assets/icons/spatulas.png'

export interface ISegment {
  id: number
  slug: string
  label: string
  description?: string
  image?: string
  customPage?: boolean
  actived?: boolean
}

export const defaultCategories: ISegment[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas', image: espatulaImg, actived: true, customPage: true },
  { id: 2, slug: 'estencil', label: 'Estêncil', image: estencilImg, actived: true, customPage: true },
  { id: 3, slug: 'organizador', label: 'Organizador', image: coreImg, actived: true },
  { id: 4, slug: 'caixas', label: 'Caixas', image: caixasImg, actived: true },
  { id: 5, slug: 'bandejas', label: 'Bandejas', image: bandejasImg, actived: true },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards', image: cakeboardsImg, actived: false }
]

interface SegmentFilter {
  id?: number
  slug?: string
}

export async function segmentsFindAll() {
  return defaultCategories
}

export async function segmentsFindOne({ id, slug }: SegmentFilter): Promise<ISegment> {
  return defaultCategories.find(s => s.id === id || s.slug === slug)
}
