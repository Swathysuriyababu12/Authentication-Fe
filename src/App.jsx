import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp"
import LoginPage from './pages/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
      
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
      </Routes>

    
    </>
  )
}

export default App
