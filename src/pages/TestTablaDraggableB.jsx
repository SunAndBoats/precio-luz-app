// src/pages/TestTablaDraggableB.jsx

import { useState } from 'react';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisual from '../components/TablaVisual';
import TimeSlider from '../components/TimeSlider';
import { crearNuevoDispositivo } from '../utils/devices';
import { timeStringToMinutes } from '../utils/timeUtils';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import styles from '../styles/TestTablaDraggableB.module.css';

export default function TestTablaDraggable() {
  const { values, loading, error } = useData();
  const [device, setDevice] = useState(() => {
    const d = crearNuevoDispositivo(1, 'Lavadora');
    d.startTime = '08:00';
    d.duracion = 120;
    d.potencia = 2000;
    return d;
  });

  if (loading) return <p className={styles.msg}>Cargando datos...</p>;
  if (error) return <p className={styles.msg}>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');
  const preciosMinuto = getPrecioPorMinuto(parsed.map(p => p.valor));
  const resultado = calcularCoste(device, preciosMinuto);
  const startMin = timeStringToMinutes(device.startTime);

  function handleDragChange(newStartMin) {
    const safeStart = Math.min(newStartMin, 1440 - device.duracion);
    const hh = String(Math.floor(safeStart / 60)).padStart(2, '0');
    const mm = String(safeStart % 60).padStart(2, '0');
    const newStartTime = `${hh}:${mm}`;
    setDevice({ ...device, startTime: newStartTime });
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🔌 Calculadora Energética</h1>
      </header>

      <section className={styles.layout}>
        <div className={styles.sliderWrapper}>
          <TimeSlider
            startTime={startMin}
            duracion={device.duracion}
            onStartTimeChange={handleDragChange}
          />
        </div>

        <div className={styles.tablaWrapper}>
          <TablaVisual data={parsed} />
        </div>
      </section>

      <footer className={styles.footer}>
        <p><strong>🧺 {device.nombre}</strong></p>
        <p>⏰ Inicio: {device.startTime} — ⌛ Duración: {device.duracion} min</p>
        <p>⚡ Energía: {resultado.energiaConsumida.toFixed(3)} kWh</p>
        <p>💰 Coste total: <strong>{resultado.costeTotal.toFixed(3)} €</strong></p>

        <button className={styles.btn}>Cambiar aparato</button>
      </footer>
    </div>
  );
}
