

Base URL y rutas exactas
Base URL Preview y Prod: https://api.precioluzhoy.app (misma para ambos).
Sí, es correcto usar https://api.precioluzhoy.app.
Endpoints disponibles para el front
GET /api/prices/today → precios de “hoy” (UTC).
GET /api/prices/tomorrow → precios de “mañana” (UTC).
GET /api/prices?date=YYYY-MM-DD → precios de una fecha (UTC).
GET /api/dates?limit=N → últimas N fechas con datos.
No existe /api/price/now.
No existe /api/meta/updated.
Versión de API: sin prefijo (no /api/v1 por ahora).
Formato de respuesta (shape)
No es el shape de ESIOS. Respuesta típica de /api/prices...:
Top-level: { date: "YYYY-MM-DD", count: 24, data: Price[] }
Un item Price (ejemplo real de campos):
{ id, date: "YYYY-MM-DDT00:00:00.000Z", hourIndex: 0..23, datetimeUtc: "YYYY-MM-DDTHH:00:00.000Z", priceEurKwh: number, zone: "PENINSULA", source: "ESIOS" }
Unidades y filtros
Unidad: priceEurKwh está en €/kWh.
Zona: ya viene filtrado a PENINSULA en el backend (no necesitas filtrar en el front).
Fechas y horas
datetimeUtc: ISO 8601 con “Z” (UTC).
Puedes seguir usando substring HH si quieres; también tienes hourIndex 0..23.
“Hoy” y “Mañana” devuelven 24 slots del día en UTC (no ajustado a zona de España).
CORS y seguridad
CORS permitido:
precio-luz-app.vercel.app y cualquier subdominio *.precio-luz-app.vercel.app (previews).
precioluzhoy.app y cualquier subdominio *.precioluzhoy.app.
Auth: los endpoints públicos /api no requieren headers de auth (solo /admin requiere x-api-key, que el front no usa).
Errores y vacíos
Si no hay datos: 200 OK con count=0 y data=[] (no 404/204).
No hay fallback “now” ni “archives” expuesto en /api (la ingesta sí maneja ESIOS internamente).
Rate limiting: 60 req/min por IP en /api; si se supera, devuelve 429.
Salud y smoke tests
GET /health → { ok: true, ts: ISO }.
Smoke simple: GET https://api.precioluzhoy.app/api/prices/today (espera 200 y JSON con count).




¿Tienes endpoint /health o similar? Dime la ruta para monitorizar en preview después del deploy.




