import AuthProvider from "./components/auth/context/AuthProvider.jsx"
import AppRouter from "./router/AppRouter.jsx"

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
