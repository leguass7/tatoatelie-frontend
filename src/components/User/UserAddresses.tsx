import { Button, ButtonGroup, Modal } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

import { AddressItem, AddressItemProps } from '~/components/AddressItem'
import { ModalAddr } from '~/components/Cart/CartSteps/CheckDelivery/ModalAddr'
import { CircleLoading } from '~/components/CircleLoading'
import { withCheckList } from '~/components/withChecklist'
import { useIsMounted } from '~/hooks/useIsMounted'
import { getUserAdresses } from '~/services/api/users.api'

import { Divider } from '../styled'

const ListItems = withCheckList(AddressItem)

interface Props {}

export const UserAddresses: React.FC<Props> = () => {
  const [addrOpen, setAddrOpen] = useState(false)
  const [addr, setAddr] = useState<AddressItemProps[]>([])
  const [loading, setLoading] = useState(false)
  const isMounted = useIsMounted()
  const [addrId, setAddrId] = useState(0)
  const [isUpdateAction, setIsUpdateAction] = useState(false)

  const fetchData = useCallback(async () => {
    setLoading(true)
    const response = await getUserAdresses()
    if (isMounted.current) {
      setLoading(false)
      if (response && response.success) setAddr(response.adresses)
    }
  }, [isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleModalClose = useCallback(() => {
    setAddrOpen(false)
  }, [])

  const handleModalSuccess = useCallback(() => {
    setAddrOpen(false)
    fetchData()
  }, [fetchData])

  const handleSelectAddress = useCallback(
    (ids: number[]) => {
      const [id = 0] = ids
      setAddrId(id)
    },
    [setAddrId]
  )

  const handleUpdate = useCallback(() => {
    setIsUpdateAction(true)
    setAddrOpen(true)
  }, [])

  const handleAdd = useCallback(() => {
    setIsUpdateAction(false)
    setAddrOpen(true)
  }, [])

  return (
    <>
      <ButtonGroup>
        <Button variant="outlined" onClick={handleAdd}>
          adicionar endereço
        </Button>
        {addrId ? (
          <Button variant="outlined" onClick={handleUpdate}>
            editar endereço
          </Button>
        ) : null}
      </ButtonGroup>
      <Divider />
      <ListItems key={`list-addr-${addr.length}`} list={addr} onChange={handleSelectAddress} />
      <Modal open={addrOpen} onClose={handleModalClose}>
        <div>
          <ModalAddr
            addressId={isUpdateAction ? addrId : 0}
            onCancel={handleModalClose}
            onSuccess={handleModalSuccess}
          />
        </div>
      </Modal>
      {loading ? <CircleLoading light /> : null}
    </>
  )
}
