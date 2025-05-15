// src/pages/EmpresaForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Alteração aqui

const EmpresaForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Alteração aqui

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui, você pode conectar com a API de autenticação
    console.log("Empresa - Email:", email, "Senha:", password);
    // Após o login/cadastro, redirecionar para a página de visualização de pontos de coleta ou outra página
    navigate("/coletas"); // Alteração aqui
  };

  return (
    <div className="form-container">
      <h2>Empresa Reutilizadora</h2>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default EmpresaForm;
