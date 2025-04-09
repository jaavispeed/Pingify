import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const subscribers = 123; // Número de personas suscritas al link

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Bienvenido, {user.username}!
        </h1>
        <p className="text-gray-600 text-lg">
          Tienes <span className="font-semibold text-blue-600">{subscribers}</span> personas que están suscritas a tu link.
        </p>
      </div>
    </div>
  );
};

export default Home;
