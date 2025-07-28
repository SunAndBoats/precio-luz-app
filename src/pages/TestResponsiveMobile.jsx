// TestResponsiveMobile.jsx - src/pages/TestResponsiveMobile.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import NowPriceBox from '../components/NowPriceBox';
import AverageBox from '../components/AverageBox';
import MinPriceBox from '../components/MinPriceBox';
import MaxPriceBox from '../components/MaxPriceBox';
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';

export default function TestResponsiveMobile() {
  const { values, loading, error } = useData();
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;
  const data = parseZoneData(values, 'Península');

  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        border: '1px solid #ccc'
      }}
    >
      <h2 style={{ fontSize: '1.1rem' }}>🧪 Vista Móvil</h2>

      <div style={{ marginBottom: '1rem' }}>
        <NowPriceBox data={data} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <AverageBox data={data} />
        <MinPriceBox data={data} />
        <MaxPriceBox data={data} />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <TablaVisualSimpleE data={data} />
      </div>
    </div>
  );
}
