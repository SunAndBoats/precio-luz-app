// /pages/TestHoraActual.jsx
import { getCurrentTimeHHMM } from '../utils/getCurrentTime';

export default function TestHoraActual() {
  const actualTime = getCurrentTimeHHMM();

  return (
    <div>
      <h2>Hora actual</h2>
      <p>{actualTime}</p>
    </div>
  );
}
 