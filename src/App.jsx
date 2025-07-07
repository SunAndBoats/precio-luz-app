import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Estadisticas from './pages/Estadisticas';
import Json from './pages/Json';
import Calculadora from './pages/Calculadora';
import Ajustes from './pages/Ajustes';
import './styles/global.module.css';
import Tabla5 from './pages/Tabla5';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          
          
         <Link to="/estadisticas">Estadisticas</Link>
         <Link to="/tabla5">Tabla 5</Link>
          <Link to="/json">JSON</Link>
          <Link to="/calculadora">Calculadora</Link>
          <Link to="/ajustes">Ajustes</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
         
          
          <Route path="/estadisticas" element={<Estadisticas />}/>
          <Route path="/tabla5" element={<Tabla5 />}/>
          <Route path="/json" element={<Json />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/ajustes" element={<Ajustes />} />
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
