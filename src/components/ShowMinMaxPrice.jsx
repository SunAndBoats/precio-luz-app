// /components/ShowMinMaxPrice.jsx
import { getMinMaxPrice } from '../utils/getMinMaxPrice';

export default function ShowMinMaxPrice({ values }) {
  const result = getMinMaxPrice(values);
  if (!result) return <p>No disponible</p>;

  return (
    <div>
      <h3>Precios extremos</h3>
      <p>Más barato: {result.min.price} €/kWh a las {result.min.time}</p>
      <p>Más caro: {result.max.price} €/kWh a las {result.max.time}</p>
    </div>
  );
}
