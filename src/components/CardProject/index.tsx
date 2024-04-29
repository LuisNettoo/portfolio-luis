import { CardContainer } from "./styles"

import placeholderImg from "../../assets/Placeholder.svg"
import logoReactIcon from "../../assets/logo-react.svg"

interface CardProjectProps {
  imgURL: string;
  dateRelease: string;
  title: string;
  description: string;

}

function CardProject({ imgURL, title, description }: CardProjectProps) {
  return (
    <CardContainer>
      <img src={imgURL} alt="" />
      <span>
        <h3>Dezembro 2023</h3>
        <img src={logoReactIcon} alt="Logo do React" />
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </CardContainer>
  )
}

export default CardProject