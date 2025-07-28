// ✅ src/components/NowPriceBox.jsx


import React from 'react';
import styles from '../styles/NowPriceBox.module.css';

export default function NowPriceBox({ data }) {
  const now = new Date();
  const currentHour = now.getHours();
  const item = data.find((item) => item.hour === currentHour);

  if (!item) return null;

  const dateStr = now.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long'
  });

  const timeStr = now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={styles.nowBox}>
      <h2 className={styles.title}>¿Cuál es el precio de la luz ahora?</h2>
      <p className={styles.text}>
        El precio de la luz hoy {dateStr} a las {timeStr} es de{' '}
        <strong>{item.price} €/kWh</strong>
      </p>
    </div>
  );
}
