// ✅ src/pages/TestMainPage2.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import styles from '../styles/TestMainPage2.module.css';
import NowPriceBox from '../components/NowPriceBox';
import AverageBox from '../components/AverageBox';
import MinPriceBox from '../components/MinPriceBox';
import MaxPriceBox from '../components/MaxPriceBox';
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';

export default function TestMainPage2() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values, 'Península');

  return (
    <div className={styles.page}>
        <h2>por favorrrr</h2>
      <div className={styles.section}>
        <NowPriceBox data={data} />
      </div>
      <div className={styles.gridSection}>
        <AverageBox data={data} />
        <MinPriceBox data={data} />
        <MaxPriceBox data={data} />
      </div>
      <div className={styles.section}>
        <TablaVisualSimpleE data={data} />
      </div>
    </div>
  );
}
