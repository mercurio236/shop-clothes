import {
  BagContent,
  Container,
  ContentLogo,
  ContentMenu,
  Line,
  TextMenu,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import LogoIcon from '../../assets/logo.svg'
import { NavLink } from '../NavLink'

export function Header() {
  return (
    <Container>
      <ContentLogo>
        <FontAwesomeIcon icon={faSearch} width={50} height={50} />
        <NavLink to="/">
          <img src={LogoIcon} />
        </NavLink>
        <NavLink to="/cart">
          <BagContent>
            <FontAwesomeIcon icon={faBagShopping} width={50} height={50} />
            <p>Cart</p>
          </BagContent>
        </NavLink>
      </ContentLogo>
      <Line />
      <ContentMenu>
        <NavLink to="#">
          <TextMenu>Jewelry & Accessories</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Clothing & Shoes</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Home & Living</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Wedding & Party</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Toys & Entertainment</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Art & Collectibles</TextMenu>
        </NavLink>
        <NavLink to="#">
          <TextMenu>Craft Supplies & Tools</TextMenu>
        </NavLink>
      </ContentMenu>
    </Container>
  )
}
