import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setlength] = useState(8)
  const[numAllow, setNumAllow] = useState(false)
  const[charAllow, setCharAllow] = useState(false)
  const[password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzs"

  }, [length,numAllow, charAllow, setPassword])

  return (
    <>
     <h1 className='text-4xl text-center mt-10'>Password Generator</h1>
    </>
  )
}

export default App
