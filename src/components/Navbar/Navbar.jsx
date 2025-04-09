import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 flex flex-wrap items-center justify-between">

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
        >
          Cerrar sesión
        </NavLink>
      </div>
    </nav>
  );
};
