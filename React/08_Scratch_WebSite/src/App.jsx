import  {useState, useEffect } from 'react'
import  Home  from './components/Home'
import Count from './components/Count'
import AboutUs from './components/AboutUs'
import Info from './components/Info'

import './App.css'

function App() {
  // const [home, setHome] = useState("Home")
  // const [counter, setCounter] = useState("Counter")
  // const [about, setAbout] = useState("About US")  
  // const [info, setInfo] = useState("Info")
  const [page, setPage] = useState("")


  return (
    <div className='h-screen w-screen bg-center bg-cover bg-no-repeat transition-all duration-500' style={{backgroundColor: "olive"}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => {setPage("home")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Red"}}>Home
          </button>
          
          <button 
          onClick={() => {setPage("counter")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Green"}}>Counter
          </button>
          
          <button 
          onClick={() => {setPage("about")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Blue"}}>About US
          </button>
          
          <button 
          onClick={() => {setPage("info")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Orange"}}>Info
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        {page === "home" && <Home />}
        {page === "counter" && <Count />}
        {page === "about" && <AboutUs />}
        {page === "info" && <Info />}
      </div>
    </div>
    
  )
}
export default App
