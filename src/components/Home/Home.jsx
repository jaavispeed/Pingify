import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  const subscribers = 123; // Número de personas suscritas al link
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


  return (
    <div className="h-[calc(100vh-64px)] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Hola, {capitalize(user.username)}
      </h1>
      <p className="text-lg text-gray-600 mb-2">Tienes</p>
      <div className="text-6xl font-extrabold text-blue-600 mb-2">
        {subscribers}
      </div>
      <p className="text-lg text-gray-600">personas suscritas a tu link</p>
    </div>
  );
};

export default Home;
