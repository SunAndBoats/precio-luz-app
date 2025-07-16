// src/pages/TestTablaFull.jsx
import { useState } from 'react';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisual from '../components/TablaVisual';
import { crearNuevoDispositivo } from '../utils/devices';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import { timeStringToMinutes } from '../utils/timeUtils';

export default function TestTablaFull() {
  const { values, loading, error } = useData();
  const [device] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Lavavajillas');
    d.startTime = '14:30';
    d.duracion = 90;
    d.potencia = 1800;
    return d;
  });

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');
  const preciosMinuto = getPrecioPorMinuto(parsed.map(p => p.valor));
  const resultado = calcularCoste(device, preciosMinuto);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test Tabla + Dispositivo</h2>
      <p><strong>{device.nombre}</strong> - Inicio: {device.startTime} - Duración: {device.duracion} min</p>
      <p>⚡ Consumo: {resultado.energiaConsumida} kWh</p>
      <p>💰 Coste total: {resultado.costeTotal} €</p>

      <TablaVisual data={parsed} />
    </div>
  );
}
