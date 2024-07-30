import { useState } from 'react'
import './App.css'
import RollDice from './components/RollDice'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <RollDice/>
      </div>
    </>
  )
}

export default App
