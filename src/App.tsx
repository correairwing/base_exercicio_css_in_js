import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal>
        <Container>
          <Header />
          <Hero />
          <div className="container">
            <ListaVagas />
          </div>
        </Container>
      </EstiloGlobal>
    </>
  )
}

export default App
