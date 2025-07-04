export function getColorByPrice(price, styles) {
    if (price < 150) return styles.green;
    if (price < 200) return styles.yellow;
    return styles.red;
  }
  