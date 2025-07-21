// src/components/DraggableBlockC.jsx
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/DraggableBlockC.module.css';

const TOTAL_HOURS = 24;
const CONTAINER_HEIGHT = 600;
const MIN_HEIGHT = 20;

function positionToHour(top, height) {
  const start = Math.max(0, (top / CONTAINER_HEIGHT) * TOTAL_HOURS);
  const end = Math.min(24, ((top + height) / CONTAINER_HEIGHT) * TOTAL_HOURS);
  return [start, end];
}

export default function DraggableBlockC() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ top: 100, height: 80 });

  useEffect(() => {
    const [start, end] = positionToHour(position.top, position.height);
    console.log(`🕒 Inicio: ${start.toFixed(2)}h - Fin: ${end.toFixed(2)}h`);
  }, [position]);

  const handleDrag = (e) => {
    const containerTop = containerRef.current.getBoundingClientRect().top;
    let newTop = e.clientY - containerTop - position.height / 2;
    newTop = Math.max(0, Math.min(newTop, CONTAINER_HEIGHT - position.height));
    setPosition({ ...position, top: newTop });
  };

  const handleResize = (e, dir) => {
    e.preventDefault();
    const startY = e.clientY;
    const startTop = position.top;
    const startHeight = position.height;

    const onMove = (moveEvent) => {
      const delta = moveEvent.clientY - startY;
      if (dir === 'top') {
        const newTop = Math.min(startTop + delta, startTop + startHeight - MIN_HEIGHT);
        const newHeight = startHeight - delta;
        if (newHeight >= MIN_HEIGHT && newTop >= 0) {
          setPosition({ top: newTop, height: newHeight });
        }
      } else {
        const newHeight = Math.max(MIN_HEIGHT, startHeight + delta);
        if (startTop + newHeight <= CONTAINER_HEIGHT) {
          setPosition({ top: startTop, height: newHeight });
        }
      }
    };

    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <div
        className={styles.block}
        style={{ top: position.top, height: position.height }}
        onMouseDown={handleDrag}
      >
        <div className={styles.resizeTop} onMouseDown={(e) => handleResize(e, 'top')} />
        <div className={styles.resizeBottom} onMouseDown={(e) => handleResize(e, 'bottom')} />
      </div>
    </div>
  );
}
