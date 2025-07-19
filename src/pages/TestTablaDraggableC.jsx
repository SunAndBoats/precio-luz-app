// pages/TestDraggableC.jsx
import { useState, useRef, useEffect } from 'react';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisual from '../components/TablaVisual';
import TimeSlider from '../components/TimeSlider';
import ResumenDispositivo from '../components/ResumenDispositivo';
import { crearNuevoDispositivo } from '../utils/devices';
import { timeStringToMinutes } from '../utils/timeUtils';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';
import styles from '../styles/TestTablaDraggableC.module.css';

export default function TestDraggableC() {
  const { values, loading, error } = useData();
  const scrollRef = useRef(null);

  const [device, setDevice] = useState(() => {
    const nuevo = crearNuevoDispositivo(1, 'Lavadora');
    nuevo.startTime = '08:00';
    nuevo.duracion = 120;
    nuevo.potencia = 2000;
    return nuevo;
  });

  const startMin = timeStringToMinutes(device.startTime);

  // Sincronización de scroll
  useEffect(() => {
    const cont = scrollRef.current;
    if (!cont) return;

    const minutos = timeStringToMinutes(device.startTime);
    const ratio = minutos / 1440;
    cont.scrollTop = cont.scrollHeight * ratio;
  }, [device.startTime]);

  if (loading) return <p className={styles.msg}>Cargando datos...</p>;
  if (error) return <p className={styles.msg}>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');
  const preciosPorMinuto = getPrecioPorMinuto(parsed.map(p => p.price));
  const resultado = calcularCoste(device, preciosPorMinuto);

  function handleDragChange(newStartMin) {
    const safeStart = Math.min(newStartMin, 1440 - device.duracion);
    const hh = String(Math.floor(safeStart / 60)).padStart(2, '0');
    const mm = String(safeStart % 60).padStart(2, '0');
    setDevice(prev => ({ ...prev, startTime: `${hh}:${mm}` }));
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🧠 Test Draggable Scroll Sincronizado</h1>
      </header>

      <ResumenDispositivo device={device} resultado={resultado} />

      <div ref={scrollRef} className={styles.scrollContainer}>
        <div className={styles.layout}>
          <div className={styles.tablaWrapper}>
            <TablaVisual data={parsed} highlightStartMin={startMin} duracion={device.duracion} />
          </div>
          <div className={styles.sliderWrapper}>
            <TimeSlider
              startTime={startMin}
              duracion={device.duracion}
              onStartTimeChange={handleDragChange}
              scrollRef={scrollRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
