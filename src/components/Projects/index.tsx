import CardProject from "../CardProject"
import { ProjectsContainer } from "./styles"

import arrowRightIcon from "../../assets/arrow-right.svg"

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Projetos</h2>
      <p>Dê uma olhada nos meus principais projetos</p>

      <div className="cards__container">
        <CardProject />
        <CardProject />
        <CardProject />
      </div>

      <button>
        Ver todos <img src={arrowRightIcon} alt="Seta para a direita" />
      </button>
    </ProjectsContainer>
  )
}

export default Projects