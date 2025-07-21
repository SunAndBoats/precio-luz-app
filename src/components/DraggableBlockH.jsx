// src/components/DraggableBlockH.jsx
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/DraggableBlockH.module.css';

export default function DraggableBlockH({ containerHeight = 960 }) {
  const blockRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [height, setHeight] = useState(80);
  const dragging = useRef(false);
  const resizingTop = useRef(false);
  const resizingBottom = useRef(false);

  const getHourFromOffset = (offset) => {
    const totalHours = 24;
    const pxPerHour = containerHeight / totalHours;
    return Math.min(totalHours, Math.max(0, offset / pxPerHour));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blockRef.current) return;

      if (dragging.current) {
        const offset = e.clientY - blockRef.current.parentElement.getBoundingClientRect().top;
        const clamped = Math.max(0, Math.min(offset, containerHeight - height));
        setPosition(clamped);
      } else if (resizingTop.current) {
        const blockTop = blockRef.current.getBoundingClientRect().top;
        const offset = blockTop - e.clientY;
        const newHeight = Math.max(20, height + offset);
        const newPosition = Math.max(0, position - offset);
        setHeight(newHeight);
        setPosition(newPosition);
      } else if (resizingBottom.current) {
        const offset = e.clientY - blockRef.current.getBoundingClientRect().bottom;
        const newHeight = Math.max(20, height + offset);
        setHeight(newHeight);
      }
    };

    const stopDrag = () => {
      dragging.current = false;
      resizingTop.current = false;
      resizingBottom.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDrag);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDrag);
    };
  }, [height, position]);

  const hourStart = getHourFromOffset(position);
  const hourEnd = getHourFromOffset(position + height);
  console.log(`Inicio: ${hourStart.toFixed(2)}h, Fin: ${hourEnd.toFixed(2)}h`);

  return (
    <div
      ref={blockRef}
      className={styles.container}
      style={{ top: position, height }}
      onMouseDown={(e) => {
        if (e.target.classList.contains(styles.resizeTop)) resizingTop.current = true;
        else if (e.target.classList.contains(styles.resizeBottom)) resizingBottom.current = true;
        else dragging.current = true;
      }}
    >
      <div className={styles.resizeTop} />
      <div className={styles.content}>Drag</div>
      <div className={styles.resizeBottom} />
    </div>
  );
}
