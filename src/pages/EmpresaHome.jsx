import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./EmpresaHome.css";
import { getPontosColeta } from "../api/api";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -1.455, // Posição padrão (Belém)
  lng: -48.503,
};

const EmpresaHome = () => {
  const [pontosColeta, setPontosColeta] = useState([]);
  const usuario = {
    nome: "Empresa XYZ",
    contato: "(91) 99999-9999",
  };

  useEffect(() => {
    const buscarPontos = async () => {
      try {
        const data = await getPontosColeta();
        setPontosColeta(data);
      } catch (error) {
        console.error("Erro ao buscar pontos:", error);
      }
    };
    buscarPontos();
  }, []);

  const center = pontosColeta.length
    ? { lat: pontosColeta[0].lat, lng: pontosColeta[0].lng }
    : defaultCenter;

  return (
    <div className="empresa-container">
      {/* Perfil da empresa */}
      <div className="user-info">
        <FaUserCircle size={50} color="#5f1a37" style={{ marginBottom: 8 }} />
        <p className="user-name">{usuario.nome}</p>
        <p className="user-contato">{usuario.contato}</p>
      </div>

      {/* Mapa com pontos de coleta */}
      <div className="map-container">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {pontosColeta.map((ponto) => (
              <Marker
                key={ponto.id}
                position={{ lat: ponto.lat, lng: ponto.lng }}
                title={ponto.nome}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

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
