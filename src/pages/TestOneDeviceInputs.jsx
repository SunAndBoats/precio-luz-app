// src/pages/TestOneDeviceInputs.jsx
import { useState } from 'react';
import { crearNuevoDispositivo } from '../utils/devices';
import DeviceEditor from '../components/DeviceEditor';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';

export default function TestOneDeviceInputs() {
  const [device, setDevice] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Termo eléctrico');
    d.startTime = '06:00';
    d.duracion = 120;
    d.potencia = 1500;
    return d;
  });

  const preciosMinuto = getPrecioPorMinuto(Array(24).fill(0.15));
  const resultado = calcularCoste(device, preciosMinuto);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🔧 Test 1 Dispositivo + Inputs</h2>
      <DeviceEditor device={device} onChange={setDevice} />
      <hr />
      <p>⚡ {resultado.energiaConsumida} kWh</p>
      <p>💰 {resultado.costeTotal} €</p>
    </div>
  );
}

