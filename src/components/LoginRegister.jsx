import React, { useState } from "react";
import { Link } from "react-router-dom"; // Usando o Link para navegação

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login e cadastro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Apenas usado no cadastro
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // Simulação de login
        alert(`Login simulado para: ${email}`);
      } else {
        // Simulação de cadastro
        alert(`Cadastro simulado para: ${name}`);
        setIsLogin(true); // Após cadastro, volta para o formulário de login
      }
    } catch (err) {
      setError("Erro ao processar a solicitação");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", marginTop: 100 }}>
      <h2>{isLogin ? "Login" : "Cadastro"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Exibir o campo "Nome" apenas no formulário de cadastro */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ display: "block", marginBottom: 10, width: "100%" }}
          />
        )}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ display: "block", marginBottom: 10, width: "100%" }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
      </form>
      <p style={{ marginTop: 10, color: "red" }}>{error}</p>
      <button onClick={toggleForm} style={{ marginTop: 10, width: "100%" }}>
        {isLogin ? (
          <Link to="/cadastro">Não tem conta? Cadastre-se</Link> // Link para página de cadastro
        ) : (
          <Link to="/login">Já tem conta? Faça login</Link> // Link para página de login
        )}
      </button>
    </div>
  );
};

export default LoginRegister;
