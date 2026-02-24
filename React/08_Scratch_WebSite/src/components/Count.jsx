import React from 'react'
import { useState } from 'react'

export default function Count() {
    let [incrCounter, setIncrCount] = useState(0)
    let [decCounter, setDecCount] = useState(0)

    const addVal = () => {
        // incrCounter = incrCounter + 1;
        setIncrCount(incrCounter + 1)
    }
    const delVal = () => {
        // decCounter = decCounter - 1;
        setDecCount(decCounter - 1)
    }


  return (
    <div>
        <h1>Press the button to increase the COUNT value</h1>
        <button onClick={addVal}>Increase Count: {incrCounter}</button>
        <br />
        <button onClick={delVal}>Decrease Count: {decCounter}</button>
    </div>
  )
}
