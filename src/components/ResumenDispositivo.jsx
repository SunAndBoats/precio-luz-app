// src/components/ResumenDispositivo.jsx
import styles from '../styles/ResumenDispositivo.module.css';

export default function ResumenDispositivo({ device, resultado }) {
  return (
    <div className={styles.resumen}>
      <h2>🔌 {device.nombre}</h2>
      <p>⏰ Inicio: {device.startTime} — ⌛ Duración: {device.duracion} min</p>
      <p>⚡ Energía: {resultado.energiaConsumida.toFixed(3)} kWh</p>
      <p>💰 Coste total: <strong>{resultado.costeTotal.toFixed(3)} €</strong></p>
      <button className={styles.btn}>Cambiar aparato</button>
    </div>
  );
}