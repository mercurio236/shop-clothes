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

interface PropsCard {
  data: DTOProducts
}

export function Card({ data }: PropsCard) {
  return (
    <ContainerCard key={data.id}>
      <ImgProduct src={data.category?.image} />
      <ActionCardContent>
        <ButtonAction>
          <FontAwesomeIcon icon={faBagShopping} fontSize={20} />
          <p>Comprar</p>
        </ButtonAction>
      </ActionCardContent>
      <ContentCard>
        <span>{data.title}</span>
        <FooterCard>
          <p>{data.category?.name}</p>
          <p>
            {(data.price).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </p>
        </FooterCard>
      </ContentCard>
    </ContainerCard>
  )
}
