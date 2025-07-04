import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Tabla from './pages/Tabla';
import Tabla2 from './pages/Tabla2';
import Tabla3 from './pages/Tabla3';
import Tabla4 from './pages/Tabla4';
import Tabla5 from './pages/Tabla5';
import Json from './pages/Json';
import Calculadora from './pages/Calculadora';
import Ajustes from './pages/Ajustes';
import './styles/global.module.css';

export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/tabla">Tabla</Link>
          <Link to="/tabla2">Tabla2</Link>
          <Link to="/tabla3">Tabla3</Link>
          <Link to="/tabla4">Tabla4</Link>
          <Link to="/tabla5">Tabla4</Link>
          <Link to="/json">JSON</Link>
          <Link to="/calculadora">Calculadora</Link>
          <Link to="/ajustes">Ajustes</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/tabla" />} />
          <Route path="/tabla" element={<Tabla />} />
          <Route path="/tabla2" element={<Tabla2 />} />
          <Route path="/tabla3" element={<Tabla3 />} />
          <Route path="/tabla4" element={<Tabla4 />} />
          <Route path="/tabla5" element={<Tabla5 />} />
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
