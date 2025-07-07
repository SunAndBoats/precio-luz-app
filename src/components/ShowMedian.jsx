// /components/ShowMedian.jsx
import { getMedian } from '../utils/statistics/getMedian';

export default function ShowMedian({ values }) {
  console.log(`[ShowMedian] 📥 values recibidos (${values.length})`);
  const median = getMedian(values);

  return (
    <div>
      <h3>Mediana simple</h3>
      <p>{median ?? 'No disponible'}</p>
    </div>
  );
}