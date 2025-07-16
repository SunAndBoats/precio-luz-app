// src/pages/TestColorMap.jsx
import { crearNuevoDispositivo } from '../utils/devices';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import { timeStringToMinutes } from '../utils/timeUtils';
import { useMemo } from 'react';

export default function TestColorMap() {
  const device = crearNuevoDispositivo(1, 'Lavadora');
  device.startTime = '10:15';
  device.duracion = 120;
  device.potencia = 2000;

  const precios = Array(24).fill(0.13);
  const preciosMinuto = getPrecioPorMinuto(precios);
  const resultado = calcularCoste(device, preciosMinuto);

  const start = timeStringToMinutes(device.startTime);
  const end = start + device.duracion;

  const occupiedHours = new Set();
  for (let i = Math.floor(start / 60); i <= Math.floor((end - 1) / 60); i++) {
    occupiedHours.add(i);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧩 Test Color Map</h2>
      <p>{device.nombre} - {device.startTime} - {device.duracion} min</p>
      <p>⚡ {resultado.energiaConsumida} kWh | 💰 {resultado.costeTotal} €</p>

      <div style={{ border: '1px solid #ccc', width: '200px' }}>
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            style={{
              height: '60px',
              backgroundColor: occupiedHours.has(i) ? '#007bff33' : '#ffffff',
              borderTop: '1px dashed #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px'
            }}
          >
            {String(i).padStart(2, '0')}:00
          </div>
        ))}
      </div>
    </div>
  );
}
