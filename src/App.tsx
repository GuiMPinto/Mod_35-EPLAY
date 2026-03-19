import { GlobalCss, Container } from './styles'

// Componentes
import Header from './components/Header'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
