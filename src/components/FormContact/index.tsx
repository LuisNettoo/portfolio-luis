import { Container } from "./styles"

import profileImg from "../../assets/profile.svg"
import arrowRightIcon from "../../assets/arrow-right.svg"
import logoGithubIcon from "../../assets/logo-github.svg"
import logoLinkedinIcon from "../../assets/logo-linkedin.svg"
import logoInstagramIcon from "../../assets/logo-instagram.svg"


function FormContact() {
  return (
    <Container>
      <section>
        <img src={profileImg} alt="" />

        <h3>Contato</h3>
        <h2>Gostou do meu trabalho? Vamos trabalhar juntos</h2>
        <p>Eu estou sempre disposto no chat. Mande um email para lmss.neto@discente.ufma.br ou fale comigo por alguma rede social.</p>

        <div>
          <a href="https://github.com/LuisNettoo" target="_blank">
            <img src={logoGithubIcon} alt="Logo do Github" />
          </a>
          <a href="https://github.com/LuisNettoo" target="_blank">
            <img src={logoLinkedinIcon} alt="Logo do Linkedin" />
          </a>
          <a href="https://www.instagram.com/magno_luis/" target="_blank">
            <img src={logoInstagramIcon} alt="Logo do Instagram" />
          </a>
        </div>
      </section>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea name="" id="" cols={30} rows={10} placeholder="Sua mensagem" />
      
        <button type="submit">
          Envie sua mensagem <img src={arrowRightIcon} alt="Seta para a direita" />
        </button>
      </form>
    </Container>
  )
}

export default FormContact