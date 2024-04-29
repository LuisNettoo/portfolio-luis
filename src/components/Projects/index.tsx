import CardProject from "../CardProject"
import { ProjectsContainer } from "./styles"

import arrowRightIcon from "../../assets/arrow-right.svg"
import todolistImg from "../../assets/placeholder-todo.svg"
import dtmoneyImg from "../../assets/placeholder-dtmoney.svg"
import costsImg from "../../assets/placeholder-costs.svg"

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
          projectURL="https://todo-list-luisneto.vercel.app/"
        />
        <CardProject 
          title="DT Money" 
          description="Website de simulação de transações, criado em Reactjs com Typescript e com API Fake Miragejs." 
          imgURL={dtmoneyImg}
          dateRelease="Março 2023"
          projectURL="https://dtmoney-reactjs-ku15.vercel.app/"
        />
        <CardProject 
          title="Costs JS" 
          description="Projeto realizado com intuito de treinar manipulação dados e criação interfaces com React.js." 
          imgURL={costsImg}
          dateRelease="Março 2023"
          projectURL="https://costs-reactjs-jet.vercel.app/"
        />
      </div>

      <button>
        Ver todos <img src={arrowRightIcon} alt="Seta para a direita" />
      </button>
    </ProjectsContainer>
  )
}

export default Projects