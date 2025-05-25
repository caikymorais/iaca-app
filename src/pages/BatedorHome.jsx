import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPontosColeta } from "../api/api";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { getDistance } from "geolib";

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "./EmpresaHome.css";

import iconDescarte from "../assets/caixa.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const descarteIcon = new L.Icon({
  iconUrl: iconDescarte,
  iconSize: [32, 64],
  iconAnchor: [32, 64],
  popupAnchor: [0, -32],
});

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Route = ({ origem, destino }) => {
  const map = useMap();

  useEffect(() => {
    if (!origem || !destino) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(origem.lat, origem.lng), L.latLng(destino.lat, destino.lng)],
      routeWhileDragging: false,
      draggableWaypoints: false,
      addWaypoints: false,
      show: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [origem, destino, map]);

  return null;
};

const BatedorHome = () => {
  const [pontoMaisProximo, setPontoMaisProximo] = useState(null);
  const [distanciaKm, setDistanciaKm] = useState(null);
  const [posicaoBatedor, setPosicaoBatedor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocalização não suportada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude: lat, longitude: lng } = coords;
        setPosicaoBatedor({ lat, lng });

        const pontos = await getPontosColeta();
        if (!pontos.length) return;

        const { ponto, distancia } = pontos.reduce(
          (acc, ponto) => {
            const dist = getDistance(
              { latitude: lat, longitude: lng },
              { latitude: ponto.lat, longitude: ponto.lng }
            );
            return dist < acc.distancia
              ? { ponto, distancia: dist }
              : acc;
          },
          { ponto: null, distancia: Infinity }
        );

        setPontoMaisProximo(ponto);
        setDistanciaKm((distancia / 1000).toFixed(2));
      },
      (error) => console.error("Erro ao obter localização:", error)
    );
  }, []);

  const centerMapa = pontoMaisProximo
    ? { lat: pontoMaisProximo.lat, lng: pontoMaisProximo.lng }
    : { lat: -1.455, lng: -48.503 }; // fallback para Belém

  return (
    <div className="empresa-container">
      <h2 className="titulo">Ponto de Coleta Mais Próximo</h2>

      <div className="map-wrapper">
        <MapContainer
          center={centerMapa}
          zoom={14}
          scrollWheelZoom
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {pontoMaisProximo && (
            <Marker
              position={centerMapa}
              icon={descarteIcon}
            >
              <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                ♻️ {pontoMaisProximo.nome}
              </Tooltip>
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <strong>{pontoMaisProximo.nome}</strong>
                  <br />
                  {pontoMaisProximo.endereco}
                  <br />
                  <small style={{ color: "green", fontWeight: "bold" }}>
                    Distância: {distanciaKm} km
                  </small>
                  <br />
                  <button
                    style={{ marginTop: "5px" }}
                    onClick={() => navigate(`/batedor/ponto/${pontoMaisProximo.id}`)}
                  >
                    Ver Detalhes
                  </button>
                </div>
              </Popup>
            </Marker>
          )}

          {posicaoBatedor && (
            <Marker position={[posicaoBatedor.lat, posicaoBatedor.lng]}>
              <Popup>Sua posição atual</Popup>
            </Marker>
          )}

          {/* Desenha a rota entre os pontos */}
          {pontoMaisProximo && posicaoBatedor && (
            <Route origem={posicaoBatedor} destino={pontoMaisProximo} />
          )}
        </MapContainer>
      </div>

      {pontoMaisProximo && (
        <div className="legenda-distancia" style={{
          marginTop: "1rem",
          padding: "10px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <p style={{ margin: 0 }}>
            🧭 <strong>Ponto mais perto há {distanciaKm} km</strong><br />
            📍 {pontoMaisProximo.endereco}
          </p>
        </div>
      )}
    </div>
  );
};

export default BatedorHome;
