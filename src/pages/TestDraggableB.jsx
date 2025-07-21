// src/pages/testdraggableB.jsx
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';
import DraggableBlock from '../components/DraggableBlock';
import styles from '../styles/TestDraggableWrapper.module.css';

export default function TestDraggableB() {
  return (
    <div>
    <h1>Prueba de tabla mas wrapper</h1>
    <p>Se mueve haciendo clic y cambia su tamaño moviendo sus bordes. 
        hay que corregir que la altura del draggable es diferente que la de la tabla y no devuelve datos de consumo</p>
    <div className={styles.wrapper}>

      <TablaVisualSimpleE />
      <DraggableBlock />
    </div>
    </div>
  );
}
