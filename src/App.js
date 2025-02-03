import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Rodape from './componentes/Rodape.js'
import PaginaInicial from './componentes/PaginaInicial'; 
import Manutencao from './componentes/Manutencao'; // Importar o componente de manutenção

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<PaginaInicial />} />
        
        {/* Páginas que redirecionam para a manutenção */}
        <Route path="/internet" element={<Manutencao />} />
        <Route path="/telefonia" element={<Manutencao />} />
        <Route path="/sobre-nos" element={<Manutencao />} />
        
        {/* SAC link externo */}
        <Route
          path="/sac"
          element={() => {
            window.location.href = "https://mksolutions.cznet.net.br/sac";
            return null;
          }}
        />
        
        {/* Biblioteca link externo */}
        <Route
          path="/biblioteca"
          element={() => {
            window.location.href = "https://estante.app/";
            return null;
          }}
        />
        
        <Route path="/contratacao" element={<Manutencao />} />
      </Routes>
      <Rodape />
    </Router>
  );
}

export default App;
