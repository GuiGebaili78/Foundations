"use client";
import React, { useState } from "react";

function ClientesCadastro() {
  const [activeTab, setActiveTab] = useState("individual"); // 'individual' or 'corporate'

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Cadastro de Cliente
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-3 rounded-l-lg text-lg font-medium transition-colors duration-300 ${
              activeTab === "individual"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleTabChange("individual")}
          >
            Pessoa Física
          </button>
          <button
            className={`px-6 py-3 rounded-r-lg text-lg font-medium transition-colors duration-300 ${
              activeTab === "corporate"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleTabChange("corporate")}
          >
            Pessoa Jurídica
          </button>
        </div>

        {/* Individual Client Form */}
        {activeTab === "individual" && (
          <form className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Dados Pessoais
            </h2>
            <div>
              <label
                htmlFor="nomeIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="nomeIndividual"
                name="nomeIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome completo do cliente"
              />
            </div>

            <div>
              <label
                htmlFor="cpfIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CPF
              </label>
              <input
                type="text"
                id="cpfIndividual"
                name="cpfIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 123.456.789-00"
              />
            </div>

            <div>
              <label
                htmlFor="idadeIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Idade
              </label>
              <input
                type="number"
                id="idadeIndividual"
                name="idadeIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Idade do cliente"
              />
            </div>

            <div>
              <label
                htmlFor="emailIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="emailIndividual"
                name="emailIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="telefoneIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefoneIndividual"
                name="telefoneIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: (DD) 99999-9999"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Endereço
            </h2>
            <div>
              <label
                htmlFor="logradouroIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Logradouro (Rua, Avenida, etc.)
              </label>
              <input
                type="text"
                id="logradouroIndividual"
                name="logradouroIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Rua das Flores"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="numeroIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Número
                </label>
                <input
                  type="text"
                  id="numeroIndividual"
                  name="numeroIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 123"
                />
              </div>
              <div>
                <label
                  htmlFor="complementoIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Complemento
                </label>
                <input
                  type="text"
                  id="complementoIndividual"
                  name="complementoIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Apto 401"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bairroIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bairro
              </label>
              <input
                type="text"
                id="bairroIndividual"
                name="bairroIndividual"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Centro"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="cidadeIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidadeIndividual"
                  name="cidadeIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: São Paulo"
                />
              </div>
              <div>
                <label
                  htmlFor="ufIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  UF
                </label>
                <input
                  type="text"
                  id="ufIndividual"
                  name="ufIndividual"
                  maxLength="2"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: SP"
                />
              </div>
              <div>
                <label
                  htmlFor="cepIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CEP
                </label>
                <input
                  type="text"
                  id="cepIndividual"
                  name="cepIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 00000-000"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Informações Adicionais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="horaEntradaIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Horário de Entrada
                </label>
                <input
                  type="time"
                  id="horaEntradaIndividual"
                  name="horaEntradaIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="dataIndividual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Data de Cadastro
                </label>
                <input
                  type="date"
                  id="dataIndividual"
                  name="dataIndividual"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="valorIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Valor (se aplicável)
              </label>
              <input
                type="number"
                id="valorIndividual"
                name="valorIndividual"
                step="0.01"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 150.00"
              />
            </div>
            <div>
              <label
                htmlFor="observacoesIndividual"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Observações
              </label>
              <textarea
                id="observacoesIndividual"
                name="observacoesIndividual"
                rows="4"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Informações adicionais sobre o cliente..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-md"
            >
              Cadastrar Cliente Pessoa Física
            </button>
          </form>
        )}

        {/* Corporate Client Form */}
        {activeTab === "corporate" && (
          <form className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Dados da Empresa
            </h2>
            <div>
              <label
                htmlFor="razaoSocial"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Razão Social
              </label>
              <input
                type="text"
                id="razaoSocial"
                name="razaoSocial"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome completo da empresa"
              />
            </div>
            <div>
              <label
                htmlFor="nomeFantasia"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome Fantasia
              </label>
              <input
                type="text"
                id="nomeFantasia"
                name="nomeFantasia"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome comercial da empresa"
              />
            </div>
            <div>
              <label
                htmlFor="cnpj"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 00.000.000/0001-00"
              />
            </div>
            <div>
              <label
                htmlFor="ie"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Inscrição Estadual (IE)
              </label>
              <input
                type="text"
                id="ie"
                name="ie"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Preencha se aplicável"
              />
            </div>
            <div>
              <label
                htmlFor="emailEmpresa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email da Empresa
              </label>
              <input
                type="email"
                id="emailEmpresa"
                name="emailEmpresa"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="contato@empresa.com"
              />
            </div>
            <div>
              <label
                htmlFor="telefoneEmpresa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone da Empresa
              </label>
              <input
                type="tel"
                id="telefoneEmpresa"
                name="telefoneEmpresa"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: (DD) 9999-9999"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Endereço da Empresa
            </h2>
            <div>
              <label
                htmlFor="logradouroEmpresa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Logradouro (Rua, Avenida, etc.)
              </label>
              <input
                type="text"
                id="logradouroEmpresa"
                name="logradouroEmpresa"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Avenida Principal"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="numeroEmpresa"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Número
                </label>
                <input
                  type="text"
                  id="numeroEmpresa"
                  name="numeroEmpresa"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 456"
                />
              </div>
              <div>
                <label
                  htmlFor="complementoEmpresa"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Complemento
                </label>
                <input
                  type="text"
                  id="complementoEmpresa"
                  name="complementoEmpresa"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Sala 10"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="bairroEmpresa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bairro
              </label>
              <input
                type="text"
                id="bairroEmpresa"
                name="bairroEmpresa"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Industrial"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="cidadeEmpresa"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  id="cidadeEmpresa"
                  name="cidadeEmpresa"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: Rio de Janeiro"
                />
              </div>
              <div>
                <label
                  htmlFor="ufEmpresa"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  UF
                </label>
                <input
                  type="text"
                  id="ufEmpresa"
                  name="ufEmpresa"
                  maxLength="2"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: RJ"
                />
              </div>
              <div>
                <label
                  htmlFor="cepEmpresa"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  CEP
                </label>
                <input
                  type="text"
                  id="cepEmpresa"
                  name="cepEmpresa"
                  className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ex: 00000-000"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Contato da Empresa
            </h2>
            <div>
              <label
                htmlFor="contatoNome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome do Contato
              </label>
              <input
                type="text"
                id="contatoNome"
                name="contatoNome"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome da pessoa de contato na empresa"
              />
            </div>
            <div>
              <label
                htmlFor="contatoEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email do Contato
              </label>
              <input
                type="email"
                id="contatoEmail"
                name="contatoEmail"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="email.contato@empresa.com"
              />
            </div>
            <div>
              <label
                htmlFor="contatoTelefone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone do Contato
              </label>
              <input
                type="tel"
                id="contatoTelefone"
                name="contatoTelefone"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: (DD) 99999-9999"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              Informações Adicionais
            </h2>
            <div>
              <label
                htmlFor="observacoesEmpresa"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Observações
              </label>
              <textarea
                id="observacoesEmpresa"
                name="observacoesEmpresa"
                rows="4"
                className="mt-1 block w-full border rounded-lg p-2.5 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Informações adicionais sobre a empresa..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold shadow-md"
            >
              Cadastrar Cliente Pessoa Jurídica
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ClientesCadastro;
