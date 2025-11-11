// Item Generation Utilities
// Generates randomized spinner items with winner placement

import { createSeededRandom } from "./rng";
import type { PrizeItem } from "../data/boxes";

interface GenerateItemsOptions {
  result?: PrizeItem;
  finalPosition?: number;
  seed: number;
  spinId: string;
}

// Cache for generated items
const generateItemsCache = new Map<string, PrizeItem[]>();

/**
 * Generate randomized items for spinner with winner placement
 * @param items - Available prize items
 * @param amount - Total number of items to generate (52)
 * @param options - Configuration including winner, position, seed
 */
export function generateItems(
  items: PrizeItem[],
  amount: number,
  options: GenerateItemsOptions
): PrizeItem[] {
  const { result, finalPosition, seed, spinId } = options;

  // Create cache key
  const itemsKey = items.map((i) => i.id).join("-");
  const cacheKey = `${itemsKey}-${amount}-${
    result?.id || "none"
  }-${finalPosition}-${seed}-${spinId}`;

  // Check cache
  if (generateItemsCache.has(cacheKey)) {
    return generateItemsCache.get(cacheKey)!;
  }

  // Calculate total tickets for weighted randomization
  const totalTickets = items.reduce(
    (sum, item) => sum + item.dropChance * 100,
    0
  );

  // Create seeded random function
  const random = createSeededRandom(seed);

  // Helper to find item based on ticket number
  function findDropFor(ticket: number): PrizeItem {
    let currentTicket = 0;
    for (const item of items) {
      currentTicket += item.dropChance * 100;
      if (ticket <= currentTicket) {
        return item;
      }
    }
    return items[items.length - 1]; // Fallback
  }

  // Generate items
  const randomizedItems: PrizeItem[] = [];

  for (let i = 0; i < amount; i++) {
    // Place winner at specific position
    if (result && finalPosition === i) {
      randomizedItems.push(result);
      continue;
    }

    // Generate random item based on drop chances
    const randomTicket = random(0, Math.floor(totalTickets));
    const item = findDropFor(randomTicket);
    randomizedItems.push(item);
  }

  // Cache result
  generateItemsCache.set(cacheKey, randomizedItems);

  // Limit cache size
  if (generateItemsCache.size > 100) {
    const firstKey = generateItemsCache.keys().next().value;
    generateItemsCache.delete(firstKey);
  }

  return randomizedItems;
}
