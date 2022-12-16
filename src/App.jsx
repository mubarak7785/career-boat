import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Route, Routes } from "react-router-dom";
import { Home } from './components/home';
import { Next } from './components/next';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home/>}/> 
        <Route path='/next' element={<Next/>}/>
      </Routes>
    </div>
  )
}

export default App
