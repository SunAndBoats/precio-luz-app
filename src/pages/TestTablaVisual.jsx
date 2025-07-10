// /pages/TestVisual.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import TablaVisual from '../components/TablaVisual';

export default function TestVisual() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');

  return (
    <div>
      <h2>Visualización de precios por hora</h2>
      <TablaVisual data={parsed} />
    </div>
  );
}
