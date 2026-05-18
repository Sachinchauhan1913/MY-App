import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)


  const addValue=()=>{
 setCounter(counter+1)
 
  }



  const removeValue=()=>{
    setCounter(counter-1)
  }



  return (
    <>
      <h1> chai or code </h1>
      <h2> Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
