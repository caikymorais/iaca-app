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
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f2f5",
        position: "relative",
      }}
    >
      {/* Perfil do Usuário */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "white",
          padding: "10px 15px",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          zIndex: 10,
          width: 180,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <p>Olá, {usuario.nome}</p>
        <p>Pontos: {usuario.pontos}</p>
      </div>

      {/* Mapa Placeholder */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#ccc",
          margin: 20,
          borderRadius: 16,
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#666",
          fontSize: 18,
          fontWeight: "bold",
          userSelect: "none",
        }}
      >
        {/* Aqui será integrado o mapa (Google Maps, Leaflet, etc) */}
        Mapa dos Pontos de Coleta
      </div>

      {/* Lista dos Pontos de Coleta */}
      <div
        style={{
          maxHeight: 160,
          overflowY: "auto",
          margin: "0 20px 20px",
          backgroundColor: "white",
          borderRadius: 12,
          padding: 15,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Pontos de Coleta Disponíveis</h3>
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
          padding: "10px 0 30px",
          backgroundColor: "white",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <button
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "12px",
            fontSize: 16,
            borderRadius: 10,
            border: "none",
            backgroundColor: "#4caf50",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert("Registrar Descarte - funcionalidade em breve")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4caf50")}
        >
          Registrar Descarte
        </button>

        <button
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "12px",
            fontSize: 16,
            borderRadius: 10,
            border: "none",
            backgroundColor: "#2196f3",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert("Pontuações - funcionalidade em breve")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196f3")}
        >
          Pontuações
        </button>

        <button
          style={{
            flex: 1,
            margin: "0 10px",
            padding: "12px",
            fontSize: 16,
            borderRadius: 10,
            border: "none",
            backgroundColor: "#ff9800",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => alert("Histórico - funcionalidade em breve")}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#fb8c00")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff9800")}
        >
          Histórico
        </button>
      </div>
    </div>
  );
};

export default BatedorHome;
