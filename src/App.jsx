// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import styles from './styles/App.module.css';


import TestGridE from './pages/TestGridE';
import TestAverageBox from './pages/TestAverageBox';
import TestMinPriceBox from './pages/TestMinPriceBox';
import TestMaxPriceBox from './pages/TestMaxPriceBox';
import TestNowPriceBox from './pages/TestNowPriceBox';
import TestMainPage from './pages/TestMainPage';
import TestMainPage2 from './pages/TestMainPage2';





export default function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav className={styles.nav}>
          
          <Link to="/test-grid-e" className={styles.link}>Test Grid E</Link>
          <Link to="/TestAverageBox" className={styles.link}>Test Average Box</Link>
          <Link to="/TestMinPriceBox" className={styles.link}>Test Min Price Box</Link>
          <Link to="/TestMaxPriceBox" className={styles.link}>Test Max Price Box</Link>
          <Link to="/TestNowPriceBox" className={styles.link}>Precio de la luz Ahora</Link>
          <Link to="/TestMainPage" className={styles.link}>Test Main Page</Link>

          <Link to="/TestMainPage2" className={styles.link}>Test Main Page 2</Link>


               

         
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Navigate to="/TestData" />} />
          
          <Route path="/test-grid-e" element={<TestGridE />} />
          <Route path="/TestAverageBox" element={<TestAverageBox />} />
          <Route path="/TestMinPriceBox" element={<TestMinPriceBox />} />
          <Route path="/TestMaxPriceBox" element={<TestMaxPriceBox />} />
          <Route path="/TestNowPriceBox" element={<TestNowPriceBox />} />
          <Route path="/TestMainPage" element={<TestMainPage />} />

          <Route path="/TestMainPage2" element={<TestMainPage2 />} />


          

          

          

          
          

          


          
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
