import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import TestData from './pages/TestData';
import TestStatistics from'./pages/TestStatistics'
import TestBaratoCaro from'./pages/TestBaratoCaro'
import TestFecha from './pages/TestFecha'
import TestHoraActual from './pages/TestHoraActual.jsx'
import TestHoraNoUtc from './pages/TestHoraNoUtc.jsx'
import TestTablaVisual from './pages/TestTablaVisual.jsx'




export default function App() {
  return (
    <Router>
      <header>
        <nav>
        <Link to="/TestData">Test Data</Link>
        <Link to="/TestStatistics">Test Statistics</Link>
        <Link to="/TestFecha">Test Fecha</Link>
        <Link to="/TestBaratoCaro">Test Barato Caro</Link>
        <Link to="/TestHoraActual">Hora Actual</Link>
        <Link to="/TestHoraNoUtc">Test Hora No Utc</Link>
        <Link to="/TestTablaVisual">Test Tabla Visual</Link>



          
          {/* 
         <Link to="/estadisticas">Estadisticas</Link>
         <Link to="/tabla5">Tabla 5</Link>

         
          <Link to="/json">JSON</Link>
          <Link to="/calculadora">Calculadora</Link>
          <Link to="/ajustes">Ajustes</Link>

          */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/TestData" element={<TestData />} />
          <Route path="/TestStatistics" element={<TestStatistics/>}/>
          <Route path="/TestFecha" element={<TestFecha/>}/>
          <Route path="/TestBaratoCaro" element={<TestBaratoCaro/>}/>
          <Route path="/TestHoraActual" element={<TestHoraActual/>}/>
          <Route path="/TestHoraNoUtc" element={<TestHoraNoUtc/>}/>
          <Route path="/TestTablaVisual" element={<TestTablaVisual/>}/>
         
          {/* 
          <Route path="/estadisticas" element={<Estadisticas />}/>
          <Route path="/tabla5" element={<Tabla5 />}/>


          
          <Route path="/json" element={<Json />} />

          
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/ajustes" element={<Ajustes />} />

          */}
        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
