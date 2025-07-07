// /api/getPrices.js
export default async function handler(req, res) {
  const token = process.env.ESIOS_TOKEN;
  const endpoint = 'https://api.esios.ree.es/indicators/1001';

  console.log('[getPrices] token:', token);

  try {
    const response = await fetch(endpoint, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': token,
      },
    });

    console.log('[getPrices] response.ok:', response.ok);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error en fetch' });
    }

    const data = await response.json();
    console.log('[getPrices] data.indicator.values length:', data.indicator?.values?.length);

    return res.status(200).json(data);
  } catch (error) {
    console.error('[getPrices] ERROR:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}


  