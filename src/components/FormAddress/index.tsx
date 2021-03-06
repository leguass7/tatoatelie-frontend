import type { Adresses } from '@prisma/client'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { object, string } from 'yup'

import { FormGroup } from '~/components//Forms/FormGroup'
import { CircleLoading } from '~/components/CircleLoading'
import { FormButton, ButtonClickHandler } from '~/components/Forms/FormButton'
import { Input } from '~/components/Forms/Input'
import { Select, SimpleOption } from '~/components/Forms/Select'
import { tostifyErros } from '~/helpers/toastfy'
import { validateFormData } from '~/helpers/validation'
import { useIsMounted } from '~/hooks/useIsMounted'
import type { IAddress, ICity, IState } from '~/serverSide/repositories/dto/adresses.dto'
import Api from '~/services/api'
import { getCepStates, getCepCities } from '~/services/api/cep.api'
import { addUserAddress, updateUserAddress } from '~/services/api/users.api'

export type FormAddressSuccessHandler = (addressId: number) => void
type FormData = IAddress & {}
type Props = {
  onCancel?: ButtonClickHandler
  onSuccess?: FormAddressSuccessHandler
  addressId?: number
}
export const FormAddress: React.FC<Props> = ({ onCancel, onSuccess, addressId = 0 }) => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const [ufSelected, setUfSelected] = useState(23)
  const isMounted = useIsMounted()
  const [ufList, setUfList] = useState<IState[]>([])
  const [cityList, setCityList] = useState<ICity[]>([])
  const [address, setAddress] = useState<Partial<Adresses>>({})

  const fetchCities = useCallback(
    async (stateId: number) => {
      if (stateId) {
        setLoading(true)
        const response = await getCepCities(stateId)
        if (isMounted.current) {
          if (response?.success) setCityList(response?.cities || [])
          setLoading(false)
        }
      }
    },
    [isMounted]
  )

  const fetchUf = useCallback(async () => {
    setLoading(true)
    const response = await getCepStates()
    if (isMounted.current) {
      if (response?.success) setUfList(response?.states || [])
      await fetchCities(23)
      setLoading(false)
    }
  }, [isMounted, fetchCities])

  const handleUfChange = useCallback(
    (uf: number | string) => {
      const stateId = (uf && parseInt(`${uf}`, 10)) || 0
      if (stateId) setUfSelected(stateId)
      fetchCities(stateId)
    },
    [fetchCities]
  )

  const fetchAdresses = useCallback(async () => {
    if (addressId) {
      setLoading(true)
      const { data = {} } = await Api.get(`/adresses/${addressId}`)
      if (isMounted?.current) {
        setLoading(false)
        if (data?.success) setAddress(data?.address ?? {})
      }
    }
  }, [isMounted, addressId])

  useEffect(() => {
    fetchAdresses()
  }, [fetchAdresses])

  const handleSubmit = useCallback(
    async (formData: FormData) => {
      const invalidData = await validateFormData(addressSchema, formData, formRef.current)
      if (!invalidData) {
        let response
        if (addressId) response = await updateUserAddress({ ...formData, id: addressId })
        else response = await addUserAddress(formData)

        if (response?.success) {
          if (onSuccess) onSuccess(response?.address?.id)
        } else if (response?.message) {
          tostifyErros(response?.message)
        }
      }
    },
    [onSuccess, addressId]
  )

  useEffect(() => {
    fetchUf()
  }, [fetchUf])

  const optionsUF: SimpleOption[] = useMemo(() => {
    return (
      ufList
        // .filter(f => !!(f && f?.actived))
        .map(p => {
          return { id: p.id, label: p.name }
        })
    )
  }, [ufList])

  const optionsCity: SimpleOption[] = useMemo(() => {
    return (
      cityList
        // .filter(f => !!(f && f?.actived))
        .map(p => {
          return { id: p.id, label: p.name }
        })
    )
  }, [cityList])

  return (
    <>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{ stateId: ufSelected, ...address }}
        key={`form-addr-${addressId}`}
      >
        {optionsUF?.length ? (
          <FormGroup justify="space-between">
            <Select
              name="stateId"
              label="estado:"
              themeColor="primary"
              options={optionsUF}
              defaultValue={ufSelected}
              onSelect={handleUfChange}
            />
            <Select
              name="cityId"
              grow={1}
              label="cidade:"
              themeColor="primary"
              options={optionsCity}
              disabled={!optionsCity?.length || loading}
            />
          </FormGroup>
        ) : null}
        <FormGroup justify="space-between">
          <Input grow={1} label="CEP" name="cep" />
          <Input grow={2} label="Bairro" name="district" />
        </FormGroup>
        <FormGroup justify="space-between">
          <Input grow={1} label="Rua" name="street" />
          <Input label="NR" name="houseNumber" />
        </FormGroup>
        <Input label="Complemento" name="complement" />
        <FormGroup justify="center">
          {onCancel ? <FormButton type="button" label="Voltar" variant="text" onClick={onCancel} /> : null}
          <FormButton type="submit" label="Salvar" />
        </FormGroup>
      </Form>
      {loading ? <CircleLoading light /> : null}
    </>
  )
}

const addressSchema = object().shape({
  cep: string().required('CEP ?? obrigat??rio'),
  district: string().required('Informe o bairro'),
  street: string().required('Informe a rua')
})
