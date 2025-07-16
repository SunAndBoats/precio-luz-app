// src/pages/TestTablaDraggable.jsx
import { useState } from 'react';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { crearNuevoDispositivo } from '../utils/devices';
import TablaVisual from '../components/TablaVisual';
import TimeSlider from '../components/TimeSlider';
import { timeStringToMinutes } from '../utils/timeUtils';

export default function TestTablaDraggable() {
  const { values, loading, error } = useData();
  const [device, setDevice] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Lavadora');
    d.startTime = '08:00';
    d.duracion = 120;
    d.potencia = 2000;
    return d;
  });

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');
  const startMin = timeStringToMinutes(device.startTime);

  function handleDragChange(newStartMin) {
    const safeStart = Math.min(newStartMin, 1440 - device.duracion);
    const hh = String(Math.floor(safeStart / 60)).padStart(2, '0');
    const mm = String(safeStart % 60).padStart(2, '0');
    const newStartTime = `${hh}:${mm}`;
    setDevice({ ...device, startTime: newStartTime });
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test Tabla con Draggable Alineado</h2>
      <p>📦 {device.nombre} - ⏰ {device.startTime} - 🕒 {device.duracion} min</p>

      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* Barra vertical alineada */}
        <div style={{ height: '1440px', marginRight: '2rem' }}>
          <TimeSlider
            startTime={startMin}
            duracion={device.duracion}
            onStartTimeChange={handleDragChange}
          />
        </div>

        {/* Tabla Visual: 24 bloques de 60px de alto */}
        <div style={{ flexGrow: 1 }}>
          <TablaVisual data={parsed} />
        </div>
      </div>
    </div>
  );
}
