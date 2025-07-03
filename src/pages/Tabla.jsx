import { useEffect, useState } from 'react';
import styles from '../styles/tabla.module.css';

export default function Tabla() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('/api/getPrices')
      .then(res => res.json())
      .then(data => {
        // Adaptar estructura del JSON a lo que uses
        const values = data.indicator?.values || [];
        setPrices(values);
      });
  }, []);

  const getColor = (price) => {
    if (price < 0.15) return styles.green;
    if (price < 0.20) return styles.yellow;
    return styles.red;
  };

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(({ datetime, value }) => (
          <tr key={datetime}>
            <td>{new Date(datetime).getHours()}:00</td>
            <td className={getColor(value)}>{(value / 1000).toFixed(4)} €/kWh</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
