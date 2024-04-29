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
          <li><a href="#">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#form__contact">Contato</a></li>
        </ul>
      </HeaderNavigation>
    </HeaderContainer>
  )
}

export default Header