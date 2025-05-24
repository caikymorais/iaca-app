import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-iaca.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>

      <h1>Bem-vindo ao iaca-app</h1>
      <p>Escolha seu perfil para continuar:</p>

      <div className="button-group">
        <Link to="/login-vendedor">
          <button>Vendedor de Açaí</button>
        </Link>
        <Link to="/login-empresa">
          <button>Empresa Reutilizadora</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
