// /src/components/AverageBox.jsx
import styles from '../styles/AverageBox.module.css';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getAverage } from '../utils/statistics/getAverage';

export default function AverageBox() {
  const { values, loading, error } = useData();

  if (loading) return <div className={styles.box + ' ' + styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.box}>Error: {error}</div>;

  const parsed = parseZoneData(values, 'Península');
  const average = getAverage(parsed);

  return (
    <div className={styles.box}>
      <h3 className={styles.label}>Precio medio</h3>
      <p className={styles.value}>{average} €/MWh</p>
    </div>
  );
}
