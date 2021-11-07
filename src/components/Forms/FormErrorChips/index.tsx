import React, { useMemo } from 'react'

import { VariantColorsTypes } from '~/components/AppThemeProvider/types'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { makeArray } from '~/helpers/array'

import { ChipError } from './ChipError'
import { ChipErrorContainer } from './styles'

type Props = {
  errors?: string | string[]
  themeColor?: VariantColorsTypes
}
export const FormErrorChips: React.FC<Props> = ({ errors = [], themeColor = 'errors' }) => {
  const { theme } = useAppTheme()

  const list = useMemo(() => {
    return makeArray(errors)
      .map(e => {
        return (
          e && {
            id: `${e}${Math.random()}`,
            message: e
          }
        )
      })
      .filter(f => !!f)
  }, [errors])

  if (!list?.length) return null

  return (
    <ChipErrorContainer colors={theme.colors[themeColor]}>
      {list.map(({ message, id }) => {
        return <ChipError key={id} message={message} />
      })}
    </ChipErrorContainer>
  )
}
