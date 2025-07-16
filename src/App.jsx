import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import TestData from './pages/TestData';
import TestStatistics from'./pages/TestStatistics'
import TestBaratoCaro from'./pages/TestBaratoCaro'
import TestFecha from './pages/TestFecha'
import TestHoraActual from './pages/TestHoraActual.jsx'
import TestHoraNoUtc from './pages/TestHoraNoUtc.jsx'
import TestTablaVisual from './pages/TestTablaVisual.jsx'
import TestDevices from './pages/TestDevices.jsx'
import TestCalculo from './pages/TestCalculo.jsx'
import TestInputs from './pages/TestInputs.jsx'
import TestDraggable from './pages/TestDraggable.jsx'
import TestMultiDevices from './pages/TestMultiDevices.jsx'
import TestMultiDevicesSimple from './pages/TestMultiDevicesSimple';
import TestMultiDevicesTable from './pages/TestMultiDevicesTable';
import TestColorMap from './pages/TestColorMap';
import TestTablaFull from './pages/TestTablaFull';
import TestOneDeviceInputs from './pages/TestOneDeviceInputs';







export default function App() {
  return (
    <Router>
      <header>
        <nav>
        <Link to="/TestData">Test Data----</Link>
        <Link to="/TestStatistics">Test Statistics----</Link>
        <Link to="/TestFecha">Test Fecha----</Link>
        <Link to="/TestBaratoCaro">Test Barato Caro----</Link>
        <Link to="/TestHoraActual">Hora Actual----</Link>
        <Link to="/TestHoraNoUtc">Test Hora No Utc----</Link>
        <Link to="/TestTablaVisual">Test Tabla Visual----</Link>
        <Link to="/TestDevices">Test Devices----</Link>
        <Link to="/TestCalculo">Test Calculo----</Link>
        <Link to="/test-inputs">Test Inputs----</Link>
        <Link to="/test-draggable">Test Draggable----</Link>
        <Link to="/Test-Multi-Devices">Test MultiDevices----</Link>
        <Link to="/test-multi-simple">Test Multi Devices Simple</Link>
        <Link to="/test-multi-table">Test Multi Devices Table</Link>
        <Link to="/test-color-map">Test Color Map</Link>
        <Link to="/test-tabla-full">Test Tabla + Dispositivo</Link>
        <Link to="/test-one-device">Test One Device Inputs</Link>

        


        

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
          <Route path="/TestDevices" element={<TestDevices/>}/>
          <Route path="/TestCalculo" element={<TestCalculo/>}/>
          <Route path="/test-inputs" element={<TestInputs />} />
          <Route path="/test-draggable" element={<TestDraggable />} />
          <Route path="/Test-Multi-Devices" element={<TestMultiDevices />} />
          <Route path="/test-multi-simple" element={<TestMultiDevicesSimple />} />
          <Route path="/test-multi-table" element={<TestMultiDevicesTable />} />
          <Route path="/test-color-map" element={<TestColorMap />} />
          <Route path="/test-tabla-full" element={<TestTablaFull />} />
          <Route path="/test-one-device" element={<TestOneDeviceInputs />} />


          

        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
