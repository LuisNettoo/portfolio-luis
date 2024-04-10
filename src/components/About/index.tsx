import { AboutContainer, AboutMeContainer } from "./styles"

import codingImg from "../../assets/person-coding.svg"
import personCodingImg from "../../assets/man-coding.svg"

import readCvIcon from "../../assets/read-cv.svg"
import arrowRightIcon from "../../assets/arrow-right.svg"
import htmlIcon from "../../assets/logo-html5.svg"
import cssIcon from "../../assets/logo-css3.svg"
import javascriptIcon from "../../assets/logo-javascript.svg"
import reactIcon from "../../assets/logo-react.svg"

function About() {
  return (
    <>
    <AboutContainer>
      <section>
        <h1>Olá, Eu sou Luis</h1>
        <h2>Desenvolvedor Front-end</h2>
        <p>Estudo programação 6 meses e no atual momento estou participando de um projeto chamado Jovem Tech. Estou me especializando na parte do Front-end usando tecnologias como HTML, CSS e React.</p>
      
        <div>
            <a href="#"><img src={readCvIcon} alt="Papel de curriculo" />Curriculo</a>
            <a href="#">Entre em contato <img src={arrowRightIcon} alt="Seta para a direita" /></a>
        </div>
      </section>

      <img src={codingImg} alt="Pessoa programando" />
      </AboutContainer>
      <AboutMeContainer>
        <img src={personCodingImg} alt="Homem programando" />
        <section>
          <div>
            <img src={htmlIcon} alt="Icone do HTML" />
            <img src={cssIcon} alt="Icone do CSS" />
            <img src={javascriptIcon} alt="Icone do Javascript" />
            <img src={reactIcon} alt="Icone do React" />
          </div>
        </section>
      </AboutMeContainer>
      </>
  )
}

export default About