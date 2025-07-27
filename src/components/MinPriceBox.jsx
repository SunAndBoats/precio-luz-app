// MinPriceBox.jsx - src/components/MinPriceBox.jsx

import styles from '../styles/MinPriceBox.module.css';
import { getMinPriceHour } from '../utils/statistics/getMinPriceHour';
import { getAverage } from '../utils/statistics/getAverage';

export default function MinPriceBox({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const min = getMinPriceHour(data);
  const average = getAverage(data);

  const diffPercent = (((average - min.price) / average) * 100).toFixed(2);

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Precio mínimo</h3>
      <p className={styles.value}>{min.price.toFixed(4)} €/kWh</p>
      <p className={styles.hour}>a las {min.hour}</p>
      <p className={`${styles.diff} ${diffPercent > 0 ? styles.green : styles.red}`}>
        {diffPercent > 0 ? '↓' : '↑'} {Math.abs(diffPercent)}%
      </p>
    </div>
  );
}
