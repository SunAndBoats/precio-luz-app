// src/pages/TestTablaDraggable.jsx
import { useState } from 'react';
import { crearNuevoDispositivo } from '../utils/devices';
import { timeStringToMinutes } from '../utils/timeUtils';
import { calcularCoste, getPrecioPorMinuto } from '../utils/costCalculator';

export default function TestTablaDraggable() {
  const [device, setDevice] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Aire acondicionado');
    d.startTime = '12:00';
    d.duracion = 120;
    d.potencia = 2000;
    return d;
  });

  const preciosMinuto = getPrecioPorMinuto(Array(24).fill(0.14));
  const result = calcularCoste(device, preciosMinuto);

  const handleDrag = (e) => {
    const offsetY = e.clientY - e.currentTarget.getBoundingClientRect().top;
    const minutos = Math.floor(offsetY); // 1px = 1 min
    const clamped = Math.min(Math.max(0, minutos), 1440 - device.duracion);
    const hh = String(Math.floor(clamped / 60)).padStart(2, '0');
    const mm = String(clamped % 60).padStart(2, '0');
    setDevice({ ...device, startTime: `${hh}:${mm}` });
  };

  const startMin = timeStringToMinutes(device.startTime);
  const blockHeight = device.duracion;

  return (
    <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
      {/* Tabla horaria */}
      <div>
        <h3>🕒 Tabla Horaria</h3>
        <div style={{ height: '1440px', width: '80px', border: '1px solid #ccc' }}>
          {Array.from({ length: 24 }, (_, i) => (
            <div
              key={i}
              style={{
                height: '60px',
                borderBottom: '1px dashed #ddd',
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

      {/* Slider sincronizado */}
      <div>
        <h3>🎛️ Slider Dispositivo</h3>
        <div
          onClick={handleDrag}
          style={{
            height: '1440px',
            width: '40px',
            background: '#f0f0f0',
            position: 'relative',
            cursor: 'pointer',
            border: '1px solid #ccc'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: `${startMin}px`,
              height: `${device.duracion}px`,
              width: '100%',
              background: '#007bff88',
              border: '1px solid #007bff',
              borderRadius: '4px'
            }}
          />
        </div>
        <p><strong>{device.nombre}</strong></p>
        <p>⏰ Inicio: {device.startTime}</p>
        <p>⚡ Consumo: {result.energiaConsumida.toFixed(3)} kWh</p>
        <p>💰 Coste: {result.costeTotal.toFixed(3)} €</p>
      </div>
    </div>
  );
}
