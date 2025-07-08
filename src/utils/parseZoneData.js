// /utils/parseZoneData.js

/**
 * Filtra y transforma los datos por zona.
 * @param {Array} values - Array original de datos (de .indicator.values).
 * @param {string} geoName - Zona geográfica deseada, por defecto 'Península'.
 * @returns Array con objetos { price, hour, datetime }
 */
// Filtra los valores por zona y transforma los datos
export function parseZoneData(values, geoName = 'Península') {
  if (!Array.isArray(values)) {
    console.error('[parseZoneData] ❌ values no es un array:', values);
    return [];
  }

  const parsed = values
    .filter((v) => v.geo_name === geoName && typeof v.value === 'number')
    .map((v) => {
      const date = new Date(v.datetime); // usamos la hora local
      const hour = date.getHours(); // hora local

      return {
        price: +(v.value / 1000).toFixed(4),
        hour,
        datetime: v.datetime, // conservamos el original local
      };
    });

  console.log(`[parseZoneData] ✅ ${parsed.length} valores para zona "${geoName}"`);
  return parsed;
}
