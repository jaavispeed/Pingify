import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login/Login.jsx'
import Register from '../components/auth/Register/Register.jsx'
import Home from '../components/Home/Home.jsx'
import { Navbar } from '../components/Navbar/Navbar.jsx'
import SendEmails from '../components/SendEmails/SendEmails.jsx'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="Emails" element={<SendEmails/>}/>

        <Route path="/" element={<Navigate to="/login"/>}/>
    </Routes>
    
    </>
  )
}

export default AppRouter