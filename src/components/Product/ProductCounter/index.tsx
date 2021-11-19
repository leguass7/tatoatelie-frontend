import React, { useCallback, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import { VariantColorsTypes } from '~/components/AppThemeProvider/types'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'

import { ProductCounterContainer, ButtonCounter, ProductCounterValue } from './styles'

type Props = {
  quantity?: number
  maxQuantity?: number
  unavailable?: boolean
  themeColor?: VariantColorsTypes
  onChange?: (_value: number) => void
}

export const ProductCounter: React.FC<Props> = ({ themeColor = 'primary', quantity = 1, maxQuantity, onChange }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [amount, setAmount] = useState(quantity)

  const lineColor = theme.colors[themeColor]
  const hoverColor = matchingBackgroudText(themeColor)

  const plus = useCallback(
    (add: number) => {
      return () => {
        const newValue = amount + add
        setAmount(newValue)
        if (onChange) onChange(newValue)
      }
    },
    [amount, onChange]
  )

  return (
    <ProductCounterContainer strokeColor={lineColor} stroke={2} hoverColor={hoverColor}>
      <ButtonCounter value={-1} disabled={amount <= 1} onClick={plus(-1)}>
        <span>
          <AiOutlineMinus size={24} />
        </span>
      </ButtonCounter>
      <ProductCounterValue textSize={16}>{amount}</ProductCounterValue>
      <ButtonCounter value={1} disabled={!!(maxQuantity && amount >= maxQuantity)} onClick={plus(1)}>
        <span>
          <AiOutlinePlus size={24} />
        </span>
      </ButtonCounter>
    </ProductCounterContainer>
  )
}
