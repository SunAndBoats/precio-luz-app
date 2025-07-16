import { useState, useMemo } from 'react';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import { crearNuevoDispositivo } from '../utils/devices';
import { timeStringToMinutes, minutesToTimeString, getEndTime } from '../utils/timeUtils';
import TimeSlider from '../components/TimeSlider';

export default function TestDraggable() {
  const [device, setDevice] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Lavadora');
    d.startTime = '08:00';
    d.duracion = 120;
    return d;
  });

  const preciosPorHora = useMemo(() => Array(24).fill(0.10), []);
  const preciosPorMinuto = useMemo(() => getPrecioPorMinuto(preciosPorHora), []);
  const resultado = useMemo(() => calcularCoste(device, preciosPorMinuto), [device, preciosPorMinuto]);

  const startMin = timeStringToMinutes(device.startTime);
  const endTime = getEndTime(device.startTime, device.duracion);

  function handleSliderChange(newStartMin) {
    const nuevaHora = minutesToTimeString(newStartMin);
    setDevice((prev) => ({
      ...prev,
      startTime: nuevaHora
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setDevice((prev) => ({
      ...prev,
      [name]: name === 'startTime' ? value : parseInt(value) || 0
    }));
  }

  return (
    <div style={{ display: 'flex', padding: '2rem', gap: '2rem' }}>
      <div>
        <h2>🧪 Test Draggable</h2>
        <label>
          Hora inicio:
          <input name="startTime" type="time" value={device.startTime} onChange={handleChange} />
        </label>
        <br /><br />

        <label>
          Duración (min):
          <input name="duracion" type="number" value={device.duracion} onChange={handleChange} min="1" max="1440" />
        </label>
        <br /><br />

        <label>
          Potencia (W):
          <input name="potencia" type="number" value={device.potencia} onChange={handleChange} min="1" />
        </label>

        <hr />

        <p>⏱ Hora fin: <strong>{endTime}</strong></p>
        <p>⚡ Energía: <strong>{resultado.energiaConsumida}</strong> kWh</p>
        <p>💰 Coste: <strong>{resultado.costeTotal}</strong> €</p>
      </div>

      <TimeSlider
        startTime={timeStringToMinutes(device.startTime)}
        duracion={device.duracion}
        onStartTimeChange={handleSliderChange}
      />
    </div>
  );
}
