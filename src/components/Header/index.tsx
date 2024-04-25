import { HeaderContainer, HeaderLogo, HeaderNavigation } from "./styles"

import menuIcon from "../../assets/hamburger-menu.svg"

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        Luis<strong>Neto</strong>
      </HeaderLogo>
      <img src={menuIcon} alt="" />
      <HeaderNavigation>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </HeaderNavigation>
    </HeaderContainer>
  )
}

export default Header