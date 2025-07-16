import { useState, useMemo } from 'react';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import { crearNuevoDispositivo } from '../utils/devices';

export default function TestInputs() {
  const [device, setDevice] = useState(() =>
    crearNuevoDispositivo(1, 'Dispositivo editable')
  );

  const preciosPorHora = useMemo(() =>
    Array(24).fill(0.30) // Precio fijo de 0.30 €/kWh
  , []);

  const preciosPorMinuto = useMemo(() =>
    getPrecioPorMinuto(preciosPorHora)
  , [preciosPorHora]);

  const resultado = useMemo(() =>
    calcularCoste(device, preciosPorMinuto)
  , [device, preciosPorMinuto]);

  function handleChange(e) {
    const { name, value } = e.target;
    setDevice((prev) => ({
      ...prev,
      [name]: name === 'nombre' ? value :
               name === 'startTime' ? value :
               parseInt(value) || 0
    }));
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test Inputs Editables</h2>

      <label>
        Nombre:
        <input
          name="nombre"
          value={device.nombre}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Hora de inicio:
        <input
          name="startTime"
          type="time"
          value={device.startTime}
          onChange={handleChange}
        />
      </label>
      <br /><br />

      <label>
        Duración (min):
        <input
          name="duracion"
          type="number"
          value={device.duracion}
          onChange={handleChange}
          min="1"
          max="1440"
        />
      </label>
      <br /><br />

      <label>
        Potencia (W):
        <input
          name="potencia"
          type="number"
          value={device.potencia}
          onChange={handleChange}
          min="1"
        />
      </label>

      <hr />

      <p>⚡ <strong>Energía Consumida:</strong> {resultado.energiaConsumida} kWh</p>
      <p>💰 <strong>Precio de luz: 0.3 euros/kWh</strong> {resultado.costeTotal} €</p>
      <p>💰 <strong>Coste:</strong> {resultado.costeTotal} €</p>

      <pre style={{
        background: '#eee',
        padding: '1rem',
        borderRadius: '6px',
        marginTop: '1rem'
      }}>
        {JSON.stringify(device, null, 2)}
      </pre>
    </div>
  );
}
