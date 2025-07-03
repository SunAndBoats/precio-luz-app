import { usePrices } from './hooks/usePrices';
import PriceTable from './components/PriceTable/PriceTable';
import styles from './App.module.css';

export default function App() {
  const { prices, loading } = usePrices();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Precio de la Luz Hoy</h1>
      </header>
      {loading ? <p>Cargando datos...</p> : <PriceTable prices={prices} />}
      <footer className={styles.footer}>Datos obtenidos de ESIOS API</footer>
    </div>
  );
}
//working
