import { useRef, useEffect } from 'react';
import styles from '../styles/TimeSlider.module.css';
import { minutesToTimeString } from '../utils/timeUtils';

export default function TimeSlider({ startTime, duracion, onStartTimeChange }) {
  const barRef = useRef(null);
  const dragRef = useRef(null);

  const startMin = Math.min(Math.max(0, startTime), 1440 - duracion);
  const height = duracion; // 1px por minuto
  const top = startMin;

  useEffect(() => {
    const bar = barRef.current;
    const drag = dragRef.current;
    let offsetY = 0;

    function onMouseDown(e) {
      offsetY = e.clientY - drag.getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    function onMouseMove(e) {
      const barTop = bar.getBoundingClientRect().top;
      const y = e.clientY - barTop - offsetY;
      const clamped = Math.min(Math.max(0, y), 1440 - height);
      const newStartMin = Math.round(clamped);
      onStartTimeChange(newStartMin);
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    drag.addEventListener('mousedown', onMouseDown);
    return () => {
      drag.removeEventListener('mousedown', onMouseDown);
    };
  }, [duracion, onStartTimeChange]);

  return (
    <div className={styles.slider}>
      <div ref={barRef} className={styles.track}>
        <div
          ref={dragRef}
          className={styles.handle}
          style={{
            top: `${top}px`,
            height: `${height}px`
          }}
          title={`Inicio: ${minutesToTimeString(startMin)}`}
        />
      </div>
    </div>
  );
}
