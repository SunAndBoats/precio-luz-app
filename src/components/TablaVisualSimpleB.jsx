// /components/TablaVisualSimpleB.jsx
import styles from '../styles/TablaVisualSimpleB.module.css';
import { getColorByPriceTier } from '../utils/getColorByPriceTier';

export default function TablaVisualSimpleB({ data, min, max }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>Hora</div>
        <div>Precio</div>
        <div>Gráfico</div>
      </div>
      {data.map((item, index) => {
        const color = getColorByPriceTier(item.price, min, max);
        return (
          <div key={index} className={styles.row}>
            <div>{item.hour}</div>
            <div>{item.price.toFixed(4)} €</div>
            <div className={styles.barWrapper}>
              <div
                className={styles.bar}
                style={{
                  width: `${(item.price / max) * 100}%`,
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
