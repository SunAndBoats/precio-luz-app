// /pages/TestHoraNoUtc.jsx
import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';

export default function TestHoras() {
  const { values, loading } = useData();

  if (loading) return <p>Cargando...</p>;

  const data = parseZoneData(values);
  return (
    <div>
      <h2>Horas de los datos</h2>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            {item.datetime} → {item.hour}:00
          </li>
        ))}
      </ul>
    </div>
  );
}
