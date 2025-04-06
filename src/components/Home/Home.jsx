import React from 'react';

const Home = () => {
  // Puedes reemplazar estos valores con datos reales más adelante
  const username = 'Usuario'; // O lo que recibas del backend
  const subscribers = 123; // Número de personas suscritas al link

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Bienvenido, {username}!
        </h1>
        <p className="text-gray-600 text-lg">
          Tienes <span className="font-semibold text-blue-600">{subscribers}</span> personas que están suscritas a tu link.
        </p>
      </div>
    </div>
  );
};

export default Home;
