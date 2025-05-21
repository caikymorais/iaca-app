// src/pages/BatedorHome.jsx
import React from "react";

const BatedorHome = () => {
  const pontosColeta = [
    { id: 1, nome: "Ponto 1", endereco: "Rua A, 123" },
    { id: 2, nome: "Ponto 2", endereco: "Av. B, 456" },
  ];

  // Dados fictícios do usuário
  const usuario = {
    nome: "João Silva",
    pontos: 120,
  };

  return (
    <div className="batedor-container">
      {/* Perfil do Usuário */}
      <div className="profile">
        <p>Olá, {usuario.nome}</p>
        <p>Pontos: {usuario.pontos}</p>
      </div>

      {/* Mapa Placeholder */}
      <div className="map-container">Mapa dos Pontos de Coleta</div>

      {/* Lista dos Pontos de Coleta */}
      <div className="pontos-list">
        <h3>Pontos de Coleta Disponíveis</h3>
        <ul>
          {pontosColeta.map((ponto) => (
            <li key={ponto.id}>
              <strong>{ponto.nome}</strong> — {ponto.endereco}
            </li>
          ))}
        </ul>
      </div>

      {/* Botões de Ação */}
      <div className="dashboard-buttons">
        <button
          className="register-button"
          onClick={() => alert("Registrar Descarte - funcionalidade em breve")}
        >
          Registrar Descarte
        </button>

        <button
          className="points-button"
          onClick={() => alert("Pontuações - funcionalidade em breve")}
        >
          Pontuações
        </button>

        <button
          className="history-button"
          onClick={() => alert("Histórico - funcionalidade em breve")}
        >
          Histórico
        </button>
      </div>
    </div>
  );
};

export default BatedorHome;
