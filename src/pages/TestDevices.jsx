import { useState } from 'react';
import { crearNuevoDispositivo } from '../utils/devices';
import DeviceItem from '../components/DeviceItem';
import styles from '../styles/TestDevices.module.css';

export default function TestDevices() {
  const [devices, setDevices] = useState([]);
  const [nextId, setNextId] = useState(1); // contador incremental

  function handleAddDevice() {
    const nuevo = crearNuevoDispositivo(nextId, `Dispositivo ${nextId}`);
    setDevices((prev) => [...prev, nuevo]);
    setNextId((id) => id + 1);
    console.log('🔌 Añadido:', nuevo);
  }

  function handleEditDevice(id) {
    console.log('✏️ Editar (simulado):', id);
    setDevices((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, nombre: d.nombre + ' (editado)' }
          : d
      )
    );
  }

  function handleDeleteDevice(id) {
    console.log('🗑️ Eliminado:', id);
    setDevices((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Test de Dispositivos</h2>
      <button className={styles.button} onClick={handleAddDevice}>
        ➕ Añadir dispositivo
      </button>

      <ul className={styles.list}>
        {devices.map((device) => (
          <DeviceItem
            key={device.id}
            device={device}
            onEdit={handleEditDevice}
            onDelete={handleDeleteDevice}
          />
        ))}
      </ul>

      <pre className={styles.pre}>
        {JSON.stringify(devices, null, 2)}
      </pre>
    </div>
  );
}
