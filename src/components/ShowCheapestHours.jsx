// /components/ShowCheapestHours.jsx
import { getCheapestHours } from '../utils/getCheapestHours';

export default function ShowCheapestHours({ values, range = 2 }) {
  const hours = getCheapestHours(values, range);

  if (!hours) return <p>No disponible</p>;

  return (
    <div>
      <h3>Tramo más barato ({range}h)</h3>
      <p>{hours.join(' → ')}</p>
    </div>
  );
}
