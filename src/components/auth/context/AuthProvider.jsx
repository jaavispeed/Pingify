import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"
import { API_ROUTES } from "../services/authApi"

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')) ;
  return {
    logged: !!user,
    user: user,
  }
}

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)

  const login = async (email, password) => {
    try {
      const res = await fetch(API_ROUTES.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
  
      if (data.token) {
        const user = { id: data.id, email: data.email, username: data.username }; 
        const token = data.token;
        localStorage.setItem('user', JSON.stringify(user)); 
        localStorage.setItem('token', JSON.stringify(token)); 
  
        const action = { type: types.login, payload: user };
        dispatch(action);
      } else {
        throw new Error(data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
      throw error;
    }
  }
  
  const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    const action = {type: types.logout}
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider