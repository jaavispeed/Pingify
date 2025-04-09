import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const Navbar = () => {

  const navigate = useNavigate()

  const {user, logout} = useContext(AuthContext)

  const onLogout = () =>{
    logout();
    navigate('/login',{
      replace: true
    })
  }

  return (
    <nav className="bg-black shadow-lg text-white px-4 py-3 flex flex-wrap items-center justify-between">
      <Link
        className="text-xl font-semibold"
        to="/"
      >
        Pingify
      </Link>

      <div className="flex gap-4">
        <NavLink
          className="hover:text-gray-300 transition"
          to="/home"
        >
          Inicio
        </NavLink>

        <NavLink
          className="hover:text-gray-300 transition"
          to="/emails"
        >
          Enviar correos
        </NavLink>
      </div>

      <div>
        <NavLink
          className="hover:text-gray-300 transition"
          to="/login"
          onClick={onLogout}
        >
          Cerrar sesión
        </NavLink>
      </div>
    </nav>
  );
};
