import { FormEventHandler, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "./styles";
import profileImg from "../../assets/profile.svg";
import arrowRightIcon from "../../assets/arrow-right.svg";
import logoGithubIcon from "../../assets/logo-github.svg";
import logoLinkedinIcon from "../../assets/logo-linkedin.svg";
import logoInstagramIcon from "../../assets/logo-instagram.svg";

function FormContact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const form = useRef(null)

  const sendEmail = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if form.current is not null before using it
    if (form.current) {
      emailjs
        .sendForm("service_0utbtuk", "template_ryl44yh", form.current, {
          publicKey: "cMacAY6mylxJ4KLrP",
        })
        .then(
          () => {
            console.log("Mensagem enviada!");
          },
          (error) => {
            console.log("Ocorreu uma falha...", error.text);
          }
        );

        setName("")
        setEmail("")
        setMessage("")

        
    } else {
      console.log("Form reference is null");
    }
  };

  return (
    <Container>
      <section>
        <img src={profileImg} alt="" />
        <h3>Contato</h3>
        <h2>Gostou do meu trabalho? Vamos trabalhar juntos</h2>
        <p>
          Eu estou sempre disposto no chat. Mande um email para
          lmss.neto@discente.ufma.br ou fale comigo por alguma rede social.
        </p>
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
        <input 
          type="text" 
          placeholder="Nome" 
          required 
          name="user_name" 
          value={name}
          onChange={e => setName(e.target.value)}  
        />
        <input 
          type="email" 
          placeholder="E-mail" 
          required 
          name="user_email"
          value={email}
          onChange={e => setEmail(e.target.value)}   
        />
        <textarea
          cols={30}
          rows={10}
          placeholder="Sua mensagem"
          required
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">
          Envie sua mensagem <img src={arrowRightIcon} alt="Seta para a direita" />
        </button>
      </form>
    </Container>
  );
}

export default FormContact;
