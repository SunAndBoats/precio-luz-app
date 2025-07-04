import { useEffect, useState } from 'react';
import styles from '../styles/tabla.module.css';
import { getColorByPrice } from '../utils/getColorByPrice';
import { formatUtcHourRange } from '../utils/formatUtcHourRange';

export default function Tabla5() {
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
            <td>{formatUtcHourRange(datetime)}</td>
            <td className={getColorByPrice(value, styles)}>
              {(value / 1000).toFixed(4)} €/kWh
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
