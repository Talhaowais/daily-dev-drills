import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [img, setImg] = useState("url(https://images.pexels.com/photos/36027809/pexels-photo-36027809.jpeg)")
  return (
    <div className='h-screen w-screen bg-center bg-cover bg-no-repeat transition-all duration-500' style={{backgroundImage: img}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => {setImg("url(https://images.pexels.com/photos/34710886/pexels-photo-34710886.jpeg)")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Red"}}>Flower
          </button>
          
          <button 
          onClick={() => {setImg("url(https://images.pexels.com/photos/35715509/pexels-photo-35715509.jpeg)")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Green"}}>Gallery
          </button>
          
          <button 
          onClick={() => {setImg("url(https://images.pexels.com/photos/35846889/pexels-photo-35846889.jpeg)")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Blue"}}>Mountain
          </button>
          
          <button 
          onClick={() => {setImg("url(https://images.pexels.com/photos/36069169/pexels-photo-36069169.jpeg)")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Orange"}}>See
          </button>
          
          <button 
          onClick={() => {setImg("url(https://images.pexels.com/photos/15524988/pexels-photo-15524988.jpeg)")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl cursor-pointer' style={{backgroundColor: "Olive"}}>Evening
          </button>
          
        </div>
      </div>
    </div>
    
  )
}
export default App
