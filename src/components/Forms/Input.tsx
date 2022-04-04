import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

import { VariantColorsTypes } from '../AppThemeProvider/types'
import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { InputContainer, InputContent, InputField, LabelField, SpanError } from './styles'

interface Props {
  name: string
  label?: string
  textSize?: number
  themeColor?: VariantColorsTypes
  grow?: number
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export const Input: React.FC<InputProps> = ({
  name,
  label,
  textSize = 16,
  themeColor = 'primary',
  placeholder,
  type,
  disabled,
  grow,
  ...props
}) => {
  const { theme } = useAppTheme()
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      }
      //   setValue: (ref, value) => {
      //     ref.current.value = value
      //   },
      //   clearValue: ref => {
      //     ref.current.value = ''
      //   }
    })
  }, [fieldName, registerField])

  return (
    <InputContainer disabled={!!disabled} grow={grow}>
      <InputContent textSize={textSize} textColor={theme.colors[themeColor]}>
        {label && <LabelField htmlFor={fieldName}>{label}</LabelField>}
        <InputField
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type={type}
          disabled={!!disabled}
          {...props}
        />
        {error && <SpanError>{error}</SpanError>}
      </InputContent>
    </InputContainer>
  )
}
