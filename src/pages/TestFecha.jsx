import { useData } from '../hooks/useData';
import { getUpdatedDate } from '../utils/getUpdatedDate';

export default function TestFecha() {
  const { data, loading, error } = useData(true); // asegúrate que useData también retorne `data` completo

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const updatedAt = getUpdatedDate(data);

  return (
    <div>
      <h2>Fecha de actualización</h2>
      <p>{updatedAt ?? 'Fecha no disponible'}</p>
    </div>
  );
}
