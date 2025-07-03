import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/tabla">Tabla</Link>
        <Link to="/calculadora">Calculadora</Link>
        <Link to="/json">JSON</Link>
        <Link to="/ajustes">Ajustes</Link>
      </nav>
    </header>
  );
}