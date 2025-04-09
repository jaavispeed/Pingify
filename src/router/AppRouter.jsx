import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login/Login.jsx'
import Register from '../components/auth/Register/Register.jsx'
import HomeRoutes from '../components/Home/Routes/HomeRoutes.jsx'


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<HomeRoutes/>} />
      </Routes>

    </>
  )
}

export default AppRouter