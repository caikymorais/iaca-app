// src/pages/RegistroDescarte.jsx
import React, { useState } from "react";
import "./RegistroDescarte.css";

const pontosColeta = [
  { id: 1, nome: "Ponto 1", lat: -1.455, lng: -48.503, endereco: "Rua A, 123" },
  { id: 2, nome: "Ponto 2", lat: -1.460, lng: -48.500, endereco: "Av. B, 456" },
];

function calculaDistancia(lat1, lon1, lat2, lon2) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }
  const R = 6371e3;
  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const Δφ = toRad(lat2 - lat1);
  const Δλ = toRad(lon2 - lon1);
  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function RegistroDescarte() {
  const [pontoSelecionado, setPontoSelecionado] = useState(null);
  const [distancia, setDistancia] = useState(null);
  const [status, setStatus] = useState("selecionar");
  const [foto, setFoto] = useState(null);
  const [pontos, setPontos] = useState(0);

  const checarLocalizacao = () => {
    if (!pontoSelecionado) return;
    setStatus("checando");
    if (!navigator.geolocation) {
      alert("Geolocalização não é suportada pelo seu navegador.");
      setStatus("selecionar");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const latUser = pos.coords.latitude;
        const lngUser = pos.coords.longitude;
        const dist = calculaDistancia(
          latUser,
          lngUser,
          pontoSelecionado.lat,
          pontoSelecionado.lng
        );
        setDistancia(dist);
        if (dist <= 100) {
          setStatus("perto");
        } else {
          setStatus("longe");
        }
      },
      () => {
        alert("Não foi possível obter sua localização.");
        setStatus("selecionar");
      }
    );
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFoto(URL.createObjectURL(file));
      setStatus("foto");
    }
  };

  const confirmarDescarte = () => {
    setStatus("confirmado");
    setPontos(pontos + 10);
  };

  const resetar = () => {
    setStatus("selecionar");
    setPontoSelecionado(null);
    setFoto(null);
    setDistancia(null);
  };

  return (
    <div className="registro-container">
      <h2>Registro de Descarte</h2>

      {status === "selecionar" && (
        <>
          <p>Selecione o ponto de coleta:</p>
          <ul className="pontos-lista">
            {pontosColeta.map((p) => (
              <li key={p.id}>
                <button onClick={() => setPontoSelecionado(p)}>
                  {p.nome} - {p.endereco}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {pontoSelecionado && status === "selecionar" && (
        <div className="selecionado-info">
          <p>
            Ponto selecionado: <b>{pontoSelecionado.nome}</b>
          </p>
          <button onClick={checarLocalizacao}>Verificar localização</button>
          <button onClick={resetar} className="cancel-btn">
            Cancelar
          </button>
        </div>
      )}

      {status === "checando" && <p>Obtendo localização...</p>}

      {status === "longe" && (
        <>
          <p className="erro">
            Você está a {distancia.toFixed(0)} metros do ponto selecionado.
            Por favor, aproxime-se para registrar o descarte.
          </p>
          <button onClick={resetar}>Voltar</button>
        </>
      )}

      {status === "perto" && (
        <>
          <p>Você está perto do ponto! Tire uma foto do descarte:</p>
          {!foto && (
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFotoChange}
            />
          )}
          {foto && (
            <>
              <img
                src={foto}
                alt="Foto do descarte"
                className="foto-preview"
              />
              <button onClick={confirmarDescarte}>Confirmar Descarte</button>
              <button onClick={resetar} className="cancel-btn">
                Cancelar
              </button>
            </>
          )}
        </>
      )}

      {status === "confirmado" && (
        <>
          <p className="sucesso">
            Descarte registrado com sucesso! Você ganhou 10 pontos.
          </p>
          <p>Seus pontos: {pontos}</p>
          <button onClick={resetar}>Registrar novo descarte</button>
        </>
      )}
    </div>
  );
}
