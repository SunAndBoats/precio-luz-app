// /components/ShowVariance.jsx
import { getVariance } from '../utils/statistics/getVariance';

export default function ShowVariance({ values }) {
  console.log(`[ShowVariance] 📥 values recibidos (${values.length})`);
  const variance = getVariance(values);

  return (
    <div>
      <h3>Varianza simple</h3>
      <p>{variance ?? 'No disponible'}</p>
    </div>
  );
}