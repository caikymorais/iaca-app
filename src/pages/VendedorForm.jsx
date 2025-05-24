import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-iaca.svg";
import "./Register.css";

const VendedorForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [localFeira, setLocalFeira] = useState("");
  const [telefone, setTelefone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [receberInfo, setReceberInfo] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!nome.trim() || !email.trim() || !senha.trim() || !localFeira.trim() || !telefone.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dadosCadastro = {
      nome,
      email,
      senha,
      localFeira,
      telefone,
      whatsapp,
      receberInfo,
    };

    console.log("Dados do cadastro do vendedor:", dadosCadastro);
    alert(`Cadastro do vendedor ${nome} realizado com sucesso!`);
    navigate("/login-vendedor");
  };

  return (
    <div className="register-container">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>

      <h2>Cadastro - Vendedor de Açaí</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          placeholder="Ex: João Silva"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          placeholder="Digite uma senha segura"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <label htmlFor="localFeira">Localização da Venda</label>
        <input
          id="localFeira"
          type="text"
          placeholder="Ex: Feira do Ver-o-Peso"
          value={localFeira}
          onChange={(e) => setLocalFeira(e.target.value)}
          required
        />

        <div className="telefone-group">
          <label htmlFor="telefone">Número de telefone</label>
          <input
            id="telefone"
            type="text"
            placeholder="Ex: (91) 99999-9999"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={whatsapp}
            onChange={(e) => setWhatsapp(e.target.checked)}
          />
          Este número é WhatsApp
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={receberInfo}
            onChange={(e) => setReceberInfo(e.target.checked)}
          />
          Desejo receber informações e novidades
        </label>

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default VendedorForm;
