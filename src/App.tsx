import styled from "styled-components"
import About from "./components/About"
import Header from "./components/Header"
import { GlobalStyles } from "./styles/global"
import Projects from "./components/Projects"
import FormContact from "./components/FormContact"

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <About />
        <Projects />
        <FormContact />
      </MainContainer>
      <GlobalStyles />
    </>
  )
}

export default App
