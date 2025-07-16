// Este archivo hace 2 cosas por tanto habría que separarlo pero hoy no, mañana
//Convierte precios por hora a un array de 1440 precios por minuto
export function getPrecioPorMinuto(preciosPorHora) {
    const preciosPorMinuto = [];
  
    for (let hora = 0; hora < 24; hora++) {
      const precioHora = preciosPorHora[hora] ?? 0;
  
      for (let i = 0; i < 60; i++) {
        preciosPorMinuto.push(precioHora);
      }
    }
  
    return preciosPorMinuto;
  }
  
  // Calcula energía y coste de un dispositivo
  export function calcularCoste(device, preciosPorMinuto) {
    const [hh, mm] = device.startTime.split(':').map(Number);
    const startMin = hh * 60 + mm;
    const endMin = Math.min(startMin + device.duracion, 1440); // no pasarse de las 24h
  
    let energiaConsumidaKWh = 0;
    let costeTotal = 0;
  
    for (let i = startMin; i < endMin; i++) {
      const potenciaKW = device.potencia / 1000;
      const energiaMinuto = potenciaKW * (1 / 60); // kWh por minuto
      const precio = preciosPorMinuto[i] ?? 0;
  
      energiaConsumidaKWh += energiaMinuto;
      costeTotal += energiaMinuto * precio;
    }
  
    return {
      energiaConsumida: parseFloat(energiaConsumidaKWh.toFixed(4)),
      costeTotal: parseFloat(costeTotal.toFixed(4)),
    };
  }
  