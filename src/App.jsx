import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Erro from "./pages/Erro";
import Alunos from "./pages/Alunos";
import Configuracoes from "./pages/Configuracoes";
import Dashboard from "./pages/Dashboard";
import Financas from "./pages/Financas";
import Professores from "./pages/Professores";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/professores" element={<Professores />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/config" element={<Configuracoes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/financas" element={<Financas />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </Router>
  );
}
