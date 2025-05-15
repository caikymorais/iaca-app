// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VendedorForm from "./pages/VendedorForm";
import EmpresaForm from "./pages/EmpresaForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendedor" element={<VendedorForm />} />
        <Route path="/empresa" element={<EmpresaForm />} />
      </Routes>
    </Router>
  );
};

export default App;
