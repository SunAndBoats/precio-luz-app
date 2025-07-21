// src/components/DraggableBlock.jsx
import { useRef, useState, useEffect } from 'react';
import styles from '../styles/DraggableBlock.module.css';

const TOTAL_HOURS = 24;
const BLOCK_CONTAINER_HEIGHT = 600; // px, deberías ajustar al de tu tabla
const MIN_BLOCK_HEIGHT = 20; // px mínimos de altura del bloque

function positionToHour(topPx, heightPx) {
  const hourStart = Math.max(0, (topPx / BLOCK_CONTAINER_HEIGHT) * TOTAL_HOURS);
  const hourEnd = Math.min(24, ((topPx + heightPx) / BLOCK_CONTAINER_HEIGHT) * TOTAL_HOURS);
  return [hourStart, hourEnd];
}

export default function DraggableBlock() {
  const containerRef = useRef(null);
  const blockRef = useRef(null);
  const [position, setPosition] = useState({ top: 100, height: 80 });

  useEffect(() => {
    const [start, end] = positionToHour(position.top, position.height);
    console.log(`⏱️ Inicio: ${start.toFixed(2)}h - Fin: ${end.toFixed(2)}h`);
  }, [position]);

  // Arrastrar bloque
  const handleDrag = (e) => {
    const containerTop = containerRef.current.getBoundingClientRect().top;
    let newTop = e.clientY - containerTop - position.height / 2;
    newTop = Math.max(0, Math.min(newTop, BLOCK_CONTAINER_HEIGHT - position.height));
    setPosition((prev) => ({ ...prev, top: newTop }));
  };

  // Redimensionar
  const handleResize = (e, direction) => {
    e.preventDefault();
    const startY = e.clientY;
    const startTop = position.top;
    const startHeight = position.height;

    const onMove = (moveEvent) => {
      const deltaY = moveEvent.clientY - startY;
      if (direction === 'top') {
        const newTop = Math.min(startTop + deltaY, startTop + startHeight - MIN_BLOCK_HEIGHT);
        const newHeight = startHeight - deltaY;
        if (newHeight >= MIN_BLOCK_HEIGHT && newTop >= 0) {
          setPosition({ top: newTop, height: newHeight });
        }
      } else {
        const newHeight = Math.max(MIN_BLOCK_HEIGHT, startHeight + deltaY);
        if (startTop + newHeight <= BLOCK_CONTAINER_HEIGHT) {
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
    <div ref={containerRef} className={styles.container} style={{ height: BLOCK_CONTAINER_HEIGHT }}>
      <div
        ref={blockRef}
        className={styles.block}
        style={{ top: position.top, height: position.height }}
        onMouseDown={handleDrag}
      >
        <div
          className={styles.resizeHandleTop}
          onMouseDown={(e) => handleResize(e, 'top')}
        />
        <div
          className={styles.resizeHandleBottom}
          onMouseDown={(e) => handleResize(e, 'bottom')}
        />
      </div>
    </div>
  );
}
