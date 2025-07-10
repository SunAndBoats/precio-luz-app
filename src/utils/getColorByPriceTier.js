// /utils/getColorByPriceTier.js
/**
 * Determina un color (verde, amarillo, rojo) según el tercio del precio.
 * @param {number} price - Precio actual.
 * @param {number} min - Precio mínimo del día.
 * @param {number} max - Precio máximo del día.
 * @returns {string} - 'green' | 'yellow' | 'red'
 */
export function getColorByPriceTier(price, min, max) {
    const range = max - min;
  
    if (range === 0) return 'green'; // todos los precios iguales
  
    const relative = (price - min) / range;
  
    if (relative <= 0.33) return 'green';
    if (relative <= 0.66) return 'yellow';
    return 'red';
  }
  