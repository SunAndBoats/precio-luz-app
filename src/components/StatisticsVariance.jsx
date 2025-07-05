// /components/StatisticsVariance.jsx
import { useState } from 'react';
import { parseZoneData } from '../utils/parseZoneData';
import { filterByHourRange } from '../utils/filterByHourRange';
import { getVariance } from '../utils/statistics/getVariance';

export default function StatisticsVariance({ values }) {
  const [geo, setGeo] = useState('Península');
  const [usePeriod, setUsePeriod] = useState(true);

  const parsedData = parseZoneData(values, geo);
  const filtered = usePeriod ? filterByHourRange(parsedData) : parsedData;
  const variance = getVariance(filtered);

  return (
    <div>
      <h3>Varianza {usePeriod ? '07-21h' : '00-24h'}</h3>
      <p>{variance ?? 'No disponible'}</p>
      <select value={geo} onChange={(e) => setGeo(e.target.value)}>
        <option value="Península">Península</option>
        <option value="Canarias">Canarias</option>
        <option value="Baleares">Baleares</option>
        <option value="Ceuta">Ceuta</option>
        <option value="Melilla">Melilla</option>
      </select>
      <button onClick={() => setUsePeriod(!usePeriod)}>
        Cambiar a {usePeriod ? '00-24h' : '07-21h'}
      </button>
    </div>
  );
}