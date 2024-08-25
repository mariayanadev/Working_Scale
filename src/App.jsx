import InputCargo from "./assets/components/InputCargo"
import InputNome from "./assets/components/InputNome"
import InputContato from "./assets/components/InputContato"

function App() {

  return (
    <div className='flex flex-col gap-3'>
      <InputNome></InputNome>
      <InputCargo></InputCargo>
      <InputContato></InputContato>
    </div>
  )
}

export default App