//get the hook (function) that establishes the state
import { useState } from 'react'
import './App.css'

function App() {
  const [days, //current value of the state
     setDays //a function used to change the state
    ] = useState(66) 

    console.log('App function ran!!')

  return (
    <>
      <h1>Birthday Party Counter</h1>
      <div className='card'>
        {/* message */}
      <div>Number of days left for the birthday party are :</div>
      <h3>{days}</h3>
      {/* button that counts down */}
        <button onClick={() => setDays((d) => d - 1)}>
         click to count down  {days}
        </button>
        

        </div>
    </>
  )
}

export default App
