// MaxPriceBox.jsx - src/components/MaxPriceBox.jsx

import styles from '../styles/MaxPriceBox.module.css';
import { getAverage } from '../utils/statistics/getAverage';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';

export default function MaxPriceBox({ data }) {
  const max = getMaxPriceHour(data);
  const average = getAverage(data);

  if (!max || !average) return null;

  const diffPercentage = ((max.price - average) / average) * 100;
  const diffColor = diffPercentage >= 0 ? styles.red : styles.green;

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>Precio máximo</h3>
      <p className={styles.time}>{max.hour}h</p>
      <p className={styles.price}>{max.price.toFixed(3)} €/kWh</p>
      <p className={`${styles.diff} ${diffColor}`}>
        {diffPercentage >= 0 ? '+' : ''}
        {diffPercentage.toFixed(2)}%
      </p>
    </div>
  );
}
