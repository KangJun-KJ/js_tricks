Array.from({ length: 100 }, (v, i) => i + 1)
  .sort(() => Math.random() - 0.5)
  .slice(0, count);
