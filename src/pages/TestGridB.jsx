// /pages/TestGridB.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisualSimpleB from '../components/TablaVisualSimpleB';

export default function TestGridB() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values);

  return (
    <div>
      <h2>Test Tabla Visual Simple B</h2>
      <TablaVisualSimpleB data={parsed} />
    </div>
  );
}
