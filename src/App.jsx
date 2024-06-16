
import { useState } from 'react'
import './App.css'

function App() {
  const [color ,setColor] = useState('olive')
return (
<>
  <div className='box'  style={{background: color}}></div>
 <button onClick={()=>{
  setColor('red')
 }}  style={{background: 'red'}}>Red</button>


 <button onClick={()=>{
  setColor('blue')
 }} >Blue</button>

 
 <button onClick={()=>{
  setColor('yellow')
 }} >Yellow</button>
 <button onClick={()=>{
  setColor('pink')
 }} >Pink</button>
 <button onClick={()=>{
  setColor('black')
 }} >Black</button>
</>
  )
}

export default App
