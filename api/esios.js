export default async function handler(req, res) {
    const token = process.env.ESIOS_TOKEN;
    const response = await fetch('https://api.esios.ree.es/indicators/1001', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': token,
      },
    });
  
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error en fetch' });
    }
  
    const data = await response.json();
    return res.status(200).json(data);
  }
  