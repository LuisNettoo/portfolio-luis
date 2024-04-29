import { CardContainer } from "./styles"

import logoReactIcon from "../../assets/logo-react.svg"

interface CardProjectProps {
  imgURL: string;
  dateRelease: string;
  title: string;
  description: string;
  projectURL: string;
}

function CardProject({ imgURL, title, description, dateRelease, projectURL }: CardProjectProps) {
  return (
    <CardContainer>
      <a href={projectURL} target="_blank">
        <img src={imgURL} />
        <span>
          <h3>{dateRelease}</h3>
          <img src={logoReactIcon} alt="Logo do React" />
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </CardContainer>
  )
}

export default CardProject