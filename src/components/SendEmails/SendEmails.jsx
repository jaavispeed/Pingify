import React from 'react';

const SendEmails = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Enviar Correo</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="subject">
              Asunto
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Asunto del correo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Escribe tu mensaje aquí..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendEmails;
