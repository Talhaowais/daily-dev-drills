import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => {setcolor("red")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "red"}}>Red</button>
          
          <button 
          onClick={() => {setcolor("Green")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Green"}}>Green
          </button>
          
          <button 
          onClick={() => {setcolor("Blue")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Blue"}}>Blue
          </button>
          
          <button 
          onClick={() => {setcolor("Olive")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Olive"}}>Olive
          </button>
          
          <button 
          onClick={() => {setcolor("Yellow")}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' style={{backgroundColor: "Yellow"}}>Yellow
          </button>
          
          <button 
          onClick={() => {setcolor("Pink")}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' style={{backgroundColor: "Pink"}}>Pink
          </button>
          
          <button 
          onClick={() => {setcolor("Purple")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Purple"}}>Purple
          </button>
          
          <button 
          onClick={() => {setcolor("White")}}
          className='outline-none px-4 py-1 rounded-full text-black shadow-2xl' style={{backgroundColor: "White"}}>White
          </button>
          
          <button 
          onClick={() => {setcolor("Black")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Black"}}>Black
          </button>
          
          <button 
          onClick={() => {setcolor("Orange")}}
          className='outline-none px-4 py-1 rounded-full text-white shadow-2xl' style={{backgroundColor: "Orange"}}>Orange
          </button>
        </div>
      </div>
    </div>
    
  )
}
export default App
