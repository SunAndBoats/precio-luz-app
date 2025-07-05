import { usePrices } from '../hooks/usePrices';
import StatisticsAverage from '../components/StatisticsAverage';
import StatisticsMedian from '../components/StatisticsMedian';
import StatisticsVariance from '../components/StatisticsVariance';
import StatisticsStdDev from '../components/StatisticsStdDev';

export default function Estadisticas() {
  const { values, loading, error } = usePrices();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Estadísticas por zona</h2>
      <StatisticsAverage values={values} />
      <StatisticsMedian values={values} />
      <StatisticsVariance values={values} />
      <StatisticsStdDev values={values} />
    </div>
  );
}
