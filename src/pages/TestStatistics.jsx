import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';

import { getAverage } from '../utils/statistics/getAverage';
import { getMedian } from '../utils/statistics/getMedian';
import { getStdDev } from '../utils/statistics/getStdDev';
import { getVariance } from '../utils/statistics/getVariance';

export default function TestStatistics() {
  const { values, updatedAt, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values, 'Península');

  const average = getAverage(parsed);
  const median = getMedian(parsed);
  const stdDev = getStdDev(parsed);
  const variance = getVariance(parsed);

  return (
    <div>
      <h2>📊 Test Estadísticas</h2>
      <p><strong>Actualizado:</strong> {updatedAt}</p>

      <ul>
        <li><strong>Media:</strong> {average}</li>
        <li><strong>Mediana:</strong> {median}</li>
        <li><strong>Desviación típica:</strong> {stdDev}</li>
        <li><strong>Varianza:</strong> {variance}</li>
      </ul>
    </div>
  );
}
