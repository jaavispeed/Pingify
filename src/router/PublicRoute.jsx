import { useContext } from 'react'
import { AuthContext } from '../components/auth/context/AuthContext'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)

    return !logged ? children : <Navigate to='/home' />
}

export default PublicRoute