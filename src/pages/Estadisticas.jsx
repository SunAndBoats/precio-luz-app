// /pages/Estadisticas.jsx
import StatisticsAverage from '../components/StatisticsAverage';
import StatisticsMedian from '../components/StatisticsMedian';
import StatisticsVariance from '../components/StatisticsVariance';
import StatisticsStdDev from '../components/StatisticsStdDev';

export default function Estadisticas({ values }) {
  
  return (
    console.log('Values recibidos:', values);
    console.log('Estadisticas: values =', values);
if (!Array.isArray(values)) {
  return <p>Error: values no es un array (es {typeof values})</p>;
}
    <div>
      <h2>Estadísticas por zona</h2>
      <StatisticsAverage values={values} />
      <StatisticsMedian values={values} />
      <StatisticsVariance values={values} />
      <StatisticsStdDev values={values} />
    </div>
  );
}