// src/components/TablaVisual.jsx

import styles from '../styles/TablaVisual.module.css';

export default function TablaVisual({ data = [], highlightedHour = null, maxPrice = 0 }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className={styles.warning}>No hay datos disponibles.</p>;
  }

  return (
    <div className={styles.container}>
      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Hora</th>
            <th>Precio</th>
            <th>Barra</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const porcentaje = item.price / maxPrice;
            const color =
              porcentaje < 0.33 ? 'var(--verde)' :
              porcentaje < 0.66 ? 'var(--amarillo)' : 'var(--rojo)';

            return (
              <tr key={index} className={index === highlightedHour ? styles.destacado : ''}>
                <td>{item.hour}</td>
                <td>{item.price.toFixed(3)} €/kWh</td>
                <td>
                  <div
                    className={styles.barra}
                    style={{
                      width: `${Math.min(100, porcentaje * 100)}%`,
                      backgroundColor: color,
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
