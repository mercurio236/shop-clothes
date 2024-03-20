import {
  ActionCardContent,
  ButtonAction,
  ContainerCard,
  ContentCard,
  FooterCard,
  ImgProduct,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { DTOProducts } from '../../dtos/dtos-products'
import { useNavigate } from 'react-router-dom'

interface PropsCard {
  data: DTOProducts
}

export function Card({ data }: PropsCard) {
  const navigation = useNavigate()
  return (
    <ContainerCard key={data.id}>
      <ImgProduct src={data.category?.image} />
      <ActionCardContent>
        <ButtonAction onClick={() => navigation(`/product/${data.id}`)}>
          <FontAwesomeIcon icon={faBagShopping} fontSize={20} />
          <p>Comprar</p>
        </ButtonAction>
      </ActionCardContent>
      <ContentCard>
        <span>{data.title}</span>
        <FooterCard>
          <p>{data.category?.name}</p>
          <p>
            {data.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </FooterCard>
      </ContentCard>
    </ContainerCard>
  )
}
