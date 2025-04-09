import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


const initialState = {
    logged: false,
}


const AuthProvider = ({children}) => {

   const [authState, dispatch] = useReducer( authReducer, initialState )


  return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider