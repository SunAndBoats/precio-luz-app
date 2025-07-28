// TestMainPage.jsx - src/pages/TestMainPage.jsx

import { useData } from '../hooks/useData';
import { parseZoneData } from '../utils/parseZoneData';
import NowPriceBox from '../components/NowPriceBox';
import AverageBox from '../components/AverageBox';
import MinPriceBox from '../components/MinPriceBox';
import MaxPriceBox from '../components/MaxPriceBox';
import TablaVisualSimpleE from '../components/TablaVisualSimpleE';

export default function TestMainPage() {
  const { values, loading, error } = useData();

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  const data = parseZoneData(values, 'Península');

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>🧪 Test MainPage</h2>

      <section style={{ marginBottom: '2rem' }}>
        <NowPriceBox data={data} />
      </section>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 👈 tres columnas iguales, fuerza igualdad
          gap: '1rem',
          marginBottom: '2rem',
          alignItems: 'stretch' // 👈 garantiza misma altura
        }}
      >

        <AverageBox data={data} />
        <MinPriceBox data={data} />
        <MaxPriceBox data={data} />
      </section>

      <section>
        <TablaVisualSimpleE data={data} />
      </section>
    </div>
  );
}
