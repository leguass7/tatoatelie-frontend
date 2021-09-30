import React, { useState } from 'react'

import bandejasImg from '~/assets/icons/bandejas.png'
import caixasImg from '~/assets/icons/caixas.png'
import cakeboardsImg from '~/assets/icons/cakeboards.png'
import coreImg from '~/assets/icons/core.png'
import estencilImg from '~/assets/icons/estencil.png'
import espatulaImg from '~/assets/icons/spatulas.png'
import type { ISegment } from '~/serverSide/repositories/segment'

import { KnowSvg } from '../Images/Know'
import { SegmentItem } from './SegmentItem'
import { SegmentsContainer, Container } from './styles'

const defaultCategories: ISegment[] = [
  { id: 1, slug: 'espatulas', label: 'Espátulas', image: espatulaImg, actived: true, customPage: true },
  { id: 2, slug: 'estencil', label: 'Estêncil', image: estencilImg, actived: true, customPage: true },
  { id: 3, slug: 'organizador', label: 'Organizador', image: coreImg, actived: false },
  { id: 4, slug: 'caixas', label: 'Caixas', image: caixasImg, actived: true },
  { id: 5, slug: 'bandejas', label: 'Bandejas', image: bandejasImg, actived: false },
  { id: 6, slug: 'cakeboards', label: 'Cakeboards', image: cakeboardsImg, actived: false }
]
type Props = {
  list?: ISegment[]
  hideId?: number
  know?: boolean
}

export const Segments: React.FC<Props> = ({ list = defaultCategories, hideId, know }) => {
  const listed = list.filter(f => f.actived && f.id !== hideId)
  const [mouse, setMouse] = useState(false)
  return (
    <Container mouse={mouse}>
      <SegmentsContainer center={!!(listed.length <= 4)}>
        {listed.map(item => {
          return <SegmentItem key={`segment-${item.id}`} {...item} />
        })}
      </SegmentsContainer>
      {know ? <KnowSvg id="know" onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)} /> : null}
    </Container>
  )
}
