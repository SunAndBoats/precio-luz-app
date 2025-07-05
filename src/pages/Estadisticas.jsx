// /pages/Estadisticas.jsx
import StatisticsAverage from '../components/StatisticsAverage';
import StatisticsMedian from '../components/StatisticsMedian';
import StatisticsVariance from '../components/StatisticsVariance';
import StatisticsStdDev from '../components/StatisticsStdDev';

export default function Estadisticas({ values }) {
  console.log('Values recibidos:', values);
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