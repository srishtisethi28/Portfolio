import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Contact from './Routes/Contact'
import Projects from './Routes/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='about' element ={<About/>}/>
        <Route path='contact' element ={<Contact/>}/>
        <Route path='projects' element ={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
