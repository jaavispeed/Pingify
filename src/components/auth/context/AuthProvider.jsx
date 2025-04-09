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

  const login = (email, password) => {
    fetch(API_ROUTES.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then(data => {
      if(data.token){
        const user = { id: data.id, email: data.email, username: data.username}; // Guardamos los datos que necesitemos
        const token = data.token;
        localStorage.setItem('user', JSON.stringify(user)); // Guardamos el usuario en localStorage
        localStorage.setItem('token', JSON.stringify(token)); // Guardamos el usuario en localStorage

        const action = { type: types.login, payload: user }
        dispatch(action)
      }else{
        console.error('Error al iniciar sesión:', data.message);
      }
    })
    
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