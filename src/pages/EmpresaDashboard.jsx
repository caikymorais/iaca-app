import React, { useEffect, useState } from "react";
import "./EmpresaHome.css";
import { getPontosColeta } from "../api/api";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -1.455,
  lng: -48.503,
};

const EmpresaDashboard = () => {
  const [pontos, setPontos] = useState([]);

  useEffect(() => {
    const fetchPontos = async () => {
      try {
        const data = await getPontosColeta();
        setPontos(data);
      } catch (error) {
        console.error("Erro ao buscar pontos de coleta:", error);
      }
    };

    fetchPontos();
  }, []);

  const center = pontos.length
    ? { lat: pontos[0].lat, lng: pontos[0].lng }
    : defaultCenter;

  return (
    <div className="empresa-container">
      <h2>Pontos de Coleta Cadastrados</h2>

      <div className="map-container">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
            {pontos.map((ponto) => (
              <Marker
                key={ponto.id}
                position={{ lat: ponto.lat, lng: ponto.lng }}
                title={ponto.nome}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      <ul className="pontos-list">
        {pontos.map((ponto) => (
          <li key={ponto.id}>
            <strong>{ponto.nome}</strong> - {ponto.endereco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpresaDashboard;
