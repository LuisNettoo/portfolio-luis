import { HeaderContainer, HeaderLogo, HeaderNavigation } from "./styles"

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo>
        Luis<strong>Neto</strong>
      </HeaderLogo>
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