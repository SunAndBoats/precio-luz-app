// /components/ShowMedianCustom.jsx
import { useState } from 'react';
import { getMedian } from '../utils/statistics/getMedian';

export default function ShowMedianCustom({ values }) {
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(21);

  const filtered = values.filter((v) => {
    const hour = new Date(v.datetime_utc).getUTCHours();
    return hour >= startHour && hour < endHour;
  });

  const median = getMedian(filtered);

  return (
    <div>
      <h3>Mediana entre {startHour}:00 y {endHour}:00</h3>
      <p>{median ?? 'No disponible'}</p>
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