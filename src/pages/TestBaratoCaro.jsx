import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import { getMinPriceHour } from '../utils/statistics/getMinPriceHour';
import { getMaxPriceHour } from '../utils/statistics/getMaxPriceHour';

export default function TestBaratoCaro() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const parsed = parseZoneData(values);
  const minHour = getMinPriceHour(parsed);
  const maxHour = getMaxPriceHour(parsed);

  return (
    <div>
      <h2>Test Barato / Caro</h2>
      <p>Precio más barato en hora local: {minHour?.price} €/kWh a las {minHour?.hour}:00</p>
      <p>Precio más caro en hora local: {maxHour?.price} €/kWh a las {maxHour?.hour}:00</p>
    </div>
  );
}
