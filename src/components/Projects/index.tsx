import CardProject from "../CardProject"
import { ProjectsContainer } from "./styles"

import arrowRightIcon from "../../assets/arrow-right.svg"
import todolistImg from "../../assets/placeholder-todo.svg"

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <h2>Projetos</h2>
      <p>Dê uma olhada nos meus principais projetos</p>

      <div className="cards__container">
        <CardProject 
          title="Todo List" 
          description="Projeto Fullstack de uma Todo list com React e Nodejs, e um banco de dados Postgres online." 
          imgURL={todolistImg}
          dateRelease="Dezembro 2023"
        />
        <CardProject 
          title="Todo List" 
          description="Projeto Fullstack de uma Todo list com React e Nodejs, e um banco de dados Postgres online." 
          imgURL={todolistImg}
          dateRelease="Dezembro 2023"
        />
        <CardProject 
          title="Todo List" 
          description="Projeto Fullstack de uma Todo list com React e Nodejs, e um banco de dados Postgres online." 
          imgURL={todolistImg}
          dateRelease="Dezembro 2023"
        />
      </div>

      <button>
        Ver todos <img src={arrowRightIcon} alt="Seta para a direita" />
      </button>
    </ProjectsContainer>
  )
}

export default Projects