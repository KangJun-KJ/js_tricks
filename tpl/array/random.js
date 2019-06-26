const random = (length = 100) =>
  Array.from({ length }, (v, i) => i + 1).sort(() => Math.random() - 0.5)[0];
