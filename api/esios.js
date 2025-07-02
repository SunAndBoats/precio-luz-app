import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const token = process.env.ESIOS_TOKEN;

  // Si no hay token, usar datos simulados
  if (!token) {
    console.log('🔁 No ESIOS_TOKEN; usando datos mock');

    const filePath = path.join(process.cwd(), 'api/mockPrices.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const mockData = JSON.parse(fileContent);

    return res.status(200).json(mockData);
  }

  // Si hay token, fetch real
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
