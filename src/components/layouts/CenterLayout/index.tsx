import React from 'react'

import { BoxCenter } from '~/components/styled'

import { CenterLayoutContent } from './styles'

export const CenterLayout: React.FC = ({ children }) => {
  return (
    <BoxCenter>
      <CenterLayoutContent>{children}</CenterLayoutContent>
    </BoxCenter>
  )
}
