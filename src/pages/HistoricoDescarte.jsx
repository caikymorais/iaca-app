import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCalendarAlt, FaMapMarkerAlt, FaWeight } from "react-icons/fa";

const HistoricoDescarte = () => {
  const [descartes] = useState([
    { id: 1, data: "2025-05-10", ponto: "Ponto 1", quantidade: 10 },
    { id: 2, data: "2025-05-12", ponto: "Ponto 3", quantidade: 8 },
    { id: 3, data: "2025-05-13", ponto: "Ponto 2", quantidade: 12 },
    { id: 4, data: "2025-05-14", ponto: "Ponto 1", quantidade: 5 },
    { id: 5, data: "2025-05-15", ponto: "Ponto 4", quantidade: 7 },
  ]);

  const temSeloVerde = descartes.length >= 5;

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        maxWidth: 480,
        margin: "auto",
        backgroundColor: "#fcba04",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ color: "#5f1a37", marginBottom: 20, textAlign: "center" }}>
        Histórico de Descartes
      </h2>

      {temSeloVerde && (
        <div
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            fontWeight: "700",
            borderRadius: 8,
            padding: 15,
            marginBottom: 20,
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: "center",
            fontSize: 16,
            userSelect: "none",
          }}
        >
          <FaCheckCircle size={28} />
          <span>
            Parabéns! Você conquistou o <strong>Selo Verde</strong> por descartes frequentes.
          </span>
        </div>
      )}

      {descartes.map(({ id, data, ponto, quantidade }) => (
        <div
          key={id}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            marginBottom: 12,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            userSelect: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 6,
              color: "#5f1a37",
            }}
          >
            <FaCalendarAlt />
            <span>{data}</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 6,
              color: "#5f1a37",
            }}
          >
            <FaMapMarkerAlt />
            <span>{ponto}</span>
          </div>
          <div
            style={{ display: "flex", gap: 12, alignItems: "center", color: "#5f1a37" }}
          >
            <FaWeight />
            <span>{quantidade} kg</span>
          </div>
        </div>
      ))}

      <Link
        to="/batedor/home"
        style={{
          display: "inline-block",
          marginTop: 30,
          padding: "12px 0",
          width: "100%",
          maxWidth: 480,
          backgroundColor: "#5f1a37", // roxo padrão
          color: "white",
          textAlign: "center",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: "700",
          fontSize: 18,
          userSelect: "none",
          boxShadow: "0 4px 8px rgba(95, 26, 55, 0.5)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4e1f5c")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#5f1a37")}
      >
        ← Voltar para o Dashboard
      </Link>
    </div>
  );
};

export default HistoricoDescarte;
