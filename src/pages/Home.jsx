import React from "react";
import { Link } from "react-router-dom"; // Para usar o Link para navegação
import logo from "../assets/logo-iaca.png";

const Home = () => {
  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>
      <p>Escolha seu perfil para continuar:</p>
      <div>
        <Link to="/vendedor">
          <button>Vendedor de Açaí</button>
        </Link>
        <Link to="/empresa">
          <button>Empresa Reutilizadora</button>
        </Link>
        <Link to="/admin">
          <button>Administração</button>
        </Link>
      </div>

      {/* Adicionando botão de login */}
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
