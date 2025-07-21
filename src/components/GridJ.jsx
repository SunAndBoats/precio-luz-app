// 📄 src/components/GridJ.jsx
import styles from '../styles/GridJ.module.css';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getMinPriceHour } from '../utils/statistics/getMinPriceHour';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';
import { getColorByPriceTier } from '../utils/getColorByPriceTier';

export default function GridJ() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values);
  const minPrice = getMinPriceHour(data)?.price ?? 0;
  const maxPrice = getMaxPriceHour(data)?.price ?? 1;

  return (
    <div className={styles.container}>
      {data.map(({ hour, price }) => {
        const width = (price / maxPrice) * 100 || 0;
        const color = getColorByPriceTier(price, minPrice, maxPrice);

        return (
          <div key={hour} className={styles.row}>
            <span className={styles.hour}>{hour}</span>
            <span className={styles.price}>{price.toFixed(4)}</span>
            <div className={styles.barContainer}>
              <div
                className={styles.bar}
                style={{ width: `${width}%`, backgroundColor: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
