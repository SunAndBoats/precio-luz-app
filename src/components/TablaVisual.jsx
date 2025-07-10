// /components/TablaVisual.jsx

import { getColorByPriceTier } from '../utils/getColorByPriceTier';
import { getCurrentTimeHHMM } from '../utils/getCurrentTime'; // asegúrate de tenerlo
import styles from '../styles/tablaVisual.module.css';

/**
 * Componente que muestra tabla visual con colores, barras e indicadores de precio por hora.
 * @param {Array} data - Datos parseados [{ price, hour, datetime }]
 */
export default function TablaVisual({ data }) {
  if (!Array.isArray(data) || data.length !== 24) {
    return <p>Datos inválidos o incompletos</p>;
  }

  const currentHour = new Date().getHours(); // hora local
  const prices = data.map(d => d.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const nowHHMM = getCurrentTimeHHMM(); // ej. "14:37"

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Ahora</th>
          <th>Color</th>
          <th>Franja</th>
          <th>€/kWh</th>
          <th>Visual</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ price, hour, datetime }) => {
          const color = getColorByPriceTier(price, min, max);
          const isNow = hour === currentHour;
          const barWidth = Math.round((price / max) * 100);

          return (
            <tr key={datetime}>
              <td>{isNow ? nowHHMM : ''}</td>
              <td>
                <span
                  style={{
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: color,
                  }}
                />
              </td>
              <td>{`${hour.toString().padStart(2, '0')}:00-${(hour + 1).toString().padStart(2, '0')}:00`}</td>
              <td>{price.toFixed(4)}</td>
              <td>
                <div className={styles.barContainer}>
                  <div
                    className={styles.bar}
                    style={{ width: `${barWidth}%`, backgroundColor: color }}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
 