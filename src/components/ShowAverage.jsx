// /components/ShowAverage.jsx
import { getAverage } from '../utils/statistics/getAverage';

export default function ShowAverage({ values }) {
  console.log(`[ShowAverage] 📥 values recibidos (${values.length})`);
  const average = getAverage(values);

  return (
    <div>
      <h3>Media simple</h3>
      <p>{average ?? 'No disponible'}</p>
    </div>
  );
}
