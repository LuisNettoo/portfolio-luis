import CardProject from "../CardProject"
import { ProjectsContainer } from "./styles"

function Projects() {
  return (
    <ProjectsContainer>
      <h2>Projetos</h2>
      <p>Dê uma olhada nos meus principais projetos</p>

      <section>
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </ProjectsContainer>
  )
}

export default Projects