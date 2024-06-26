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
    <AboutContainer id="about">
      <section>
        <h1>Olá, Eu sou Luis</h1>
        <h2>Desenvolvedor Front-end</h2>
        <p>Estudo programação 6 meses e no atual momento estou participando de um projeto chamado Jovem Tech. Estou me especializando na parte do Front-end usando tecnologias como HTML, CSS e React.</p>
      
        <div>
            <a href="https://drive.google.com/uc?export=download&id=1HpokcbpN0hRu5_c5bo8dP6chaMuobIk4"><img src={readCvIcon} alt="Papel de curriculo" />Curriculo</a>
            <a href="#form__contact">Entre em contato <img src={arrowRightIcon} alt="Seta para a direita" /></a>
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

          <h3>Sobre mim</h3>
          <h2>Eu sou um estudante de desenvolvimento, que busco pela minha primeira oportunidade profissional.</h2>

          <p>Além de desenvolvimento, gosto muito de jogos, filmes, musicas e de sair com meus amigos. No tempo livre gosto de jogar jogos cooperativos e competitivos e também ir ao cinema para ver os grandes lançamentos.</p>
          <div>
            <a href="https://drive.google.com/uc?export=download&id=1HpokcbpN0hRu5_c5bo8dP6chaMuobIk4"><img src={readCvIcon} alt="Papel de curriculo" />Meu Curriculo</a>
          </div>
        </section>
      </AboutMeContainer>
      </>
  )
}

export default About