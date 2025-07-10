// /utils/getCurrentTime.js
/*
export function getCurrentTime() {
    const now = new Date();
  
    const horas = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
  
    const resultado = `${horas}:${minutos}`;
    console.log('[getCurrentTime] ⏰ Hora actual:', resultado);
  
    return resultado;
  }
  */
  export function getCurrentTimeHHMM() {
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, '0');
    const mm = now.getMinutes().toString().padStart(2, '0');
    return `${hh}:${mm}`;
  }
  