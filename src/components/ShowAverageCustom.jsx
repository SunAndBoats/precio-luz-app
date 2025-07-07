import { useState } from 'react';
import { getAverage } from '../utils/getAverage';

export default function ShowAverageCustom({ values }) {
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(21);

  console.log(`[ShowAverage] 📥 values recibidos (${values.length})`);
  
  // Filtrar según el rango
  const filtered = values.filter((v) => {
    const hour = new Date(v.datetime_utc).getUTCHours();
    return hour >= startHour && hour < endHour;
  });

  console.log(`[ShowAverage] 🔎 Datos filtrados: ${filtered.length} entre ${startHour} y ${endHour}`);
  
  const average = getAverage(filtered);

  return (
    <div>
      <h3>Media entre {startHour}:00 y {endHour}:00</h3>
      <p>{average ?? 'No disponible'}</p>

      <div style={{ marginTop: '1rem' }}>
        <label>
          Desde hora:
          <input
            type="number"
            min="0"
            max="23"
            value={startHour}
            onChange={(e) => setStartHour(Number(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '4rem' }}
          />
        </label>

        <label style={{ marginLeft: '1rem' }}>
          Hasta hora:
          <input
            type="number"
            min="1"
            max="24"
            value={endHour}
            onChange={(e) => setEndHour(Number(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '4rem' }}
          />
        </label>
      </div>
    </div>
  );
}
