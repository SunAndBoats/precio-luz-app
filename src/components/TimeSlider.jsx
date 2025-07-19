// src/components/TimeSlider.jsx
import { useEffect, useRef } from 'react';
import styles from '../styles/TimeSlider.module.css';

export default function TimeSlider({ startTime, onChange, scrollRef }) {
  const sliderRef = useRef(null);

  // Scroll automático al tiempo inicial (espera formato 'HH:MM')
  useEffect(() => {
    if (!scrollRef?.current || typeof startTime !== 'string' || !startTime.includes(':')) {
      console.warn('⛔ startTime no tiene el formato esperado: "HH:MM"', startTime);
      return;
    }

    const [hh, mm] = startTime.split(':').map(Number);
    const targetMinute = hh * 60 + mm;

    const container = scrollRef.current;
    const totalHeight = container.scrollHeight;
    const scrollPosition = (targetMinute / 1440) * totalHeight;

    container.scrollTop = scrollPosition;
  }, [startTime, scrollRef]);

  const handleClick = (e) => {
    if (!scrollRef?.current) return;

    const container = scrollRef.current;
    const rect = container.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const totalHeight = container.scrollHeight;

    const minuto = Math.floor((clickY / totalHeight) * 1440);
    const hh = String(Math.floor(minuto / 60)).padStart(2, '0');
    const mm = String(minuto % 60).padStart(2, '0');
    const nuevaHora = `${hh}:${mm}`;
    onChange(nuevaHora);
  };

  return (
    <div className={styles.sliderOverlay} onClick={handleClick}>
      <div className={styles.sliderBar} />
    </div>
  );
}
