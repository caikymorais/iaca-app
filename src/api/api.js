import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const login = async (email, senha) => {
  const data = new URLSearchParams();
  data.append("username", email);
  data.append("password", senha);

  const response = await axios.post(`${API_URL}/auth/login`, data);
  localStorage.setItem("token", response.data.access_token);
  return response.data;
};

export const registerEmpresa = async (form) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    tipo: "empresa",
    dados: form,
  });
  return response.data;
};

export const registerVendedor = async (form) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    tipo: "vendedor",
    dados: form,
  });
  return response.data;
};

export const getPontosColeta = async () => {
  const response = await axios.get(`${API_URL}/empresa/pontos`);
  return response.data;
};
