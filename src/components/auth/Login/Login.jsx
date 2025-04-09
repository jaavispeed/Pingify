import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);


  const handleEmailChange = (e) => setEmail(e.target.value);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const handlePasswordChange = (e) => setPassword(e.target.value);

  useEffect(() => {
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6;
    setIsValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/', { replace: true });
    } catch (error) {
      toast.error(error.message || 'Error al iniciar sesión');
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 font-bold text-4xl text-center">
        Pingify
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Iniciar Sesión</h2>
        <form onSubmit={onLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="tucorreo@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {!emailRegex.test(email) && email && (
              <p className="text-red-500 text-sm mt-1">Formato de email no válido</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {password && password.length < 6 && (
              <p className="text-red-500 text-sm mt-1">La contraseña debe tener al menos 6 caracteres</p>
            )}

          </div>

          <button
            type="submit"
            className={`w-full ${isValid ? 'bg-black hover:bg-gray-800 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'} text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
            disabled={!isValid}
          >
            Ingresar
          </button>

          <p className='font-semibold text-sm'>¿No tienes cuenta? <Link to='/register' className='text-blue-700 font-bold'>Regístrate</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
