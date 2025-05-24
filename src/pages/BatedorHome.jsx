import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./BatedorHome.css";

const BatedorHome = () => {
  const navigate = useNavigate();

  const pontosColeta = [
    { id: 1, nome: "Ponto 1", endereco: "Rua A, 123" },
    { id: 2, nome: "Ponto 2", endereco: "Av. B, 456" },
    { id: 3, nome: "Ponto 3", endereco: "Rua C, 789" },
  ];

  const usuario = {
    nome: "João Silva",
    pontos: 120,
  };

  return (
    <div className="batedor-container">
      {/* Caixinha sobre o mapa */}
      <div className="user-info">
        <FaUserCircle size={50} color="#5f1a37" style={{ marginBottom: 8 }} />
        <p className="user-name">{usuario.nome}</p>
        <p className="user-points">{usuario.pontos} pontos</p>
      </div>

      {/* Mapa ocupa toda a tela */}
      <div className="map-container">Mapa dos Pontos de Coleta</div>

      {/* Rodapé com botões */}
      <div className="footer-buttons">
        <button className="btn-roxo">Registrar Descarte</button>
        <button className="btn-roxo">Pontuações</button>
        <button className="btn-roxo">Histórico</button>
      </div>

      {/* Lista de Pontos de Coleta clicáveis */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 12,
          padding: 12,
          maxHeight: 180,
          overflowY: "auto",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          width: 220,
          fontWeight: "600",
          color: "#5f1a37",
          zIndex: 15,
        }}
      >
        <h4 style={{ marginTop: 0, marginBottom: 8 }}>Pontos de Coleta</h4>
        <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
          {pontosColeta.map((ponto) => (
            <li
              key={ponto.id}
              onClick={() => navigate(`/batedor/ponto/${ponto.id}`)}
              style={{
                padding: "8px 6px",
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
                userSelect: "none",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0d34f")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              {ponto.nome} — {ponto.endereco}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BatedorHome;
