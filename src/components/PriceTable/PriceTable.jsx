import styles from './PriceTable.module.css';
import { classifyPrice } from '../../utils/classifyPrice';

export default function PriceTable({ prices }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {prices.map(({ hour, value }) => (
          <tr key={hour} className={styles[classifyPrice(value)]}>
            <td>{hour}</td>
            <td>{value.toFixed(4)} €/kWh</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
