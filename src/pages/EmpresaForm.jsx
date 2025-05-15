// src/pages/EmpresaForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmpresaForm = () => {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState(""); // Para confirmação de senha
  const [error, setError] = useState(""); // Para erros de validação
  const navigate = useNavigate(); // Navegação para outra página após o cadastro

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validando se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    // Aqui você pode conectar com a API de cadastro para salvar os dados da empresa
    console.log("Cadastro da Empresa:", nome, cnpj, email, senha);

    // Após o cadastro, redirecionar para a página de pontos de coleta ou outra página
    navigate("/dashboard"); // Alteração para redirecionar após o cadastro
  };

  return (
    <div className="form-container">
      <h2>Cadastro - Empresa Reutilizadora</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo para o nome da empresa */}
        <input
          type="text"
          placeholder="Nome da Empresa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        {/* Campo para o CNPJ */}
        <input
          type="text"
          placeholder="CNPJ"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />

        {/* Campo para o e-mail */}
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Campo para a senha */}
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {/* Campo para confirmar a senha */}
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />

        {/* Exibir erro se as senhas não coincidirem */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* Botão de submit */}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default EmpresaForm;
