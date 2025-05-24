import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-iaca.svg";
import "./Login.css";

const LoginVendedor = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === "vendedor@teste.com" && senha === "senha123") {
      alert("Login do Vendedor bem-sucedido!");
      navigate("/batedor/home");
    } else {
      setError("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>
      <h2>Login - Vendedor de Açaí</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Entrar</button>
      </form>

      <div>
        <p>Não tem conta?</p>
        <button className="secondary-button" onClick={() => navigate("/cadastro-vendedor")}>
          Cadastre-se
        </button>
      </div>
    </div>
  );
};

export default LoginVendedor;
