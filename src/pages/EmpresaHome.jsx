import React from "react";

const EmpresaHome = () => {
  const pontosColeta = [
    { id: 1, nome: "Ponto 1", endereco: "Rua A, 123" },
    { id: 2, nome: "Ponto 2", endereco: "Av. B, 456" },
  ];

  return (
    <div>
      <h1>Home da Empresa</h1>
      <h2>Pontos de Coleta Ativos</h2>
      <ul>
        {pontosColeta.map((ponto) => (
          <li key={ponto.id}>
            {ponto.nome} - {ponto.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresaHome;
