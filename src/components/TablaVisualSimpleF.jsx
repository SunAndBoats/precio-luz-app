// ✅ src/components/TablaVisualSimpleF.jsx
import styles from '../styles/TablaVisualSimpleF.module.css';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getMinPriceHour } from '../utils/statistics/getMinPriceHour';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';
import { getColorByPriceTier } from '../utils/getColorByPriceTier';

export default function TablaVisualSimpleF() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values);
  const minPrice = getMinPriceHour(data)?.price ?? 0;
  const maxPrice = getMaxPriceHour(data)?.price ?? 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th className={styles.hora}>Hora</th>
              <th className={styles.precio}>Precio (€/kWh)</th>
              <th className={styles.grafico}>Gráfico</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ hour, price }) => {
              const width = (price / maxPrice) * 100 || 0;
              const color = getColorByPriceTier(price, minPrice, maxPrice);

              return (
                <tr key={hour}>
                  <td className={styles.hora}>{hour}</td>
                  <td className={styles.precio}>{price.toFixed(4)}</td>
                  <td className={styles.grafico}>
                    <div
                      className={styles.bar}
                      style={{ width: `${width}%`, backgroundColor: color }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
