export interface ISegment {
  id: number
  slug: string
  label: string
  image?: string
  customPage?: boolean
  actived?: boolean
}

const mockSegments: ISegment[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas' },
  { id: 2, slug: 'estencil', label: 'Estêncil' },
  { id: 3, slug: 'organizador', label: 'Organizador' },
  { id: 4, slug: 'caixas', label: 'Caixas' },
  { id: 5, slug: 'bandejas', label: 'Bandejas' },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards' }
]

interface SegmentFilter {
  id?: number
  slug?: string
}

export async function segmentsFindAll() {
  return mockSegments
}

export async function segmentsFindOne({ id, slug }: SegmentFilter): Promise<ISegment> {
  return mockSegments.find(s => s.id === id || s.slug === slug)
}
