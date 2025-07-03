import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Tabla from './pages/Tabla';
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
          <Link to="/json">JSON</Link>
          <Link to="/calculadora">Calculadora</Link>
          <Link to="/ajustes">Ajustes</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/tabla" />} />
          <Route path="/tabla" element={<Tabla />} />
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
