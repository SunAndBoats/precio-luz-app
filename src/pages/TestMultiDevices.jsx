// src/pages/TestMultiDevices.jsx
import { useState } from 'react';
import DeviceEditor from '../components/DeviceEditor';
import { crearNuevoDispositivo } from '../utils/devices';

export default function TestMultiDevices() {
  const [devices, setDevices] = useState(() =>
    Array.from({ length: 5 }, (_, i) => {
      const d = crearNuevoDispositivo(i + 1, `Dispositivo ${i + 1}`);
      d.startTime = `${String(8 + i).padStart(2, '0')}:00`;
      d.duracion = 60;
      d.potencia = 1000;
      return d;
    })
  );

  function handleDeviceChange(index, updatedDevice) {
    setDevices((prev) => {
      const next = [...prev];
      next[index] = updatedDevice;
      return next;
    });
  }

  return (
    <div style={{ display: 'flex', padding: '2rem' }}>
      {/* Sliders alineados horizontalmente */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {devices.map((device, i) => (
          <DeviceEditor
            key={device.id}
            device={device}
            onChange={(newDevice) => handleDeviceChange(i, newDevice)}
          />
        ))}
      </div>

      {/* Tabla horaria de referencia */}
      <div style={{ marginLeft: '2rem' }}>
        <h4 style={{ textAlign: 'center', fontSize: '14px' }}>🕒 Horas</h4>
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            style={{
              height: '60px',
              fontSize: '12px',
              borderTop: '1px dashed #ccc',
              textAlign: 'center',
              lineHeight: '60px'
            }}
          >
            {String(i).padStart(2, '0')}:00
          </div>
        ))}
      </div>
    </div>
  );
}
