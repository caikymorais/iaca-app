// HistoricoDescarte.jsx
import React, { useEffect, useState } from "react";
import "./EmpresaHome.css";
import axios from "axios";

const HistoricoDescarte = () => {
  const [descartes, setDescartes] = useState([]);

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/descarte/vendedor/1"
        );
        setDescartes(response.data);
      } catch (error) {
        console.error("Erro ao buscar histórico:", error);
      }
    };
    fetchHistorico();
  }, []);

  return (
    <div className="empresa-container">
      <h2>Histórico de Descartes</h2>
      {descartes.length === 0 ? (
        <p>Nenhum descarte registrado.</p>
      ) : (
        <ul className="pontos-list">
          {descartes.map((item) => (
            <li key={item.id}>
              <p>
                <strong>{item.ponto.nome}</strong> — {item.quantidade_kg} kg em {new Date(item.data_hora).toLocaleString()}
              </p>
              {item.foto_url && (
                <img
                  src={item.foto_url}
                  alt="Foto do descarte"
                  style={{ width: "120px", borderRadius: "8px", marginTop: "6px" }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoricoDescarte;