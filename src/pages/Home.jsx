// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom"; // Usando o Link para navegação

const Home = () => {
  return (
    <div className="home">
      {/* Logo fictícia ou personalizada */}
      <div className="logo-container">
        <img src="/iaca-logo.png" alt="Logo do iaca-app" className="logo" />
      </div>

      <h1>Bem-vindo ao iaca-app</h1>
      <p>Escolha seu perfil para continuar:</p>
      <div>
        <Link to="/login-vendedor">
          <button>Vendedor de Açaí</button>
        </Link>
        <Link to="/login-empresa">
          <button>Empresa Reutilizadora</button>
        </Link>
        <Link to="/admin">
          <button>Administração</button>
        </Link>
      </div>
      <div>
        <p>Já tem uma conta?</p>
        <Link to="/login">
          <button>Fazer Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
