import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-iaca.svg";
import "./Register.css";

const EmpresaForm = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [endereco, setEndereco] = useState("");
  const [receberInfo, setReceberInfo] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      !nomeEmpresa.trim() ||
      !cnpj.trim() ||
      !email.trim() ||
      !senha.trim() ||
      !telefone.trim() ||
      !endereco.trim()
    ) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const dadosCadastro = {
      nomeEmpresa,
      cnpj,
      email,
      senha,
      telefone,
      whatsapp,
      endereco,
      receberInfo,
    };

    console.log("Dados do cadastro da empresa:", dadosCadastro);
    alert(`Cadastro da empresa ${nomeEmpresa} realizado com sucesso!`);
    navigate("/login-empresa");
  };

  return (
    <div className="register-container">
      <div className="logo-container">
        <img src={logo} alt="Logo do iaca-app" className="logo" />
      </div>

      <h2>Cadastro - Empresa Reutilizadora</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nomeEmpresa">Nome da Empresa</label>
        <input
          id="nomeEmpresa"
          type="text"
          placeholder="Ex: Açai do Pará Ltda."
          value={nomeEmpresa}
          onChange={(e) => setNomeEmpresa(e.target.value)}
          required
        />

        <label htmlFor="cnpj">CNPJ</label>
        <input
          id="cnpj"
          type="text"
          placeholder="00.000.000/0000-00"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="exemplo@empresa.com"
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

        <label htmlFor="endereco">Endereço Completo</label>
        <input
          id="endereco"
          type="text"
          placeholder="Rua das Flores, 123, Bairro Centro"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />

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

export default EmpresaForm;
