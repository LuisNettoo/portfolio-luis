import styled from "styled-components"
import About from "./components/About"
import Header from "./components/Header"
import { GlobalStyles } from "./styles/global"

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
      </MainContainer>
      <GlobalStyles />
    </>
  )
}

export default App
