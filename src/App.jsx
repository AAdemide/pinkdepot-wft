import { useState } from 'react'
import './App.css'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Tester from "./pages/Tester"
import ToggleMenu from './components/ToggleMenu'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  //localStorage lets you save stuff from front end
  const getTheme = localStorage.getItem("mode")
  const [theme, setTheme] = getTheme==null ? useState("") : useState(getTheme)
 
  const themeCallback = (mode) => {
    
    setTheme(mode)
    localStorage.setItem("mode", mode)
    console.log(mode)
  }
  console.log(`theme: ${theme}`)
  return (
    <div className={`size-full ${theme}`}>
      <div className="bg-neutral-100 dark:bg-[#201d1d] size-full">
          <BrowserRouter>     
            <Routes>
              <Route path="/" element={
                <ToggleMenu themeChange={themeCallback}>
                  <Dashboard/>
                </ToggleMenu>
              
              }/>
              <Route path="/tester" element={
              <ToggleMenu themeChange={themeCallback}>
                <Tester/>
              </ToggleMenu>}/>
              <Route path="/login" element={<Login/>}/> 
            </Routes>
          </BrowserRouter>
      </div>
     
    </div>
  )
}

export default App
