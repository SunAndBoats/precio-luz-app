// 📄 src/components/DraggableBlockJ.jsx
import { useEffect, useRef, useState } from 'react';
import styles from '../styles/DraggableBlockJ.module.css';

export default function DraggableBlockJ({ containerRef }) {
  const blockRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging || !containerRef.current) return;

    const containerTop = containerRef.current.getBoundingClientRect().top;
    const containerHeight = containerRef.current.offsetHeight;
    let newTop = e.clientY - containerTop;

    newTop = Math.max(0, Math.min(containerHeight, newTop));
    setPosition(newTop);
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  useEffect(() => {
    if (!containerRef.current) return;
    const totalHours = 24;
    const hourHeight = containerRef.current.offsetHeight / totalHours;
    const startHour = Math.floor(position / hourHeight);
    const endHour = Math.ceil((position + blockRef.current.offsetHeight) / hourHeight);
    console.log('Inicio:', startHour, 'Fin:', endHour);
  }, [position, containerRef]);

  return (
    <div
      ref={blockRef}
      className={styles.draggable}
      onMouseDown={handleMouseDown}
      style={{ top: `${position}px` }}
    >
      ↕
    </div>
  );
}