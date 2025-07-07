// /components/ShowUpdateInfo.jsx
import { getUpdateInfo } from '../utils/getUpdateInfo';

export default function ShowUpdateInfo({ metadata }) {
  const info = getUpdateInfo(metadata);

  if (!info) return <p>No disponible</p>;

  return (
    <div>
      <h3>Actualización</h3>
      <p>Fecha: {info.updateDate}</p>
      <p>Hora: {info.updateTime}</p>
      <p>{info.relativeText}</p>
    </div>
  );
}
