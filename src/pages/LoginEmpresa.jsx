// src/pages/LoginEmpresa.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-iaca.svg";

const LoginEmpresa = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Simulação de validação de login para a empresa
    if (email === "empresa@teste.com" && senha === "senha123") {
      // Login bem-sucedido, redirecionando para o dashboard
      alert("Login da Empresa bem-sucedido!");
      navigate("/Empresa/Home"); // Redireciona para o Dashboard da Empresa
    } else {
      // Se as credenciais estiverem erradas
      setError("E-mail ou senha inválidos!");
    }
  };

  return (
    
    <div className="form-container">
      <div className="logo-container">
         <img src={logo} alt="Logo do iaca-app" className="logo" />
       </div>
      <h2>Login - Empresa Reutilizadora</h2>
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>

      {/* Botão de cadastro */}
      <div>
        <p>Não tem conta?</p>
        <button onClick={() => navigate("/cadastro-empresa")}>Cadastre-se</button>
      </div>
    </div>
  );
};

export default LoginEmpresa;
