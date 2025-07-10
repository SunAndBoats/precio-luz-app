// /utils/parseZoneData.js
export function parseZoneData(values, geoName = 'Península') {
  if (!Array.isArray(values)) {
    console.error('[parseZoneData] ❌ values no es un array:', values);
    return [];
  }

  const parsed = values
    .filter((v) => v.geo_name === geoName && typeof v.value === 'number')
    .map((v) => {
      // ✅ Extraemos la hora directamente del string (sin Date)
      const hourStr = v.datetime.slice(11, 13); // "18" de "2024-07-07T18:00:00.000Z"
      const hour = parseInt(hourStr, 10);

      return {
        price: +(v.value / 1000).toFixed(4),
        hour,                      // ✅ hora exacta publicada por ESIOS
        datetime: v.datetime       // string original intacto
      };
    });

  console.log(`[parseZoneData] ✅ ${parsed.length} valores para zona "${geoName}"`);
  return parsed;
}
