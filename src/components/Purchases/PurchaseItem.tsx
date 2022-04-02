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
  const { label = null, street = null, district = null, cep = null } = purchase?.address || {}

  const [expanded, setExpanded] = useState(false)

  const hasAddressInfo = !!street && !!district && !!cep

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const shipping = useMemo(() => {
    if (purchase?.displayValue && purchase?.items?.length) {
      const value = purchase.items.reduce((acc, at) => {
        const price = at.price
        // @ts-ignore
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

  return (
    <ItemContainer>
      <CardItem>
        <Grid container>
          <Grid sm={3} item px={2} pt={1} xs={6}>
            <Typography variant="h5">{name}</Typography>
            <CardHeader sx={{ padding: 0 }} subheader={formatDate(createdAt, 'dd/MM/yyyy HH:mm:ss')} />
          </Grid>
          <Grid sm={3} item xs={6} px={2} pt={1}>
            <AlignColumnText>
              <Typography variant="h6">Total</Typography>
              <Typography variant="body2">{formatPrice(displayValue)}</Typography>
            </AlignColumnText>
          </Grid>
          <Grid sm={3} item xs={6} pt={1} px={2}>
            {hasAddressInfo || label ? (
              <>
                {label ? (
                  <>
                    <Typography variant="h6">Enviar para</Typography>
                    <Typography variant="body2">{label}</Typography>
                  </>
                ) : hasAddressInfo ? (
                  <>
                    <Typography variant="h6">Enviar para</Typography>
                    <Typography variant="body2">{`${street}, ${district} - ${cep}`}</Typography>
                  </>
                ) : (
                  <Typography variant="h6">Receber na loja</Typography>
                )}

                {shipping ? <Typography variant="caption">Frete: {formatPrice(shipping)}</Typography> : null}
              </>
            ) : (
              <Typography variant="h6">Receber na loja</Typography>
            )}
          </Grid>
          <Grid sm={3} item pt={1} px={2} xs={6} textAlign="right">
            <Typography variant="h6">Pagamento</Typography>
            <Typography variant="body2">{statusEnum[status]}</Typography>
            <Typography variant="body2">{`Método: ${payment?.method ?? 'pix'}`}</Typography>
          </Grid>
        </Grid>
        <CardActions>
          <Grid container justifyContent="flex-start" alignItems="center">
            <ButtonGroup>
              {payment?.id && !payment?.paid && (
                <Button onClick={handleClick(payment.id)} variant="contained" sx={{ color: '#fff' }}>
                  Pagar {payment?.meta ? '1' : '0'}
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
                        <Grid item xs={6} md={4} borderBottom={1} p={1}>
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

const AlignColumnText = styled.div`
  @media (max-width: 599px) {
    text-align: right;
  }
`

const CardItem = styled(Card)`
  background-color: ${props => props.theme.colors.primary} !important;
  color: #f1f1f1 !important;
`
