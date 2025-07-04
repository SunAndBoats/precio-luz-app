// /api/getPrices.js
export default async function handler(req, res) {
    const token = process.env.ESIOS_TOKEN;
    const endpoint = 'https://api.esios.ree.es/indicators/1001';
    console.log(token)
  
    try {
      const response = await fetch(endpoint, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': token,
        },
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Error en fetch' });
      }
  
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
  console.log('Token cargado:', process.env.ESIOS_TOKEN);

  