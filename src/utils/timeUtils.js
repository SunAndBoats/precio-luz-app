// Convierte "HH:MM" → minutos
export function timeStringToMinutes(str) {
    const [hh, mm] = str.split(':').map(Number);
    return hh * 60 + mm;
  }
  
  // Convierte minutos → "HH:MM"
  export function minutesToTimeString(mins) {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }
  
  // Devuelve hora final (string HH:MM) dada la hora inicio y duración
  export function getEndTime(startTime, duracion) {
    const startMin = timeStringToMinutes(startTime);
    const endMin = Math.min(startMin + duracion, 1439);
    return minutesToTimeString(endMin);
  }
  