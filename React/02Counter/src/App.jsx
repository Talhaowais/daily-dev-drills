import React from "react";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(15)
  let [incrCounter, setIncrCount] = useState(15)
  let [decCounter, setDecCount] = useState(15)

  let [message, setmessage] = useState("")
  
  console.log("Message: ",message, "Set Message: ",setmessage);
  
  const addVal = () => {
    console.log("Clicked", counter);
    // counter = counter + 1;
    setDecCount(15)
    setcounter(counter + 1)
    setIncrCount(counter + 1)
    if (counter >= 20) {
      console.log("The value reaches 20 so again reset to 15");
      const element = React.createElement("h3", null, "The value reaches 20 so again reset to 15")
      setmessage("Value reaches to 20 → reset again to 15")
      setcounter(15)
    }
  }
  const delVal = () => {
    console.log("Clicked", counter);
    // counter = counter - 1;
    setIncrCount(15)
    setcounter(counter - 1)
    setDecCount(counter - 1)
    if (counter <= 0) {
      console.log("The value reaches zero so again reset to 15");
      const element = React.createElement("h3", null, "The value reaches zero so again reset to 15")
      setmessage("Value reaches to 0 → reset again to 15")
      setcounter(15)
    }
  }

  return (
    <>
      <h1>This is a Counter project</h1>
      <h3>Count Is: {counter}</h3>
      <button onClick={addVal}>Increase Count: {incrCounter}</button>
      <h3>{message}</h3>
      <br />
      <button onClick={delVal}>Decrease Count: {decCounter}</button>
      <h3>{message}</h3>
      
    </>
  )
}

export default App
