// src/pages/TestMultiDevicesTable.jsx
import { useState } from 'react';
import { crearNuevoDispositivo } from '../utils/devices';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';

export default function TestMultiDevicesTable() {
  const [devices, setDevices] = useState(() =>
    Array.from({ length: 5 }, (_, i) => {
      const d = crearNuevoDispositivo(i + 1, `Dispositivo ${i + 1}`);
      d.startTime = `${String(7 + i).padStart(2, '0')}:00`;
      d.duracion = 60;
      d.potencia = 1500;
      return d;
    })
  );

  const preciosMinuto = getPrecioPorMinuto(Array(24).fill(0.15));

  function handleChange(i, field, value) {
    const next = [...devices];
    next[i][field] = field === 'startTime' ? value : parseInt(value);
    setDevices(next);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧮 Test Multi Devices Table</h2>

      <table border="1" cellPadding="6" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Inicio</th>
            <th>Duración (min)</th>
            <th>Potencia (W)</th>
            <th>Energía (kWh)</th>
            <th>Coste (€)</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d, i) => {
            const res = calcularCoste(d, preciosMinuto);
            return (
              <tr key={d.id}>
                <td>{d.nombre}</td>
                <td>
                  <input type="time" value={d.startTime} onChange={(e) => handleChange(i, 'startTime', e.target.value)} />
                </td>
                <td>
                  <input type="number" value={d.duracion} onChange={(e) => handleChange(i, 'duracion', e.target.value)} />
                </td>
                <td>
                  <input type="number" value={d.potencia} onChange={(e) => handleChange(i, 'potencia', e.target.value)} />
                </td>
                <td>{res.energiaConsumida.toFixed(3)}</td>
                <td>{res.costeTotal.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
