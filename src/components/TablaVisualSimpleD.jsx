import styles from '../styles/TablaVisualSimpleD.module.css';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getMinPriceHour } from '../utils/statistics/getMinPriceHour';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';
import { getColorByPriceTier } from '../utils/getColorByPriceTier';

export default function TablaVisualSimpleD() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values);
  const minPrice = getMinPriceHour(data)?.price ?? 0;
  const maxPrice = getMaxPriceHour(data)?.price ?? 1;

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Precio (€/kWh)</th>
          <th>Gráfico</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ hour, price }) => {
          const width = (price / maxPrice) * 100 || 0;
          const color = getColorByPriceTier(price, minPrice, maxPrice);
          return (
            <tr key={hour}>
              <td>{hour}</td>
              <td>{price.toFixed(4)}</td>
              <td>
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
  );
}
