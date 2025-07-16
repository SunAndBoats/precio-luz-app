import styles from '../styles/TestDevices.module.css';

export default function DeviceItem({ device, onEdit, onDelete }) {
  const { nombre, startTime, duracion, potencia } = device;

  return (
    <li className={styles.device}>
      <strong>{nombre}</strong> - Inicio: {startTime}, Duración: {duracion} min, Potencia: {potencia}W
      <div className={styles.actions}>
        <button onClick={() => onEdit(device.id)}>✏️ Editar</button>
        <button onClick={() => onDelete(device.id)}>🗑️ Eliminar</button>
      </div>
    </li>
  );
}
