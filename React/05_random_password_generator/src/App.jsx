import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setlength] = useState(8)
  const[numAllow, setNumAllow] = useState(false)
  const[charAllow, setCharAllow] = useState(false)
  const[password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*()_+-={}[]|\:;<>,.?/~`"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length,numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])
  return (
    <>
     <h1 className='text-4xl text-center mt-10'>Generate Your Password</h1>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center">
        Password generator
      </h1>
      <div className=" bg-white flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className=" text-black outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy
        </button>
        </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input 
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
              ></input>
              <label>Length: {length}</label>
            </div>

          <div className="flex items-center gap-x-1">
              <input 
              type='checkbox'
              className='cursor-pointer'
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
              ></input>
              <label htmlFor='numberInput'>Numbers</label>
            </div>   

            <div className="flex items-center gap-x-1">
              <input 
              type='checkbox'
              className='cursor-pointer'
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
              ></input>
              <label htmlFor='charInput'>Characters</label>
            </div>        

          </div>
      </div>
    </>
  )
}

export default App
