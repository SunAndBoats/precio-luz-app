export function classifyPrice(price) {
  if (price < 0.1) return 'green';
  if (price < 0.15) return 'yellow';
  return 'red';
}
