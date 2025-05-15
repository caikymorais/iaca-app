// src/pages/VendedorForm.jsx
import React, { useState } from 'react';

const VendedorForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [localizacao, setLocalizacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode conectar com o backend para enviar os dados do formulário
    console.log({
      nome,
      email,
      senha,
      telefone,
      localizacao,
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastro - Vendedor de Açaí</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Digite seu nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
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
        <input 
          type="password" 
          placeholder="Confirmar senha" 
          value={confirmarSenha} 
          onChange={(e) => setConfirmarSenha(e.target.value)} 
          required 
        />
        <input 
          type="text" 
          placeholder="Digite seu telefone (opcional)" 
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Digite sua localização" 
          value={localizacao} 
          onChange={(e) => setLocalizacao(e.target.value)} 
          required 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default VendedorForm;
