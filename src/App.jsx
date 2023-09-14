import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp"
import LoginPage from './pages/Login'
import Home from './pages/Home';


function App() {
  

  return (
    <>
<Routes>   
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      </Routes>
  
    </>
  )
}

export default App
