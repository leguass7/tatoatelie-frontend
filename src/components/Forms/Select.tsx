import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

import { VariantColorsTypes } from '../AppThemeProvider/types'
import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { InputContainer, InputContent, LabelField, SelectField, SpanError } from './styles'

export type SimpleOption = {
  id: number
  label: string
}

export type HandleSimpleSelected = (selected?: SimpleOption['id']) => void

export type SelectProps = {
  name: string
  label?: string
  options: SimpleOption[]
  onSelect?: HandleSimpleSelected
  defaultValue?: SimpleOption['id']
  disabled?: boolean
  grow?: number
  textSize?: number
  themeColor?: VariantColorsTypes
}

export const Select: React.FC<SelectProps> = ({
  name,
  options,
  onSelect,
  label,
  disabled,
  grow,
  textSize = 16,
  themeColor
}) => {
  const { theme } = useAppTheme()
  const inputRef = useRef<HTMLSelectElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  // const [selected, setSelected] = useState<number>(defaultValue)

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = event => {
    const value = parseInt(event?.target?.value, 10) || 0
    if (value) {
      if (onSelect && typeof onSelect === 'function') onSelect(value)
    }
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      }
    })
  }, [fieldName, registerField])

  return (
    <InputContainer disabled={!!disabled} grow={grow}>
      <InputContent textSize={textSize} textColor={theme.colors[themeColor]}>
        {label && <LabelField htmlFor={fieldName}>{label}</LabelField>}
        <SelectField
          id={fieldName}
          ref={inputRef}
          onChange={handleChange}
          // value={selected || ''}
          name={name}
          defaultValue={defaultValue}
          disabled={!!disabled}
        >
          {options.map(({ id, label }) => {
            const key = `option-${id}-${label}`
            return (
              <option key={key} value={id}>
                {label}
              </option>
            )
          })}
        </SelectField>
        {error && <SpanError>{error}</SpanError>}
      </InputContent>
    </InputContainer>
  )
}
