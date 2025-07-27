// TestMinPriceBox.jsx - src/pages/TestMinPriceBox.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import MinPriceBox from '../components/MinPriceBox';

export default function TestMinPriceBox() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test MinPriceBox</h2>
      <MinPriceBox data={data} />
    </div>
  );
}
