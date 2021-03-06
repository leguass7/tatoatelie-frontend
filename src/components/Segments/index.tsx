import React, { useRef, useState } from 'react'

import type { ISegment } from '~/serverSide/repositories/segment'

import { Disclosure } from '../Disclosure'
import { KnowSvg } from '../Images/Know'
import { SegmentItem } from './SegmentItem'
import { SegmentsContainer, Container } from './styles'
import { defaultCategories, mergeSegments, segmentsFindOne } from './utils'

export { defaultCategories, mergeSegments, segmentsFindOne }

type Props = {
  list: ISegment[]
  know?: boolean
}

export const Segments: React.FC<Props> = ({ list, know }) => {
  const listed = list.filter(f => f?.actived)

  const [mouse, setMouse] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <Container mouse={mouse}>
      <Disclosure targetRef={targetRef}>
        <SegmentsContainer ref={targetRef} center={!!(listed.length <= 4)}>
          {listed.map(item => {
            return <SegmentItem key={`segment-${item.id}`} {...item} />
          })}
        </SegmentsContainer>
      </Disclosure>
      {know ? <KnowSvg id="know" onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)} /> : null}
    </Container>
  )
}
