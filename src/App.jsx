// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VendedorForm from "./pages/VendedorForm";
import EmpresaForm from "./pages/EmpresaForm";
import LoginEmpresa from './pages/LoginEmpresa'; // Tela de Login da Empresa
import LoginVendedor from './pages/LoginVendedor'; // Tela de Login do Vendedor
import EmpresaDashboard from "./pages/EmpresaDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-empresa" element={<LoginEmpresa />} /> {/* Login da Empresa */}
        <Route path="/login-vendedor" element={<LoginVendedor />} /> {/* Login do Vendedor */}
        <Route path="/cadastro-vendedor" element={<VendedorForm />} />
        <Route path="/cadastro-empresa" element={<EmpresaForm />} />
        <Route path="/dashboard" element={<EmpresaDashboard />} />{" "}
        {/* Rota do Dashboard da Empresa */}
      </Routes>
    </Router>
  );
};

export default App;
