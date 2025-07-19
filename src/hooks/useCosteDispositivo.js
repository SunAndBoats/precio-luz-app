// /hooks/useCosteDispositivo.js
import { timeStringToMinutes } from '../utils/timeUtils';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';

export function useCosteDispositivo(device, parsedData) {
  const preciosMinuto = getPrecioPorMinuto(parsedData.map((p) => p.price));
  const resultado = calcularCoste(device, preciosMinuto);
  const startMin = timeStringToMinutes(device.startTime);

  return { resultado, startMin };
}
