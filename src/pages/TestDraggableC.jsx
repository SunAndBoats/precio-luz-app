// src/pages/testdraggableC.jsx
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';
import DraggableBlockC from '../components/DraggableBlockC';
import styles from '../styles/TestDraggableC.module.css';

export default function TestDraggableC() {
  return (
    <div className={styles.page}>
      <h2>Test Tabla + DraggableC</h2>
      <div className={styles.scrollZone}>
        <TablaVisualSimpleE />
        <DraggableBlockC />
      </div>
    </div>
  );
}
