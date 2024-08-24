import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './assets/components/Button'
import SearchBar from './assets/components/SearchBar'

function App() {

  return (
    <div className='flex flex-row gap-3'>
      <Button></Button>
      <SearchBar></SearchBar>
    </div>
  )
}

export default App