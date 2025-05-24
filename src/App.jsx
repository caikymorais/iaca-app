// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VendedorForm from "./pages/VendedorForm";
import EmpresaForm from "./pages/EmpresaForm";
import LoginEmpresa from './pages/LoginEmpresa'; // Tela de Login da Empresa
import LoginVendedor from './pages/LoginVendedor'; // Tela de Login do Vendedor
import EmpresaDashboard from "./pages/EmpresaDashboard";
import BatedorHome from "./pages/BatedorHome";
import EmpresaHome from "./pages/EmpresaHome";
import HistoricoDescarte from "./pages/HistoricoDescarte";
import RegistroDescarte from "./pages/RegistroDescarte.jsx";
import PontoDetalhes from "./pages/PontoDetalhes";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-empresa" element={<LoginEmpresa />} /> {/* Login da Empresa */}
        <Route path="/login-vendedor" element={<LoginVendedor />} /> {/* Login do Vendedor */}
        <Route path="/cadastro-vendedor" element={<VendedorForm />} />
        <Route path="/cadastro-empresa" element={<EmpresaForm />} />
        <Route path="/batedor/home" element={<BatedorHome />} />
        <Route path="/empresa/home" element={<EmpresaHome />} />
        <Route path="/batedor/ponto/:id" element={<PontoDetalhes />} />
        <Route path="/batedor/historico" element={<HistoricoDescarte />} />
         <Route path="/batedor/registro-descarte" element={<RegistroDescarte />} />
        <Route path="/dashboard" element={<EmpresaDashboard />} />{" "}
        {/* Rota do Dashboard da Empresa */}
      </Routes>
    </Router>
  );
};

export default App;
