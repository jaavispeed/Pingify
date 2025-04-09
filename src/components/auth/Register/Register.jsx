import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ToastContainer } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate()

  const { register } = useContext(AuthContext);  // Consumir la función de register
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValid, setIsValid] = useState(false);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);


  useEffect(() => {
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 6
    const isUsername = username.length >= 2;
    setIsValid(isEmailValid && isPasswordValid && isUsername);
  }, [email, password]);

  const onRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      navigate('/login', { replace: true })
    } catch (error) {
      console.error('Error al registrar:', error);
      toast.error(error.message || 'Error al registrarse');

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 font-bold text-4xl text-center">
        Pingify
      </div>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Crear Cuenta</h2>

        <form onSubmit={onRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              Usuario
            </label>
            <input
              id="name"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Nombre de usuario"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {username && username.length < 2 && (
              <p className="text-red-500 text-sm mt-1">El nombre de usuario debe tener un mínimo de 2 caracteres.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="tucorreo@ejemplo.com"
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
              placeholder="Crea una contraseña"
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
            Registrarse
          </button>
          <p className='font-semibold text-sm'>¿Ya tienes cuenta? <Link to='/login' className='text-blue-700 font-bold'>Ingresa aquí</Link></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
