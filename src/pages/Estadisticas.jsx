// /pages/Estadisticas.jsx
/*
import { usePrices } from '../hooks/usePrices';
import ShowAverage from '../components/ShowAverage';

export default function Estadisticas() {
  const { values, loading, error } = usePrices();

  console.log('[Estadisticas] 🚦 Estado:', { loading, error, count: values.length });

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Estadísticas</h2>
      <ShowAverage values={values} />
    </div>
  );
}
*/
export default function Estadisticas() {
  console.log('✅ Estadisticas cargado');
  return <h2>Prueba de carga</h2>;
}
