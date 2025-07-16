// src/components/DeviceEditor.jsx
import TimeSlider from './TimeSlider';
import { timeStringToMinutes } from '../utils/timeUtils';

export default function DeviceEditor({ device, onChange }) {
  const startMin = timeStringToMinutes(device.startTime);

  function handleDragChange(newStartMin) {
    const newStart = Math.min(newStartMin, 1440 - device.duracion);
    const hh = String(Math.floor(newStart / 60)).padStart(2, '0');
    const mm = String(newStart % 60).padStart(2, '0');
    const newStartTime = `${hh}:${mm}`;
    onChange({ ...device, startTime: newStartTime });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <strong style={{ marginBottom: '0.5rem' }}>{device.nombre}</strong>
      <TimeSlider
        startTime={startMin}
        duracion={device.duracion}
        onStartTimeChange={handleDragChange}
      />
    </div>
  );
}
