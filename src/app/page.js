import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Cadastro de Cliente - Centro Automotivo
        </h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Endereço</label>
            <input
              type="text"
              name="endereco"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Idade</label>
            <input
              type="number"
              name="idade"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Horário de Entrada</label>
            <input
              type="time"
              name="horaEntrada"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Data</label>
            <input
              type="date"
              name="data"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Valor</label>
            <input
              type="number"
              name="valor"
              step="0.01"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Telefone</label>
            <input
              type="tel"
              name="telefone"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Observações</label>
            <textarea
              name="observacoes"
              rows="3"
              className="mt-1 block w-full border rounded-lg p-2 border-gray-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
