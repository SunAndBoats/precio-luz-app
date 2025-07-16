

import { useEffect } from 'react';
import { crearNuevoDispositivo } from '../utils/devices';
import { getPrecioPorMinuto, calcularCoste } from '../utils/costCalculator';

export default function TestCalculo() {
  // Simulamos precios por hora: 24 valores entre 0.10 y 0.25 €/kWh
  const preciosPorHora = Array.from({ length: 24 }, (_, i) =>
    (0.10 + (i % 4) * 0.05).toFixed(2)
  ).map(Number);

  // 2 dispositivos de prueba
  const dispositivo1 = crearNuevoDispositivo(1, 'Lavadora');
  dispositivo1.startTime = '07:30';
  dispositivo1.duracion = 45;
  dispositivo1.potencia = 800;

  const dispositivo2 = crearNuevoDispositivo(2, 'Horno');
  dispositivo2.startTime = '20:00';
  dispositivo2.duracion = 30;
  dispositivo2.potencia = 2000;

  // Calcular coste con precios por minuto
  const preciosPorMinuto = getPrecioPorMinuto(preciosPorHora);
  const resultado1 = calcularCoste(dispositivo1, preciosPorMinuto);
  const resultado2 = calcularCoste(dispositivo2, preciosPorMinuto);

  useEffect(() => {
    console.log('🔌 Precios por hora:', preciosPorHora);
    console.log('🧼 Lavadora:', resultado1);
    console.log('🔥 Horno:', resultado2);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧪 Test Calculo Energético</h2>
      <p><strong>Lavadora</strong> - Inicio: {dispositivo1.startTime}, {dispositivo1.duracion} min, {dispositivo1.potencia}W</p>
      <p>➡️ Energía: {resultado1.energiaConsumida} kWh</p>
      <p>💰 Coste: {resultado1.costeTotal} €</p>

      <hr />

      <p><strong>Horno</strong> - Inicio: {dispositivo2.startTime}, {dispositivo2.duracion} min, {dispositivo2.potencia}W</p>
      <p>➡️ Energía: {resultado2.energiaConsumida} kWh</p>
      <p>💰 Coste: {resultado2.costeTotal} €</p>
    </div>
  );
}
