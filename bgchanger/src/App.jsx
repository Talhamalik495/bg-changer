import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Btn from './component/Btn'
function App() {
 const [bgColor,setBgColor ] = useState("black")
 

  return (
    <>
      <div className='maincontainer' style={{backgroundColor:bgColor}}>

        <div className='buttoncontainer'>
         
          <button onClick={()=>{
            setBgColor("red")
          }} style={{backgroundColor:"red",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}>Red</button>
          <button onClick={()=>{
            setBgColor("green")
          }}    
          style={{backgroundColor:"green",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}
          >Green</button>
          <button onClick={()=>{
            setBgColor("blue")
          }}
          style={{backgroundColor:"blue",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}
          >Blue</button>
          <button onClick={()=>{
            setBgColor("orange")
          }} style={{backgroundColor:"orange",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}>Orange</button>
          <button onClick={()=>{
            setBgColor("olive")
          }} style={{backgroundColor:"olive",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}>Olive</button>
          <button onClick={()=>{
            setBgColor("yellow")
          }}
          style={{backgroundColor:"yellow",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}>Yellow</button>
          <button
          onClick={()=>{
            setBgColor("purple")
          }}
          style={{backgroundColor:"purple",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px",color:"white"}}>Purple</button>
          <button
          onClick={()=>{
            setBgColor("brown")
          }}
          style={{backgroundColor:"brown",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px" ,color:"white"}}>Brown</button>
          <button
           onClick={()=>{
            setBgColor("aqua")
            
          }} style={{backgroundColor:"aqua",width:"110px", height:"30px",cursor:"pointer", borderColor:"transparent",borderRadius:"50px", color:"white"}}>Aqua</button>
        </div>
      </div>
    </>
  )
}

export default App
