import { CardContainer } from "./styles"

import placeholderImg from "../../assets/Placeholder.svg"
import logoReactIcon from "../../assets/logo-react.svg"

function CardProject() {
  return (
    <CardContainer>
      <img src={placeholderImg} alt="" />
      <span>
        <h3>Dezembro 2023</h3>
        <img src={logoReactIcon} alt="Logo do React" />
      </span>
      <h2>DT Money</h2>
      <p>A link agragator for social media.</p>
    </CardContainer>
  )
}

export default CardProject