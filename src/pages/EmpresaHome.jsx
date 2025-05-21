import React from "react";

const EmpresaHome = () => {
  const pontosColeta = [
    { id: 1, nome: "Ponto 1", endereco: "Rua A, 123" },
    { id: 2, nome: "Ponto 2", endereco: "Av. B, 456" },
  ];

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f9",
        position: "relative",
        padding: "10px",
      }}
    >
      {/* Perfil da Empresa */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "white",
          padding: "10px 15px",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 10,
          width: 180,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <p>Olá, Empresa XYZ</p>
      </div>

      {/* Título */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.8em",
          color: "#5f1a37",
          marginTop: "50px",
        }}
      >
        Dashboard da Empresa
      </h1>

      {/* Mapa - Placeholder */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#e1e1e1",
          marginTop: "20px",
          borderRadius: 16,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        Mapa dos Pontos de Coleta
      </div>

      {/* Lista dos Pontos de Coleta */}
      <div
        style={{
          maxHeight: 160,
          overflowY: "auto",
          marginTop: "20px",
          backgroundColor: "white",
          borderRadius: 12,
          padding: 15,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Pontos de Coleta Ativos</h3>
        <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
          {pontosColeta.map((ponto) => (
            <li
              key={ponto.id}
              style={{
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
                fontSize: 16,
              }}
            >
              <strong>{ponto.nome}</strong> — {ponto.endereco}
            </li>
          ))}
        </ul>
      </div>

      {/* Botões de Ação */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 0",
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <button
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4caf50",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert("Agendar Coleta - funcionalidade em breve")}
        >
          Agendar Coleta
        </button>

        <button
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#2196f3",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert("Visualizar Relatórios - funcionalidade em breve")}
        >
          Relatórios
        </button>
      </div>
    </div>
  );
};

export default EmpresaHome;
