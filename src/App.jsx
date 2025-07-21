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
import TestTablaDraggableA from './pages/TestTablaDraggableA';
import TestTablaDraggableB from './pages/TestTablaDraggableB';
import TestTablaDraggableC from './pages/TestTablaDraggableC';
import TestGridB from './pages/TestGridB.jsx';
import TestGridC from './pages/TestGridC.jsx';
import TestGridD from './pages/TestGridD.jsx';
import TestGridE from './pages/TestGridE.jsx';
import TestDraggableB from './pages/TestDraggableB.jsx';
import TestDraggableC from './pages/TestDraggableC.jsx';
import TestDraggableF from './pages/TestDraggableF.jsx';
import TestDraggableH from './pages/TestDraggableH.jsx';
import TestGridJ from './pages/TestGridJ.jsx';











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
        <Link to="/test-multi-simple">Test Multi Devices Simple-----</Link>
        <Link to="/test-multi-table">Test Multi Devices Table-----</Link>
        <Link to="/test-color-map">Test Color Map-----</Link>
        <Link to="/test-tabla-full">Test Tabla + Dispositivo-----</Link>
        <Link to="/test-one-device">Test One Device Inputs-----</Link>
       
<Link to="/test-tabla-draggableA">Test Tabla DraggableA-----</Link>
<Link to="/test-tabla-draggableB">Test Tabla DraggableB-----</Link>
<Link to="/test-tabla-draggableC">Test Tabla DraggableC-----</Link>
<Link to="/test-grid-b">Test Grid B-----</Link>
<Link to="/test-grid-c">Test Grid C-----</Link>
<Link to="/test-grid-d">Test Grid D-----</Link>
<Link to="/test-grid-e">Test Grid E-----</Link>
<Link to="/test-draggable-b">Test Draggable B-----</Link>
<Link to="/test-draggable-c">Test Draggable C-----</Link>
<Link to="/test-draggable-f">Test Draggable F-----</Link>
<Link to="/test-draggable-h">Test Draggable H-----</Link>
<Link to="/test-grid-j">Test Grid J-----</Link>



        


        

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

          <Route path="/test-tabla-draggableA" element={<TestTablaDraggableA />} />
          <Route path="/test-tabla-draggableB" element={<TestTablaDraggableB />} />
          <Route path="/test-tabla-draggableC" element={<TestTablaDraggableC />} />
          <Route path="/test-grid-b" element={<TestGridB />} />
          <Route path="/test-grid-c" element={<TestGridC />} />
          <Route path="/test-grid-d" element={<TestGridD />} />
          <Route path="/test-grid-e" element={<TestGridE />} />
          <Route path="/test-draggable-b" element={<TestDraggableB />} />
          <Route path="/test-draggable-c" element={<TestDraggableC />} />
          <Route path="/test-draggable-f" element={<TestDraggableF />} />
          <Route path="/test-draggable-h" element={<TestDraggableH />} />
          <Route path="/test-grid-j" element={<TestGridJ />} />




          

        </Routes>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Tu Web</p>
      </footer>
    </Router>
  );
}
