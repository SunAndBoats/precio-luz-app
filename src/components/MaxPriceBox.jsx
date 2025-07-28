// MaxPriceBox.jsx - src/components/MaxPriceBox.jsx

import styles from '../styles/MaxPriceBox.module.css';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';
import { getAverage } from '../utils/statistics/getAverage';

export default function MaxPriceBox({ data }) {
  if (!Array.isArray(data) || data.length === 0) return null;

  const max = getMaxPriceHour(data);
  const average = getAverage(data);

  const diffPercent = (((max.price - average) / average) * 100).toFixed(2);

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Precio máximo de hoy</h3>
      <p className={styles.hour}>
        de {String(max.hour).padStart(2, '0')}:00 a {String(max.hour + 1).padStart(2, '0')}:00
      </p>

      <p className={styles.value}>{max.price.toFixed(4)} €/kWh</p>
      
      <p className={styles.diff}>
        <span className={diffPercent > 0 ? styles.red : styles.green}>
          {Math.abs(diffPercent)}%
        </span>{' '}
        {diffPercent > 0 ? 'más caro' : 'más barato'} que la media
      </p>
    </div>
  );
}
