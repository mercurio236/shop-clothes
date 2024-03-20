import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerBadge, IndicatorBadge } from './styles'

type BadgeProps = {
  cartItem: boolean
}

export function BadgeBag({ cartItem }: BadgeProps) {
  return (
    <ContainerBadge>
      <FontAwesomeIcon icon={faBagShopping} />
      {cartItem && <IndicatorBadge />}
    </ContainerBadge>
  )
}
