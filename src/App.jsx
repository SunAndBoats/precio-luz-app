// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import styles from './styles/App.module.css';
import TestGridE from './pages/TestGridE';
import TestAverageBox from './pages/TestAverageBox';
import TestMinPriceBox from './pages/TestMinPriceBox';
import TestMaxPriceBox from './pages/TestMaxPriceBox';
import TestNowPriceBox from './pages/TestNowPriceBox';
import TestMainPage2 from './pages/TestMainPage2';
import { Analytics } from "@vercel/analytics/next"


export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav className={styles.nav}>
          
          <Link to="/test-grid-e" className={styles.link}>Tabla</Link>
          <Link to="/TestAverageBox" className={styles.link}>Precio Medio</Link>
          <Link to="/TestMinPriceBox" className={styles.link}>Precio Mínimo de hoy</Link>
          <Link to="/TestMaxPriceBox" className={styles.link}>Precio Máximo de hoy</Link>
          <Link to="/TestNowPriceBox" className={styles.link}>Precio Hora Actual</Link>
         
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<TestMainPage2 />} />          
          <Route path="/test-grid-e" element={<TestGridE />} />
          <Route path="/TestAverageBox" element={<TestAverageBox />} />
          <Route path="/TestMinPriceBox" element={<TestMinPriceBox />} />
          <Route path="/TestMaxPriceBox" element={<TestMaxPriceBox />} />
          <Route path="/TestNowPriceBox" element={<TestNowPriceBox />} />
          

        </Routes>
        <Analytics/>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} VAPRO SOFTWARE</p>
      </footer>
    </Router>
  );
}
