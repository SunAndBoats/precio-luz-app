// /pages/TestData.jsx
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';

export default function TestData() {
  const { values, updatedAt, loading, error } = useData();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const peninsula = parseZoneData(values, 'Península');

  return (
    <div>
      <h2>Test de Datos</h2>
      <p>Fecha de actualización: {updatedAt}</p>
      <p>Total registros: {values.length}</p>
      <p>Registros en Península: {peninsula.length}</p>
      <pre style={{ fontSize: '0.8rem', background: '#f4f4f4', padding: '1rem' }}>
        {JSON.stringify(peninsula.slice(0, 3), null, 2)}
      </pre>
    </div>
  );
}
