import Head from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Head />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
