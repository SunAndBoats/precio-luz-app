// TestOnlyTable.jsx - src/pages/TestOnlyTable.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';

export default function TestOnlyTable() {
  const { values, loading, error } = useData();
  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;
  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>🧪 Test Tabla Visual</h2>
      <TablaVisualSimpleE data={data} />
    </div>
  );
}
