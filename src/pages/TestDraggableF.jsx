// src/pages/TestDraggableF.jsx
import TablaVisualSimpleF from '../components/TablaVisualSimpleF';
import DraggableBlockC from '../components/DraggableBlockC'; // reutilizamos este componente
import styles from '../styles/TestDraggableF.module.css';

export default function TestDraggableF() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.scrollZone}>
        <TablaVisualSimpleF />
        <DraggableBlockC />
      </div>
    </div>
  );
}
