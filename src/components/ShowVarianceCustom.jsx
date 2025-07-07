// /components/ShowVarianceCustom.jsx
import { useState } from 'react';
import { getVariance } from '../utils/statistics/getVariance';

export default function ShowVarianceCustom({ values }) {
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(21);

  const filtered = values.filter((v) => {
    const hour = new Date(v.datetime_utc).getUTCHours();
    return hour >= startHour && hour < endHour;
  });

  const variance = getVariance(filtered);

  return (
    <div>
      <h3>Varianza entre {startHour}:00 y {endHour}:00</h3>
      <p>{variance ?? 'No disponible'}</p>
      <label>
        Desde:
        <input type="number" value={startHour} onChange={(e) => setStartHour(Number(e.target.value))} />
      </label>
      <label>
        Hasta:
        <input type="number" value={endHour} onChange={(e) => setEndHour(Number(e.target.value))} />
      </label>
    </div>
  );
}
