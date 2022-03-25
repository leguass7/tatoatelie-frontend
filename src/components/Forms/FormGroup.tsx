import React from 'react'

import type { FlexJustify } from '~/styles/styledTypes'

import { Group } from './styles'

type Props = {
  justify?: FlexJustify
  topMargin?: number
}
export const FormGroup: React.FC<Props> = ({ children, justify, topMargin }) => {
  return (
    <Group justify={justify} topMargin={topMargin}>
      {children}
    </Group>
  )
}
