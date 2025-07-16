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
    <div style={{ display: 'flex', padding: '2rem', gap: '3rem' }}>
      <div style={{ flex: '1' }}>
        <h2>⚙️ Múltiples Dispositivos</h2>
        {devices.map((d, i) => (
          <DeviceEditor
            key={d.id}
            device={d}
            onChange={(newDevice) => handleDeviceChange(i, newDevice)}
          />
        ))}
      </div>

      <div style={{ width: '200px', borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
        <h4>🕒 Tabla Horaria</h4>
        {Array.from({ length: 24 }, (_, i) => (
          <div key={i} style={{ height: '60px', borderTop: '1px dashed #ddd' }}>
            {String(i).padStart(2, '0')}:00
          </div>
        ))}
      </div>
    </div>
  );
}
