import { useEffect, useState } from 'react';
import styles from '../styles/tabla.module.css';

export default function Tabla3() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('/api/getPrices')
      .then(res => res.json())
      .then(data => {
        const values = data.indicator?.values || [];
        const peninsula = values.filter(v => v.geo_name === 'Península');
        setPrices(peninsula);
      });
  }, []);

  const getColor = (price) => {
    if (price < 150) return styles.green;
    if (price < 200) return styles.yellow;
    return styles.red;
  };

  return (
    <table className={styles.tabla}>
      <thead>
        <tr>
          <th>Datetime original</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(({ datetime, value }) => (
          <tr key={datetime}>
            <td>{datetime}</td>
            <td className={getColor(value)}>{(value / 1000).toFixed(4)} €/kWh</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
