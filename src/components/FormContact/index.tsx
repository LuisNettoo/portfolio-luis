import { FormEventHandler, useRef } from "react"
import emailjs from "@emailjs/browser"

import { Container } from "./styles"

import profileImg from "../../assets/profile.svg"
import arrowRightIcon from "../../assets/arrow-right.svg"
import logoGithubIcon from "../../assets/logo-github.svg"
import logoLinkedinIcon from "../../assets/logo-linkedin.svg"
import logoInstagramIcon from "../../assets/logo-instagram.svg"


function FormContact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    emailjs
      .sendForm("service_0utbtuk", "template_ryl44yh", form.current, {
        publicKey: "cMacAY6mylxJ4KLrP",
      })
      .then(() => {
        console.log("Mensagem enviada!")
      },
      (error: any) => {
        console.log("Ocorreu uma falha...", error.text)
      })
      
  }

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
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Nome" required name="user_name"/>
        <input type="email" placeholder="E-mail" required name="user_email"/>
        <textarea cols={30} rows={10} placeholder="Sua mensagem" required name="message"/>
      
        <button type="submit">
          Envie sua mensagem <img src={arrowRightIcon} alt="Seta para a direita" />
        </button>
      </form>
    </Container>
  )
}

export default FormContact