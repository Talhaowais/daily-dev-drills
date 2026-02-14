import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards'

function App() {
  return (
    <>
      
    <h1 className='bg-green-500 text-black p-5 rounded-2xl'>Vite project using a Tailwind CSS</h1>
    <button className='text-pink-800 px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800'>Submit 1</button>
    <button className='bg-sky-700 px-4 py-2 text-black hover:bg-sky-800 sm:px-8 sm:py-3'>Submit 2</button>

    <Card username="Talha" btnText="The First Card"/>
    <br/>
    <Card username="Butt Shab" btnText="The Second Card"/>

    
  
    </>
  )
}

export default App
