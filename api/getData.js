// /api/getData.js

export default async function handler(req, res) {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // ✅ Importación dinámica solo en desarrollo para evitar errores en Vercel
    const { mockData } = await import('../mock/mockData.js');
    console.log('[getData] 🧪 Usando datos mock (modo desarrollo)');
    return res.status(200).json(mockData);
  }

  // ✅ En producción: usamos función para obtener el token seguro
  const token = process.env.ESIOS_TOKEN;
  const endpoint = 'https://api.esios.ree.es/indicators/1001';

  console.log('[getData] 🔑 Token recibido:', token ? 'sí' : 'no');

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': token,
      },
    });

    console.log('[getData] ✅ response.ok:', response.ok);

    if (!response.ok) {
      const text = await response.text();
      console.error('[getData] ❌ Error cuerpo no JSON:', text);
      return res.status(response.status).json({ error: 'Error en fetch (producción)', details: text });
    }

    const data = await response.json();
    console.log('[getData] 📊 values:', data.indicator?.values?.length);
    console.log('[getData] ⏰ actualizado:', data.indicator?.values_updated_at);

    return res.status(200).json(data);
  } catch (error) {
    console.error('[getData] ❌ ERROR:', error);
  
    return res.status(500).json({
      error: 'Error interno del servidor',
      details: error.message || String(error),
    });
  }
  
}