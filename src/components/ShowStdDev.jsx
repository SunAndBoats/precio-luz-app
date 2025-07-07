// /components/ShowStdDev.jsx
import { getStdDev } from '../utils/statistics/getStdDev';

export default function ShowStdDev({ values }) {
  console.log(`[ShowStdDev] 📥 values recibidos (${values.length})`);
  const stdDev = getStdDev(values);

  return (
    <div>
      <h3>Desviación típica simple</h3>
      <p>{stdDev ?? 'No disponible'}</p>
    </div>
  );
}