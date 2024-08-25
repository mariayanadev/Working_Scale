import InputCargo from "./assets/components/InputCargo"
import InputNome from "./assets/components/InputNome"

function App() {

  return (
    <div className='flex flex-col gap-3'>
      <InputNome></InputNome>
      <InputCargo></InputCargo>
    </div>
  )
}

export default App