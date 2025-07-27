// TestMaxPriceBox.jsx - src/pages/TestMaxPriceBox.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import MaxPriceBox from '../components/MaxPriceBox';

export default function TestMaxPriceBox() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test MaxPriceBox</h2>
      <MaxPriceBox data={data} />
    </div>
  );
}
