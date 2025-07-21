// 📄 src/pages/TestGridJ.jsx
import GridJ from '../components/GridJ';
import DraggableBlockJ from '../components/DraggableBlockJ';
import styles from '../styles/TestGridJ.module.css';
import { useRef } from 'react';

export default function TestGridJ() {
  const containerRef = useRef();

  return (
    <div>
        <h2>Test Grid J</h2>
        <div className={styles.wrapper}>
        
        <div ref={containerRef} className={styles.gridContainer}>
            <GridJ />
            <DraggableBlockJ containerRef={containerRef} />
        </div>
        </div>
    </div>
  );
}
