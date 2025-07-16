// src/pages/TestMultiDevicesSimple.jsx

import { useState } from 'react';
import DeviceEditor from '../components/DeviceEditor';
import { crearNuevoDispositivo } from '../utils/devices';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';

export default function TestMultiDevicesSimple() {
  const [devices, setDevices] = useState(() =>
    Array.from({ length: 5 }, (_, i) => {
      const d = crearNuevoDispositivo(i + 1, `Aparato ${i + 1}`);
      d.startTime = `${String(6 + i).padStart(2, '0')}:00`;
      d.duracion = 90;
      d.potencia = 800 + i * 200;
      return d;
    })
  );

  function handleDeviceChange(i, updated) {
    const next = [...devices];
    next[i] = updated;
    setDevices(next);
  }

  const preciosMinuto = getPrecioPorMinuto(Array(24).fill(0.12));

  const resumen = devices.map((d) => calcularCoste(d, preciosMinuto));
  const totalConsumo = resumen.reduce((sum, r) => sum + r.energiaConsumida, 0).toFixed(3);
  const totalCoste = resumen.reduce((sum, r) => sum + r.costeTotal, 0).toFixed(3);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 Test Multi Devices Simple</h2>

      <div style={{ display: 'flex', gap: '1rem' }}>
        {devices.map((d, i) => (
          <DeviceEditor key={d.id} device={d} onChange={(upd) => handleDeviceChange(i, upd)} />
        ))}
      </div>

      <hr />

      <p>⚡ Total consumo: {totalConsumo} kWh</p>
      <p>💰 Total coste: {totalCoste} €</p>
    </div>
  );
}
