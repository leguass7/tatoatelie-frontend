import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  Typography
} from '@mui/material'
import { Fragment, memo, useCallback, useMemo, useState } from 'react'
import { MdExpandMore as ExpandMoreIcon } from 'react-icons/md'
import styled from 'styled-components'

import { formatPrice } from '~/helpers'
import { formatDate } from '~/helpers/string'

import { ExpandMore } from '../ExpandMore'
import { PurchaseWithItems } from './PurchaseList'

interface Props extends PurchaseWithItems {
  onPayment: (paymentId: number, purchaseId: number) => void
}

const statusEnum = ['Cancelado', 'Em espera', 'Pago', 'A caminho', 'Recebido']

const PurchaseItemComponent: React.FC<Props> = ({ onPayment, ...purchase }) => {
  const { id, actived, status, displayValue = 0, paid, payments, createdAt } = purchase
  const [{ name = 'Produto não encontrado' } = {}] = purchase?.items
  const { label = '', street = '', district = '', cep = '' } = purchase?.address || {}

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const shipping = useMemo(() => {
    if (purchase?.displayValue && purchase?.items?.length) {
      const value = purchase.items.reduce((acc, at) => {
        const price = at.price as number
        return at.quantity * price + acc
      }, 0)
      return purchase.displayValue - value
    }
    return 0
  }, [purchase])

  const payment = useMemo(() => {
    if (actived && !paid && payments?.length) {
      const found = payments?.find?.(({ actived, paid, method }) => actived && !paid && method === 'pix')
      return found
    }
  }, [actived, payments, paid])

  const handleClick = useCallback(
    (paymentId: number) => () => {
      if (onPayment && id) onPayment(paymentId, id)
    },
    [onPayment, id]
  )

  // const handleRedirect = useCallback(
  //   (purchaseId: number) => () => {
  //     if (purchaseId) push(`/purchases/${purchaseId}`)
  //   },
  //   [push]
  // )

  return (
    <ItemContainer>
      <CardItem>
        <Grid container>
          <Grid item pl={2} pr={1} pt={1} xs={4}>
            <Typography variant="h5">{name}</Typography>
            <CardHeader sx={{ padding: 0 }} subheader={formatDate(createdAt, 'dd/MM/yyyy HH:mm:ss')} />
          </Grid>
          <Grid item xs={2} pt={1}>
            <Typography variant="h6">Total</Typography>
            <Typography variant="body2">{formatPrice(displayValue)}</Typography>
          </Grid>
          <Grid item xs={3} pt={1}>
            {street && district && cep ? (
              <>
                <Typography variant="h6">Enviar para</Typography>
                <Typography variant="body2">{`${street}, ${district} - ${cep}`}</Typography>
                {label ? <Typography variant="caption">{label}</Typography> : null}
                {shipping ? <Typography variant="caption">Frete: {formatPrice(shipping)}</Typography> : null}
              </>
            ) : (
              <Typography variant="h6">Receber na loja</Typography>
            )}
          </Grid>
          <Grid item xs={3} textAlign="right" pt={1} px={2}>
            <Typography variant="h6">Pagamento</Typography>
            <Typography variant="body2">{statusEnum[status]}</Typography>
            <Typography variant="body2">{`Método: ${payment?.method ?? 'pix'}`}</Typography>
          </Grid>
        </Grid>
        <CardActions>
          <Grid container justifyContent="flex-start" alignItems="center">
            <ButtonGroup>
              {/* <Button onClick={handleRedirect(id)} variant="contained">
                Detalhes do pedido
              </Button> */}
              {payment?.id && (
                <Button onClick={handleClick(payment.id)} variant="contained" sx={{ color: '#fff' }}>
                  Pagar
                </Button>
              )}
            </ButtonGroup>
            <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              <ExpandMoreIcon />
            </ExpandMore>
          </Grid>
        </CardActions>
        <Collapse in={expanded} timeout="auto" mountOnEnter unmountOnExit>
          <CardContent>
            <Typography variant="h5">Produtos comprados</Typography>
            <Grid container>
              {purchase?.items?.length
                ? purchase.items.map(currentPurchase => {
                    const { id, quantity, price = 0, size, name } = currentPurchase

                    return (
                      <Fragment key={`item-${id}`}>
                        <Grid item xs={4} borderBottom={1} p={1}>
                          <Typography variant="h6">{name}</Typography>
                          <CardHeader sx={{ padding: 0 }} subheader={`preço: ${formatPrice(price as number)}`} />
                          {quantity ? <Typography variant="body1">quantidade: {quantity}</Typography> : null}
                          {size ? <Typography variant="body2">tamanho: {size} cm</Typography> : null}
                        </Grid>
                      </Fragment>
                    )
                  })
                : null}
            </Grid>
          </CardContent>
        </Collapse>
      </CardItem>
    </ItemContainer>
  )
}

export const PurchaseItem = memo(PurchaseItemComponent)

const ItemContainer = styled.div`
  width: 100%;
  padding: 4px;
`

const CardItem = styled(Card)`
  background-color: ${props => props.theme.colors.primary} !important;
  color: #f1f1f1 !important;
`
