import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [myVar, setMyVar] = useState(1)


useEffect(function(){
  console.log(Date.now() + ' : Effect was run')
}, [myVar])

let changeMyVar = () => {
  //state can be replaced not changed. can only replace the whole thing
  let copyOfMyVar = myVar
  //editing the copy
  copyOfMyVar++
  //replacing it
  setMyVar (copyOfMyVar)
  console.log('is running', myVar)

}


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={()=>changeMyVar()}>
           {myVar}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
