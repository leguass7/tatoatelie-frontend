import React from 'react'

import type { FlexJustify } from '~/styles/styledTypes'

import { Group } from './styles'

type Props = {
  justify?: FlexJustify
}
export const FormGroup: React.FC<Props> = ({ children, justify }) => {
  return <Group justify={justify}>{children}</Group>
}
