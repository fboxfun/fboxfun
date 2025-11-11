// Mystery Box Data - Scraped from FortuneBox.com
// Generated: 2025-11-10

export interface PrizeItem {
  id: string;
  name: string;
  image: string;
  value: number;
  rarity: "legendary" | "epic" | "rare" | "uncommon" | "common";
  dropChance: number; // 0-1 probability
}

export interface MysteryBox {
  id: string;
  name: string;
  category: "Luxury" | "Premium" | "Standard" | "Daily" | "Starter";
  price: string;
  priceValue: number;
  image: string;
  slug: string;
  isNew: boolean;
  prizes?: PrizeItem[];
}

// Sample prize pools for demonstration
const luxuryPrizes: PrizeItem[] = [
  {
    id: "p1",
    name: "Rolex Submariner",
    image: "/boxes/cocos-treasure.avif",
    value: 15000,
    rarity: "legendary",
    dropChance: 0.01,
  },
  {
    id: "p2",
    name: "Louis Vuitton Bag",
    image: "/boxes/femme-fortune.avif",
    value: 3500,
    rarity: "epic",
    dropChance: 0.05,
  },
  {
    id: "p3",
    name: "Gucci Watch",
    image: "/boxes/fortune-insight.avif",
    value: 1200,
    rarity: "rare",
    dropChance: 0.15,
  },
  {
    id: "p4",
    name: "Designer Sunglasses",
    image: "/boxes/vogue-vault.avif",
    value: 450,
    rarity: "uncommon",
    dropChance: 0.3,
  },
  {
    id: "p5",
    name: "Premium Wallet",
    image: "/boxes/frozen-fusion.avif",
    value: 150,
    rarity: "common",
    dropChance: 0.49,
  },
];

const premiumPrizes: PrizeItem[] = [
  {
    id: "p6",
    name: "Gaming Console",
    image: "/boxes/game-changer.avif",
    value: 500,
    rarity: "legendary",
    dropChance: 0.02,
  },
  {
    id: "p7",
    name: "Designer Sneakers",
    image: "/boxes/supreme-and-some.avif",
    value: 350,
    rarity: "epic",
    dropChance: 0.08,
  },
  {
    id: "p8",
    name: "Wireless Headphones",
    image: "/boxes/audio-excellence.avif",
    value: 200,
    rarity: "rare",
    dropChance: 0.2,
  },
  {
    id: "p9",
    name: "Smart Watch",
    image: "/boxes/chrono-jackpot.avif",
    value: 100,
    rarity: "uncommon",
    dropChance: 0.35,
  },
  {
    id: "p10",
    name: "Phone Case",
    image: "/boxes/hybrid-style.avif",
    value: 30,
    rarity: "common",
    dropChance: 0.35,
  },
];

const standardPrizes: PrizeItem[] = [
  {
    id: "p11",
    name: "Bluetooth Speaker",
    image: "/boxes/audio-excellence.avif",
    value: 120,
    rarity: "epic",
    dropChance: 0.05,
  },
  {
    id: "p12",
    name: "Fashion Accessories",
    image: "/boxes/modern-grace.avif",
    value: 75,
    rarity: "rare",
    dropChance: 0.15,
  },
  {
    id: "p13",
    name: "Backpack",
    image: "/boxes/urban-chaos.avif",
    value: 50,
    rarity: "uncommon",
    dropChance: 0.3,
  },
  {
    id: "p14",
    name: "Water Bottle",
    image: "/boxes/hybrid-style.avif",
    value: 25,
    rarity: "common",
    dropChance: 0.5,
  },
];

const dailyPrizes: PrizeItem[] = [
  {
    id: "p15",
    name: "Soccer Jersey",
    image: "/boxes/cactus-cule.avif",
    value: 80,
    rarity: "rare",
    dropChance: 0.1,
  },
  {
    id: "p16",
    name: "Travel Mug",
    image: "/boxes/around-the-world.avif",
    value: 35,
    rarity: "uncommon",
    dropChance: 0.25,
  },
  {
    id: "p17",
    name: "Keychain",
    image: "/boxes/painted-prestige.avif",
    value: 15,
    rarity: "common",
    dropChance: 0.65,
  },
];

const starterPrizes: PrizeItem[] = [
  {
    id: "p18",
    name: "Mystery Figure",
    image: "/boxes/mystic-monsters.avif",
    value: 20,
    rarity: "uncommon",
    dropChance: 0.2,
  },
  {
    id: "p19",
    name: "Sticker Pack",
    image: "/boxes/prestige-aroma.avif",
    value: 5,
    rarity: "common",
    dropChance: 0.8,
  },
];

export const mysteryBoxes: MysteryBox[] = [
  {
    id: "1",
    name: "Coco's Treasure",
    category: "Premium",
    price: "$329.00",
    priceValue: 329.0,
    image: "/boxes/cocos-treasure.avif",
    slug: "coco's-treasure",
    isNew: true,
    prizes: premiumPrizes,
  },
  {
    id: "2",
    name: "Cactus Culé",
    category: "Daily",
    price: "$72.25",
    priceValue: 72.25,
    image: "/boxes/cactus-cule.avif",
    slug: "cactus-cule",
    isNew: true,
    prizes: dailyPrizes,
  },
  {
    id: "3",
    name: "Hermès Arcana",
    category: "Daily",
    price: "$86.50",
    priceValue: 86.5,
    image: "/boxes/hermes-arcana.avif",
    slug: "hermes-arcana",
    isNew: true,
    prizes: dailyPrizes,
  },
  {
    id: "4",
    name: "Painted Prestige",
    category: "Daily",
    price: "$56.50",
    priceValue: 56.5,
    image: "/boxes/painted-prestige.avif",
    slug: "painted-prestige",
    isNew: true,
    prizes: dailyPrizes,
  },
  {
    id: "5",
    name: "Femme Fortune",
    category: "Luxury",
    price: "$4,000.00",
    priceValue: 4000.0,
    image: "/boxes/femme-fortune.avif",
    slug: "femme-fortune",
    isNew: false,
    prizes: luxuryPrizes,
  },
  {
    id: "6",
    name: "Fortune Insight",
    category: "Luxury",
    price: "$2,975.59",
    priceValue: 2975.59,
    image: "/boxes/fortune-insight.avif",
    slug: "fortune-insight",
    isNew: false,
    prizes: luxuryPrizes,
  },
  {
    id: "7",
    name: "Frozen Fusion",
    category: "Luxury",
    price: "$1,086.23",
    priceValue: 1086.23,
    image: "/boxes/frozen-fusion.avif",
    slug: "frozen-fusion",
    isNew: false,
    prizes: luxuryPrizes,
  },
  {
    id: "8",
    name: "Vogue Vault",
    category: "Luxury",
    price: "$1,917.11",
    priceValue: 1917.11,
    image: "/boxes/vogue-vault.avif",
    slug: "vogue-vault",
    isNew: false,
    prizes: luxuryPrizes,
  },
  {
    id: "9",
    name: "Supreme And Some",
    category: "Premium",
    price: "$503.00",
    priceValue: 503.0,
    image: "/boxes/supreme-and-some.avif",
    slug: "supreme-and-some",
    isNew: false,
    prizes: premiumPrizes,
  },
  {
    id: "10",
    name: "Frosted Swagger",
    category: "Premium",
    price: "$421.72",
    priceValue: 421.72,
    image: "/boxes/frosted-swagger.avif",
    slug: "frosted-swagger",
    isNew: false,
    prizes: premiumPrizes,
  },
  {
    id: "11",
    name: "Game Changer",
    category: "Standard",
    price: "$126.53",
    priceValue: 126.53,
    image: "/boxes/game-changer.avif",
    slug: "game-changer",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "12",
    name: "Prestige Aroma",
    category: "Standard",
    price: "$155.19",
    priceValue: 155.19,
    image: "/boxes/prestige-aroma.avif",
    slug: "prestige-aroma",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "13",
    name: "Cashmere Move",
    category: "Standard",
    price: "$240.82",
    priceValue: 240.82,
    image: "/boxes/cashmere-move.avif",
    slug: "cashmere-move",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "14",
    name: "Pixel Prize",
    category: "Standard",
    price: "$205.74",
    priceValue: 205.74,
    image: "/boxes/pixel-prize.avif",
    slug: "pixel-prize",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "15",
    name: "ZigZag Prize",
    category: "Standard",
    price: "$208.98",
    priceValue: 208.98,
    image: "/boxes/zigzag-prize.avif",
    slug: "zigzag-prize",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "16",
    name: "Modern Grace",
    category: "Standard",
    price: "$209.68",
    priceValue: 209.68,
    image: "/boxes/modern-grace.avif",
    slug: "modern-grace",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "17",
    name: "Hybrid Style",
    category: "Standard",
    price: "$161.71",
    priceValue: 161.71,
    image: "/boxes/hybrid-style.avif",
    slug: "hybrid-style",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "18",
    name: "Audio Excellence",
    category: "Standard",
    price: "$169.93",
    priceValue: 169.93,
    image: "/boxes/audio-excellence.avif",
    slug: "audio-excellence",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "19",
    name: "Around The World",
    category: "Standard",
    price: "$188.41",
    priceValue: 188.41,
    image: "/boxes/around-the-world.avif",
    slug: "around-the-world",
    isNew: false,
    prizes: standardPrizes,
  },
  {
    id: "20",
    name: "Chrono Jackpot",
    category: "Starter",
    price: "$45.80",
    priceValue: 45.8,
    image: "/boxes/chrono-jackpot.avif",
    slug: "chrono-jackpot",
    isNew: false,
    prizes: starterPrizes,
  },
  {
    id: "21",
    name: "Icy Boldness",
    category: "Starter",
    price: "$38.10",
    priceValue: 38.1,
    image: "/boxes/icy-boldness.avif",
    slug: "icy-boldness",
    isNew: false,
    prizes: starterPrizes,
  },
  {
    id: "22",
    name: "Signature Selection",
    category: "Starter",
    price: "$36.01",
    priceValue: 36.01,
    image: "/boxes/signature-selection.avif",
    slug: "signature-selection",
    isNew: false,
    prizes: starterPrizes,
  },
  {
    id: "23",
    name: "Mystic Monsters",
    category: "Starter",
    price: "$36.64",
    priceValue: 36.64,
    image: "/boxes/mystic-monsters.avif",
    slug: "mystic-monsters",
    isNew: false,
    prizes: starterPrizes,
  },
  {
    id: "24",
    name: "Urban Chaos",
    category: "Starter",
    price: "$29.71",
    priceValue: 29.71,
    image: "/boxes/urban-chaos.avif",
    slug: "urban-chaos",
    isNew: false,
    prizes: starterPrizes,
  },
];

// Category definitions based on price ranges
// Luxury: $1000+
// Premium: $400-$999
// Standard: $100-$399
// Daily: $50-$99
// Starter: Under $50

// Export category filter function
export function getBoxesByCategory(category: string): MysteryBox[] {
  if (category === "all") return mysteryBoxes;
  return mysteryBoxes.filter(
    (box) => box.category.toLowerCase() === category.toLowerCase()
  );
}

// Export new boxes filter
export function getNewBoxes(): MysteryBox[] {
  return mysteryBoxes.filter((box) => box.isNew);
}

// Export sorted boxes by price
export function getBoxesSortedByPrice(ascending = false): MysteryBox[] {
  return [...mysteryBoxes].sort((a, b) =>
    ascending ? a.priceValue - b.priceValue : b.priceValue - a.priceValue
  );
}
