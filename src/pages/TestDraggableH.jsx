// /pages/TestDraggableH.jsx
import TablaVisualSimpleH from '../components/TablaVisualSimpleH';
import DraggableBlockH from '../components/DraggableBlockH';
import styles from '../styles/TestDraggableH.module.css';

export default function TestDraggableH() {
  return (
    <div className={styles.page}>
      <h1>Test Draggable y Tabla H</h1>
      <div className={styles.sharedWrapper}>
        <div className={styles.scrollZone}>
          <TablaVisualSimpleH />
          <DraggableBlockH containerHeight={960} />
        </div>
      </div>
    </div>
  );
}
