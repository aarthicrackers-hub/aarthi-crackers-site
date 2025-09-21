export interface Product {
  id: number;
  name: string;
  rate: number; // New discounted price
  oldRate?: number; // Original price for strikethrough
  ratePer: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  // Sparklers
  { id: 1, name: "7cm electric sparklers", rate: 12, oldRate: 60, ratePer: "1 BOX", category: "Sparklers" },
  { id: 2, name: "7cm colour sparklers", rate: 13, oldRate: 65, ratePer: "1 BOX", category: "Sparklers" },
  { id: 3, name: "7cm green sparklers", rate: 14, oldRate: 70, ratePer: "1 BOX", category: "Sparklers" },
  { id: 4, name: "7cm red sparklers", rate: 16, oldRate: 80, ratePer: "1 BOX", category: "Sparklers" },
  { id: 5, name: "10cm electric sparklers", rate: 17, oldRate: 85, ratePer: "1 BOX", category: "Sparklers" },
  { id: 6, name: "10cm colour sparklers", rate: 20, oldRate: 100, ratePer: "1 BOX", category: "Sparklers" },
  { id: 7, name: "10cm green sparklers", rate: 22, oldRate: 110, ratePer: "1 BOX", category: "Sparklers" },
  { id: 8, name: "10cm red sparklers", rate: 26, oldRate: 130, ratePer: "1 BOX", category: "Sparklers" },
  { id: 9, name: "12cm electric sparklers", rate: 26, oldRate: 130, ratePer: "1 BOX", category: "Sparklers" },
  { id: 10, name: "12cm colour sparklers", rate: 29, oldRate: 145, ratePer: "1 BOX", category: "Sparklers" },
  { id: 11, name: "12cm green sparklers", rate: 32, oldRate: 160, ratePer: "1 BOX", category: "Sparklers" },
  { id: 12, name: "12cm red sparklers", rate: 37, oldRate: 185, ratePer: "1 BOX", category: "Sparklers" },
  { id: 13, name: "15cm electric sparklers", rate: 40, oldRate: 200, ratePer: "1 BOX", category: "Sparklers" },
  { id: 14, name: "15cm colour sparklers", rate: 44, oldRate: 220, ratePer: "1 BOX", category: "Sparklers" },
  { id: 15, name: "15cm green sparklers", rate: 50, oldRate: 250, ratePer: "1 BOX", category: "Sparklers" },
  { id: 16, name: "15cm red sparklers", rate: 57, oldRate: 285, ratePer: "1 BOX", category: "Sparklers" },
  { id: 17, name: "30cm electric sparklers", rate: 40, oldRate: 200, ratePer: "1 BOX", category: "Sparklers" },
  { id: 18, name: "30cm colour sparklers", rate: 44, oldRate: 220, ratePer: "1 BOX", category: "Sparklers" },
  { id: 19, name: "30cm green sparklers", rate: 50, oldRate: 250, ratePer: "1 BOX", category: "Sparklers" },
  { id: 20, name: "30cm red sparklers", rate: 57, oldRate: 285, ratePer: "1 BOX", category: "Sparklers" },
  { id: 21, name: "30cm multimix sparklers", rate: 60, oldRate: 300, ratePer: "1 BOX", category: "Sparklers" },
  { id: 22, name: "50cm electric sparklers", rate: 160, oldRate: 800, ratePer: "1 BOX", category: "Sparklers" },
  { id: 23, name: "50cm colour sparklers", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Sparklers" },
  { id: 24, name: "Rotating Sparklers Gold", rate: 220, oldRate: 1100, ratePer: "1 BOX", category: "Sparklers" },
  { id: 25, name: "Rotating Sparklers Multimix", rate: 260, oldRate: 1300, ratePer: "1 BOX", category: "Sparklers" },

  // Ground Chakkar
  { id: 26, name: "Chakkar Big (10pcs)", rate: 40, oldRate: 200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 27, name: "Chakkar Special", rate: 70, oldRate: 350, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 28, name: "Chakkar Deluxe", rate: 140, oldRate: 700, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 29, name: "4*4 wheel (5 Pcs)", rate: 240, oldRate: 1200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 30, name: "Wire Chakkar", rate: 240, oldRate: 1200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 31, name: "Wizz Chakkar", rate: 170, oldRate: 850, ratePer: "1 BOX", category: "Ground Chakkar" },

  // Flower Pots
  { id: 32, name: "Flower pots small", rate: 60, oldRate: 300, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 33, name: "Flower pots big", rate: 85, oldRate: 425, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 34, name: "Flower pots special", rate: 110, oldRate: 550, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 35, name: "Flower pots Ashoka", rate: 140, oldRate: 700, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 36, name: "Colour Koti", rate: 230, oldRate: 1150, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 37, name: "Tri Colour", rate: 300, oldRate: 1500, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 38, name: "Titanium Cone", rate: 160, oldRate: 800, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 39, name: "Crack Corn", rate: 148, oldRate: 740, ratePer: "1 BOX", category: "Flower Pots" },

  // Twinkling Star
  { id: 40, name: "1(1/2)\" Twinkling Star", rate: 23, oldRate: 115, ratePer: "1 BOX", category: "Twinkling Star" },
  { id: 41, name: "4\" Twinkling Star", rate: 70, oldRate: 350, ratePer: "1 Box", category: "Twinkling Star" },

  // Fancy Novelties
  { id: 42, name: "Peacock Feature", rate: 120, oldRate: 600, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 43, name: "Tin shower small", rate: 100, oldRate: 500, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 44, name: "Tin shower Big", rate: 140, oldRate: 700, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 45, name: "Siren (3 pieces)", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 46, name: "Color Smoke(3 pieces)", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 47, name: "Window candle(2 pieces)", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 48, name: "Pencil(3 pieces)", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 49, name: "6\" Water Queen", rate: 240, oldRate: 1200, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 50, name: "Magical peacock", rate: 250, oldRate: 1250, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 51, name: "Leader", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 52, name: "Bada Peacock", rate: 460, oldRate: 2300, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 53, name: "Top Gun", rate: 160, oldRate: 800, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 54, name: "Daisy Mixing", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 55, name: "Helicopter", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 56, name: "IPL shower", rate: 460, oldRate: 2300, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 57, name: "I cone", rate: 430, oldRate: 2150, ratePer: "1 BOX", category: "Fancy Novelties" },

  // Atom Bomb
  { id: 58, name: "Hydro Bomb", rate: 75, oldRate: 375, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 59, name: "King of King", rate: 100, oldRate: 500, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 60, name: "Digital Bomb", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 61, name: "Nuclear Bomb", rate: 300, oldRate: 1500, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 62, name: "Avatar Bomb", rate: 340, oldRate: 1700, ratePer: "1 BOX", category: "Atom Bomb" },

  // Rockets
  { id: 63, name: "Whistle Rocket", rate: 250, oldRate: 1250, ratePer: "1 Box", category: "Rockets" },

  // Single Sound Crackers
  { id: 64, name: "2(3/4) sound Cracker", rate: 11, oldRate: 55, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 65, name: "3 1/2 Sound Cracker", rate: 15, oldRate: 75, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 66, name: "4\" Sound Cracker", rate: 22, oldRate: 110, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 67, name: "4\" Gold Lakshmi", rate: 32, oldRate: 160, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 68, name: "4\" deluxe seven crackers", rate: 28, oldRate: 140, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 69, name: "5\" Sound Crackers", rate: 36, oldRate: 180, ratePer: "1 PKt", category: "Single Sound Crackers" },

  // Chorsa & Giant
  { id: 70, name: "28 Chorsa", rate: 18, oldRate: 90, ratePer: "1 PKT", category: "Chorsa & Giant" },
  { id: 71, name: "56 Giant", rate: 60, oldRate: 300, ratePer: "1 PKT", category: "Chorsa & Giant" },

  // Kids Special
  { id: 72, name: "Kit kat", rate: 32, oldRate: 160, ratePer: "1 BOX", category: "Kids Special" },
  { id: 73, name: "Red Bijilli", rate: 32, oldRate: 160, ratePer: "1 Bag", category: "Kids Special" },
  { id: 74, name: "Photo Flash", rate: 80, oldRate: 400, ratePer: "1 BOX", category: "Kids Special" },
  { id: 75, name: "Selfie Stick", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Kids Special" },
  { id: 76, name: "Emu Egg", rate: 240, oldRate: 1200, ratePer: "1 BOX", category: "Kids Special" },
  { id: 77, name: "Old is Gold", rate: 220, oldRate: 1100, ratePer: "1 BOX", category: "Kids Special" },
  { id: 78, name: "Shinchan", rate: 100, oldRate: 500, ratePer: "1 BOX", category: "Kids Special" },
  { id: 79, name: "Motu patlu", rate: 280, oldRate: 1400, ratePer: "1 Box", category: "Kids Special" },
  { id: 80, name: "90 Watts", rate: 120, oldRate: 600, ratePer: "1 BOX", category: "Kids Special" },
  { id: 81, name: "Lollipop", rate: 180, oldRate: 900, ratePer: "1 BOX", category: "Kids Special" },
  { id: 82, name: "Roll cap", rate: 20, oldRate: 100, ratePer: "1 BOX", category: "Kids Special" },
  { id: 83, name: "Ring Cap", rate: 30, oldRate: 150, ratePer: "1 BOX", category: "Kids Special" },
  { id: 84, name: "Gun", rate: 0, ratePer: "1 PCS", category: "Kids Special" },
  { id: 85, name: "Pambara", rate: 140, oldRate: 700, ratePer: "1 BOX", category: "Kids Special" },
  { id: 86, name: "Butter Fly", rate: 136, oldRate: 680, ratePer: "1 BOX", category: "Kids Special" },
  { id: 87, name: "Pop pop", rate: 20, oldRate: 100, ratePer: "1 BOX", category: "Kids Special" },

  // Garland
  { id: 88, name: "100 LAR", rate: 50, oldRate: 250, ratePer: "1 BOX", category: "Garland" },
  { id: 89, name: "1000 WALA", rate: 330, oldRate: 1650, ratePer: "1 BOX", category: "Garland" },
  { id: 90, name: "2000 Wala", rate: 660, oldRate: 3300, ratePer: "1 BOX", category: "Garland" },
  { id: 91, name: "3000 Wala", rate: 990, oldRate: 4950, ratePer: "1 BOX", category: "Garland" },
  { id: 92, name: "5000 Wala", rate: 1650, oldRate: 8250, ratePer: "1 BOX", category: "Garland" },
  { id: 93, name: "10000 Wala", rate: 2900, oldRate: 14500, ratePer: "1 BOX", category: "Garland" },

  // Repeating Shot
  { id: 94, name: "12 shot", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Repeating Shot" },

  // Fountain
  { id: 95, name: "Asrafi koti(5 pcs)", rate: 120, oldRate: 600, ratePer: "1 BOX", category: "Fountain" },
  { id: 96, name: "Gold coin", rate: 120, oldRate: 600, ratePer: "1 BOX", category: "Fountain" },
  { id: 97, name: "Disco shower", rate: 130, oldRate: 650, ratePer: "1 BOX", category: "Fountain" },

  // Glittering
  { id: 98, name: "7 shot(5pcs)", rate: 120, oldRate: 600, ratePer: "1 BOX", category: "Glittering" },

  // Color Matches
  { id: 99, name: "Normal Matches", rate: 6, oldRate: 30, ratePer: "1 BOX", category: "Color Matches" },
  { id: 100, name: "Ideal Matches", rate: 15, oldRate: 75, ratePer: "1 BOX", category: "Color Matches" },
  { id: 101, name: "Super Deluxe matches", rate: 18, oldRate: 90, ratePer: "1 BOX", category: "Color Matches" },
  { id: 102, name: "Omega Matches", rate: 21, oldRate: 105, ratePer: "1 BOX", category: "Color Matches" },
  { id: 103, name: "Prince Matches", rate: 27, oldRate: 135, ratePer: "1 BOX", category: "Color Matches" },

  // Sound Crackers
  { id: 104, name: "1/4 KG paper bomb", rate: 100, oldRate: 500, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 105, name: "1/2 KG paper bomb", rate: 150, oldRate: 750, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 106, name: "1 KG paper bomb", rate: 200, oldRate: 1000, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 107, name: "Money in the bank 3in 1", rate: 152, oldRate: 760, ratePer: "1 BOX", category: "Sound Crackers" },

  // Pipe Items
  { id: 108, name: "Chota Fancy", rate: 48, oldRate: 240, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 109, name: "2\" Fancy pipe(3 pcs)", rate: 250, oldRate: 1250, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 110, name: "2\" Fancy pipe(1pcs)", rate: 150, oldRate: 750, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 111, name: "3\" 1/2 Fancy pipe", rate: 290, oldRate: 1450, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 112, name: "4 1/2\" Fancy Pipe", rate: 450, oldRate: 2250, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 113, name: "4 1/2 Double pcs", rate: 900, oldRate: 4500, ratePer: "1 BOX", category: "Pipe Items" },

  // Shots
  { id: 114, name: "30 Shots", rate: 450, oldRate: 2250, ratePer: "1 BOX", category: "Shots" },
  { id: 115, name: "60 Shots", rate: 900, oldRate: 4500, ratePer: "1 BOX", category: "Shots" },
  { id: 116, name: "120 shots", rate: 1800, oldRate: 9000, ratePer: "1 BOX", category: "Shots" },
  { id: 117, name: "240 Shots", rate: 3800, oldRate: 19000, ratePer: "1 BOX", category: "Shots" },
];

export const categories = [
  "All",
  "Sparklers",
  "Ground Chakkar",
  "Flower Pots",
  "Twinkling Star",
  "Fancy Novelties",
  "Atom Bomb",
  "Rockets",
  "Single Sound Crackers",
  "Chorsa & Giant",
  "Kids Special",
  "Garland",
  "Repeating Shot",
  "Fountain",
  "Glittering",
  "Color Matches",
  "Sound Crackers",
  "Pipe Items",
  "Shots"
];
