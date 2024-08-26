import './index.css'
import { Heading } from '../src/components/Heading/index'
import { Footer } from '../src/components/Footer/index'
import { Pagina } from './components/Pagina'
import { TelaCadastro } from './components/TelaCadastro'


function App() {

  return (
    <>
    {/* absolute screen */}
    <TelaCadastro/>

    <Heading/>
    <Pagina/>
    <Footer/>
    </>
  )
}

export default App