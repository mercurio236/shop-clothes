import {
  ActionCardContent,
  ButtonAction,
  ContainerCard,
  ContentCard,
  FooterCard,
  ImgProduct,
} from './styles'
import imgPhoto from '../../assets/image-product-3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

export function Card() {
  return (
    <ContainerCard>
      <ImgProduct src={imgPhoto} alt="" />
      <ActionCardContent>
        <ButtonAction>
          <FontAwesomeIcon icon={faBagShopping} fontSize={20} />
          <p>Comprar</p>
        </ButtonAction>
      </ActionCardContent>
      <ContentCard>
        <p>Adicolor Classics Joggers</p>
        <FooterCard>
          <p>Dress</p>
          <p>R$ 130.00</p>
        </FooterCard>
      </ContentCard>
    </ContainerCard>
  )
}
