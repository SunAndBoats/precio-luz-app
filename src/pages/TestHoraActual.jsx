// /pages/TestHoraActual.jsx
import { getCurrentTime } from '../utils/getCurrentTime';

export default function TestHoraActual() {
  const actualTime = getCurrentTime();

  return (
    <div>
      <h2>Hora actual</h2>
      <p>{actualTime}</p>
    </div>
  );
}
