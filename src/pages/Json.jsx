import { useEffect, useState } from 'react';

export default function Json() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/getPrices')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <pre style={{ whiteSpace: 'pre-wrap', padding: '1rem' }}>
      {data ? JSON.stringify(data, null, 2) : 'Cargando...'}
    </pre>
  );
}
