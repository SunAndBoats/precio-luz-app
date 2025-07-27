// TestNowPriceBox.jsx - src/pages/TestNowPriceBox.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import NowPriceBox from '../components/NowPriceBox';

export default function TestNowPriceBox() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test NowPriceBox</h2>
      <NowPriceBox data={data} />
    </div>
  );
}
