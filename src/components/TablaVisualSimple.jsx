import styles from '../styles/TablaVisualSimple.module.css';
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getColorByPriceTier } from '../utils/getColorByPriceTier';

export default function TablaVisualSimple() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values);

  return (
    <div className={styles.tabla}>
      <div className={styles.rowHeader}>
        <span>Hora</span>
        <span>Precio (€/kWh)</span>
        <span>Gráfico</span>
      </div>

      {parsed.map(({ hour, price }) => {
        const widthPercent = Math.min((price / 0.4) * 100, 100);
        const color = getColorByPriceTier(price);

        return (
          <div key={hour} className={styles.row}>
            <span>{hour}</span>
            <span>{price.toFixed(3)}</span>
            <div className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
