export function crearNuevoDispositivo(id, nombre = 'Nuevo dispositivo') {
    return {
      id, // ahora el ID es numérico y viene de fuera
      nombre,
      startTime: '12:00',
      duracion: 60,
      potencia: 1000,
    };
  }
  