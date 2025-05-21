// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom"; // Usando o Link para navegação
import logo from "../assets/logo-iaca.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>
      <h1>Égua, que bom te ver por aqui!</h1>
      <p>Te identifica aí, pra gente começar</p>
      <div>
        <Link to="/login-vendedor">
          <button>Batedor de Açaí</button>
        </Link>
        <Link to="/login-empresa">
          <button>Reutilizador do Caroço</button>
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
