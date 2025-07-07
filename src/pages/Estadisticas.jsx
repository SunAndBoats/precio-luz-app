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
import ShowCheapestHours from '../components/ShowCheapestHours';
import ShowMinMaxPrice from '../components/ShowMinMaxPrice';
import ShowNowHHMM from '../components/ShowNowHHMM';
import ShowUpdateInfo from '../components/showUpdateInfo';


export default function Estadisticas() {
  const { values, loading, error } = usePrices();

  console.log('[Estadisticas] 🚦 Estado:', { loading, error, count: values.length });

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;
{/*
  */}
  return (
    <div>
      <h2>Estadísticas</h2>
      <ShowUpdateInfo metadata={data.indicator} />
{/*<ShowMinMaxPrice values={values} />*/}
<ShowNowHHMM />
<ShowCheapestHours values={values} range={2} />
<ShowCheapestHours values={values} range={3} />
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

