import { useMemo } from 'react';
import TimeSlider from './TimeSlider';
import { calcularCoste } from '../utils/costCalculator';
import { timeStringToMinutes, minutesToTimeString, getEndTime } from '../utils/timeUtils';

export default function DeviceEditor({ device, onChange }) {
  const precios = Array(24).fill(0.10);
  const preciosMinuto = useMemo(() => {
    return Array(1440).fill(0.10);
  }, []);

  const resultado = useMemo(() => calcularCoste(device, preciosMinuto), [device]);

  const startMin = timeStringToMinutes(device.startTime);
  const endTime = getEndTime(device.startTime, device.duracion);

  function handleInput(e) {
    const { name, value } = e.target;
    const val = name === 'startTime' ? value : parseInt(value) || 0;
    onChange({ ...device, [name]: val });
  }

  function handleDragChange(newStartMin) {
    const nuevaHora = minutesToTimeString(newStartMin);
    onChange({ ...device, startTime: nuevaHora });
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <div style={{ minWidth: '250px' }}>
        <h4>{device.nombre}</h4>

        <label>
          Hora inicio:
          <input name="startTime" type="time" value={device.startTime} onChange={handleInput} />
        </label>
        <br />

        <label>
          Duración:
          <input name="duracion" type="number" value={device.duracion} onChange={handleInput} min={1} />
        </label>
        <br />

        <label>
          Potencia:
          <input name="potencia" type="number" value={device.potencia} onChange={handleInput} min={1} />
        </label>

        <p><small>Fin: {endTime}</small></p>
        <p>⚡ {resultado.energiaConsumida} kWh</p>
        <p>💰 {resultado.costeTotal} €</p>
      </div>

      <TimeSlider
        startTime={startMin}
        duracion={device.duracion}
        onStartTimeChange={handleDragChange}
      />
    </div>
  );
}
