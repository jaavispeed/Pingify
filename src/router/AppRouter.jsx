import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login/Login.jsx'
import Register from '../components/auth/Register/Register.jsx'
import Home from '../components/Home/Home.jsx'

const AppRouter = () => {
  return (
    <>
    
    <Routes>

        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>

        <Route path="/" element={<Navigate to="/login"/>}/>

    </Routes>
    
    </>
  )
}

export default AppRouter