// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout principal
import MainLayout from "./layout/MainLayout";

// Páginas
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Professores from "./pages/Professores";
import Alunos from "./pages/Alunos";
import Financas from "./pages/Financas";
import Configuracoes from "./pages/Configuracoes";
import Login from "./pages/Login";

/**
 * Componente principal da aplicação
 * Responsável por definir todas as rotas e o layout base.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} /> 


        {/* Rotas protegidas dentro do MainLayout */}
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> {/* / */}
          <Route path="professores" element={<Professores />} />
          <Route path="alunos" element={<Alunos />} />
          <Route path="financas" element={<Financas />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
