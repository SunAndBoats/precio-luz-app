// /pages/Estadisticas.jsx

import { usePrices } from '../hooks/usePrices';
import ShowAverage from '../components/ShowAverage';
import ShowAverageCustom from '../components/ShowAverageCustom';
import ShowMedian from '../components/ShowMedian';
import ShowMedianCustom from '../components/ShowMedianCustom';
import ShowStdDev from '../components/ShowStdDev';
import ShowStdDevCustom from '../components/ShowStdDevCustom';
import ShowVariance from '../components/ShowVariance';
import ShowVarianceCustom from '../components/ShowVarianceCustom';

export default function Estadisticas() {
  const { values, loading, error } = usePrices();

  console.log('[Estadisticas] 🚦 Estado:', { loading, error, count: values.length });

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Estadísticas</h2>
      <ShowAverage values={values} />
      <ShowAverageCustom values={values}/>
      <ShowMedian values={values}/>
      <ShowMedianCustom values={values}/>
      <ShowStdDev values={values}/>
      <ShowStdDevCustom values={values}/>
      <ShowVariance values={values}/>
      <ShowVarianceCustom values={values}/>
    </div>
  );
}

