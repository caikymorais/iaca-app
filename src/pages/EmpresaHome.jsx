import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./EmpresaHome.css";

const EmpresaHome = () => {
  const pontosColeta = [
    { id: 1, nome: "Ponto 1", endereco: "Rua A, 123" },
    { id: 2, nome: "Ponto 2", endereco: "Av. B, 456" },
  ];

  const usuario = {
    nome: "Empresa XYZ",
    contato: "(91) 99999-9999",
  };

  return (
    <div className="empresa-container">
      {/* Perfil da empresa */}
      <div className="user-info">
        <FaUserCircle size={50} color="#5f1a37" style={{ marginBottom: 8 }} />
        <p className="user-name">{usuario.nome}</p>
        <p className="user-contato">{usuario.contato}</p>
      </div>

      {/* Mapa placeholder */}
      <div className="map-container">Mapa dos Pontos de Coleta</div>

      {/* Lista de pontos */}
      <div className="pontos-list">
        <h3>Pontos de Coleta Ativos</h3>
        <ul>
          {pontosColeta.map((ponto) => (
            <li key={ponto.id}>
              <strong>{ponto.nome}</strong> — {ponto.endereco}
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé com botões */}
      <div className="footer-buttons">
        <button
          onClick={() => alert("Solicitar Retirada - funcionalidade em breve")}
          onTouchStart={(e) => (e.target.style.backgroundColor = "#4e1f5c")}
          onTouchEnd={(e) => (e.target.style.backgroundColor = "#5f1a37")}
        >
          Solicitar Retirada
        </button>
        <button
          onClick={() => alert("Relatórios - funcionalidade em breve")}
          onTouchStart={(e) => (e.target.style.backgroundColor = "#4e1f5c")}
          onTouchEnd={(e) => (e.target.style.backgroundColor = "#5f1a37")}
        >
          Relatórios
        </button>
      </div>
    </div>
  );
};

export default EmpresaHome;
