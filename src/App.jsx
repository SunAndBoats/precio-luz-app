// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import styles from './styles/App.module.css';

import TestData from './pages/TestData';
import TestStatistics from './pages/TestStatistics';
import TestBaratoCaro from './pages/TestBaratoCaro';
import TestFecha from './pages/TestFecha';
import TestHoraActual from './pages/TestHoraActual';
import TestHoraNoUtc from './pages/TestHoraNoUtc';
import TestTablaVisual from './pages/TestTablaVisual';
import TestGridE from './pages/TestGridE';
import TestAverageBox from './pages/TestAverageBox';



export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/TestData" className={styles.link}>Test Data</Link>
          <Link to="/TestStatistics" className={styles.link}>Test Statistics</Link>
          <Link to="/TestFecha" className={styles.link}>Test Fecha</Link>
          <Link to="/TestBaratoCaro" className={styles.link}>Test Barato Caro</Link>
          <Link to="/TestHoraActual" className={styles.link}>Hora Actual</Link>
          <Link to="/TestHoraNoUtc" className={styles.link}>Test Hora No Utc</Link>
          <Link to="/TestTablaVisual" className={styles.link}>Test Tabla Visual</Link>
          <Link to="/test-grid-e" className={styles.link}>Test Grid E</Link>
          <Link to="/TestAverageBox" className={styles.link}>Test Average Box</Link>

         
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to="/TestData" />} />
          <Route path="/TestData" element={<TestData />} />
          <Route path="/TestStatistics" element={<TestStatistics />} />
          <Route path="/TestFecha" element={<TestFecha />} />
          <Route path="/TestBaratoCaro" element={<TestBaratoCaro />} />
          <Route path="/TestHoraActual" element={<TestHoraActual />} />
          <Route path="/TestHoraNoUtc" element={<TestHoraNoUtc />} />
          <Route path="/TestTablaVisual" element={<TestTablaVisual />} />
          <Route path="/test-grid-e" element={<TestGridE />} />
          <Route path="/TestAverageBox" element={<TestAverageBox />} />


          
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
