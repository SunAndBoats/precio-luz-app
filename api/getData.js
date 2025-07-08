// /api/getData.js

export default async function handler(req, res) {
    const token = process.env.ESIOS_TOKEN;
    const endpoint = 'https://api.esios.ree.es/indicators/1001';
  
    console.log('[getData] 🔑 token recibido:', token);
  
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
        return res.status(response.status).json({ error: 'Error en fetch' });
      }
  
      const data = await response.json();
  
      console.log('[getData] 📊 values:', data.indicator?.values?.length);
      console.log('[getData] ⏰ actualizado:', data.indicator?.values_updated_at);
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('[getData] ❌ ERROR:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  