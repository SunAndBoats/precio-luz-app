// TestOnlyStats.jsx - src/pages/TestOnlyStats.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import NowPriceBox from '../components/NowPriceBox';
import AverageBox from '../components/AverageBox';
import MinPriceBox from '../components/MinPriceBox';
import MaxPriceBox from '../components/MaxPriceBox';

export default function TestOnlyStats() {
  const { values, loading, error } = useData();
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;
  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>🧪 Test Estadísticas</h2>
      <div style={{ marginBottom: '2rem' }}>
        <NowPriceBox data={data} />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        <MaxPriceBox data={data} />
        <MinPriceBox data={data} />
        <AverageBox data={data} />
      </div>
    </div>
  );
}
