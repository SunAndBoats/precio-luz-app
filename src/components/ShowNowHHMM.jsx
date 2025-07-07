// /components/ShowNowHHMM.jsx
import { getNowHHMM } from '../utils/getNowHHMM';

export default function ShowNowHHMM() {
  return (
    <div>
      <h3>Hora actual</h3>
      <p>{getNowHHMM()}</p>
    </div>
  );
}
