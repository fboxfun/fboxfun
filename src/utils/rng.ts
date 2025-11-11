// Seeded Random Number Generator
// Based on mulberry32 algorithm for deterministic randomness

export function createSeededRandom(seed: number) {
  let state = seed;

  return function random(min: number, max: number): number {
    // Mulberry32 algorithm
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const rand = ((t ^ (t >>> 14)) >>> 0) / 4294967296;

    // Scale to range [min, max]
    return Math.floor(rand * (max - min + 1)) + min;
  };
}
