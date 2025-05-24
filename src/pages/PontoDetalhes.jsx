import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const pontosColeta = [
  { id: 1, nome: "Ponto 1", endereco: "Rua A, 123", disponibilidade: "Alta" },
  { id: 2, nome: "Ponto 2", endereco: "Av. B, 456", disponibilidade: "Média" },
  { id: 3, nome: "Ponto 3", endereco: "Rua C, 789", disponibilidade: "Baixa" },
];

const PontoDetalhes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const ponto = pontosColeta.find((p) => p.id === Number(id));

  if (!ponto) return <p>Ponto de coleta não encontrado.</p>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>{ponto.nome}</h2>
      <p><strong>Endereço:</strong> {ponto.endereco}</p>
      <p><strong>Disponibilidade:</strong> {ponto.disponibilidade}</p>

      {/* Placeholder para mapa mini */}
      <div
        style={{
          marginTop: 20,
          height: 200,
          backgroundColor: "#ccc",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#666",
          fontWeight: "bold",
          borderRadius: 12,
        }}
      >
        Mapa do Ponto (a implementar)
      </div>

      <button
        style={{
          marginTop: 30,
          padding: "12px 20px",
          backgroundColor: "#5f1a37",
          color: "white",
          border: "none",
          borderRadius: 10,
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: 16,
        }}
        onClick={() => navigate(`/batedor/registro-descarte/${ponto.id}`)}
      >
        Registrar Descarte
      </button>

      <button
        style={{
          marginTop: 20,
          background: "none",
          border: "none",
          color: "#5f1a37",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => navigate("/batedor/home")}
      >
        ← Voltar ao Dashboard
      </button>
    </div>
  );
};

export default PontoDetalhes;
