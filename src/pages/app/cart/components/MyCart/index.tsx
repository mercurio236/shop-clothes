import {
  BodyProductAndImg,
  ButtonLess,
  ButtonPlus,
  ContainerButtonQuantity,
  ContainerMyCart,
  ContentMyCart,
  ImgProductMyCart,
  PriceMyCart,
  QuantityProduct,
  TitleMyCart,
} from './styles'

import { Button } from '../../../../../components/Button'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { DTOProducts } from '../../../../../dtos/dtos-products'
import { useProductCart } from '../../../../../context/cart'

interface Props {
  data: DTOProducts
}

export function MyCart({ data }: Props) {
  const { removeToCart, addToCart, deleteToCart } = useProductCart()

  return (
    <ContainerMyCart>
      <ContentMyCart>
        <BodyProductAndImg>
          <ImgProductMyCart src={data.category.image} />
          <TitleMyCart>{`${data.quantity} ${data.title}`}</TitleMyCart>
        </BodyProductAndImg>

        <PriceMyCart>
          {(data.price * data.quantity).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </PriceMyCart>
        <ContainerButtonQuantity>
          <ButtonLess
            onClick={() => removeToCart(data)}
            disabled={data.quantity <= 1}
          >
            <FontAwesomeIcon icon={faMinus} />
          </ButtonLess>
          <QuantityProduct>{data.quantity}</QuantityProduct>
          <ButtonPlus onClick={() => addToCart(data)}>
            <FontAwesomeIcon icon={faPlus} />
          </ButtonPlus>
        </ContainerButtonQuantity>
        <PriceMyCart>
          {data.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </PriceMyCart>

        <Button
          onClick={() => deleteToCart(data.id)}
          icon={faTrashAlt}
          variant="default"
        />
      </ContentMyCart>
    </ContainerMyCart>
  )
}
