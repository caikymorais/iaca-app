// src/pages/EmpresaDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmpresaDashboard = () => {
  const [pontos, setPontos] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false); // Para carregar o mapa depois

  useEffect(() => {
    // Simulação de uma requisição para pegar os pontos de coleta
    const fetchPontos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pontos'); // Ajuste a URL conforme necessário
        setPontos(response.data);
      } catch (error) {
        console.error('Erro ao buscar pontos de coleta', error);
      }
    };

    fetchPontos();
  }, []);

  // Função simulada para mostrar o mapa (vai ser expandida com a API do Maps depois)
  const loadMap = () => {
    // Aqui você pode carregar o mapa assim que o botão for clicado
    setMapLoaded(true);
    console.log("Mapa carregado");
  };

  return (
    <div className="dashboard">
      <h2>Dashboard - Empresa Reutilizadora</h2>

      {/* Mapa, ainda não carregado */}
      <div className="map-container">
        <button onClick={loadMap}>Carregar Mapa</button>
        {mapLoaded && (
          <div className="map">
            {/* Aqui será exibido o mapa mais tarde */}
            <p>Mapa carregado aqui.</p>
            {/* Esse é o espaço reservado para o mapa */}
          </div>
        )}
      </div>

      <div className="pontos">
        <h3>Pontos de Coleta</h3>
        <ul>
          {pontos.length > 0 ? (
            pontos.map((ponto) => (
              <li key={ponto.id}>
                {ponto.localizacao} - {ponto.status} {/* Exemplo de dados */}
                {/* Aqui você pode adicionar mais detalhes do ponto, como a quantidade de caroços */}
              </li>
            ))
          ) : (
            <p>Carregando pontos de coleta...</p>
          )}
        </ul>
      </div>

      <div className="actions">
        <button>Agendar Coleta</button>
        <button>Gerar Relatório de Impacto Ambiental</button>
      </div>
    </div>
  );
};

export default EmpresaDashboard;
