import { Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login/Login.jsx'
import Register from '../components/auth/Register/Register.jsx'
import HomeRoutes from '../components/Home/Routes/HomeRoutes.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'


const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>} />

          <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>} />

        <Route path='/*'
          element={
            <PrivateRoute >
              <HomeRoutes />
            </PrivateRoute>} />

      </Routes>

    </>
  )
}

export default AppRouter