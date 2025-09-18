export interface Product {
  id: number;
  name: string;
  rate: number;
  ratePer: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  // Sparklers
  { id: 1, name: "7cm electric sparklers", rate: 60, ratePer: "1 BOX", category: "Sparklers" },
  { id: 2, name: "7cm colour sparklers", rate: 65, ratePer: "1 BOX", category: "Sparklers" },
  { id: 3, name: "7cm green sparklers", rate: 70, ratePer: "1 BOX", category: "Sparklers" },
  { id: 4, name: "7cm red sparklers", rate: 80, ratePer: "1 BOX", category: "Sparklers" },
  { id: 5, name: "10cm electric sparklers", rate: 85, ratePer: "1 BOX", category: "Sparklers" },
  { id: 6, name: "10cm colour sparklers", rate: 100, ratePer: "1 BOX", category: "Sparklers" },
  { id: 7, name: "10cm green sparklers", rate: 110, ratePer: "1 BOX", category: "Sparklers" },
  { id: 8, name: "10cm red sparklers", rate: 130, ratePer: "1 BOX", category: "Sparklers" },
  { id: 9, name: "12cm electric sparklers", rate: 130, ratePer: "1 BOX", category: "Sparklers" },
  { id: 10, name: "12cm colour sparklers", rate: 145, ratePer: "1 BOX", category: "Sparklers" },
  { id: 11, name: "12cm green sparklers", rate: 160, ratePer: "1 BOX", category: "Sparklers" },
  { id: 12, name: "12cm red sparklers", rate: 185, ratePer: "1 BOX", category: "Sparklers" },
  { id: 13, name: "15cm electric sparklers", rate: 200, ratePer: "1 BOX", category: "Sparklers" },
  { id: 14, name: "15cm colour sparklers", rate: 220, ratePer: "1 BOX", category: "Sparklers" },
  { id: 15, name: "15cm green sparklers", rate: 250, ratePer: "1 BOX", category: "Sparklers" },
  { id: 16, name: "15cm red sparklers", rate: 285, ratePer: "1 BOX", category: "Sparklers" },
  { id: 17, name: "30cm electric sparklers", rate: 200, ratePer: "1 BOX", category: "Sparklers" },
  { id: 18, name: "30cm colour sparklers", rate: 220, ratePer: "1 BOX", category: "Sparklers" },
  { id: 19, name: "30cm green sparklers", rate: 250, ratePer: "1 BOX", category: "Sparklers" },
  { id: 20, name: "30cm red sparklers", rate: 285, ratePer: "1 BOX", category: "Sparklers" },
  { id: 21, name: "30cm multimix sparklers", rate: 300, ratePer: "1 BOX", category: "Sparklers" },
  { id: 22, name: "50cm electric sparklers", rate: 800, ratePer: "1 BOX", category: "Sparklers" },
  { id: 23, name: "50cm colour sparklers", rate: 900, ratePer: "1 BOX", category: "Sparklers" },
  { id: 24, name: "Rotating Sparklers Gold", rate: 1100, ratePer: "1 BOX", category: "Sparklers" },
  { id: 25, name: "Rotating Sparklers Multimix", rate: 1300, ratePer: "1 BOX", category: "Sparklers" },

  // Ground Chakkar
  { id: 26, name: "Chakkar Big (10pcs)", rate: 200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 27, name: "Chakkar Special", rate: 350, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 28, name: "Chakkar Deluxe", rate: 700, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 29, name: "4*4 wheel (5 Pcs)", rate: 1200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 30, name: "Wire Chakkar", rate: 1200, ratePer: "1 BOX", category: "Ground Chakkar" },
  { id: 31, name: "Wizz Chakkar", rate: 850, ratePer: "1 BOX", category: "Ground Chakkar" },

  // Flower Pots
  { id: 32, name: "Flower pots small", rate: 300, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 33, name: "Flower pots big", rate: 425, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 34, name: "Flower pots special", rate: 550, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 35, name: "Flower pots Ashoka", rate: 700, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 36, name: "Colour Koti", rate: 1150, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 37, name: "Tri Colour", rate: 1500, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 38, name: "Titanium Cone", rate: 800, ratePer: "1 BOX", category: "Flower Pots" },
  { id: 39, name: "Crack Corn", rate: 740, ratePer: "1 BOX", category: "Flower Pots" },

  // Twinkling Star
  { id: 40, name: "1(1/2)\" Twinkling Star", rate: 115, ratePer: "1 BOX", category: "Twinkling Star" },
  { id: 41, name: "4\" Twinkling Star", rate: 350, ratePer: "1 Box", category: "Twinkling Star" },

  // Fancy Novelties
  { id: 42, name: "Peacock Feature", rate: 600, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 43, name: "Tin shower small", rate: 500, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 44, name: "Tin shower Big", rate: 700, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 45, name: "Siren (3 pieces)", rate: 900, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 46, name: "Color Smoke(3 pieces)", rate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 47, name: "Window candle(2 pieces)", rate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 48, name: "Pencil(3 pieces)", rate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 49, name: "6\" Water Queen", rate: 1200, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 50, name: "Magical peacock", rate: 1250, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 51, name: "Leader", rate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 52, name: "Bada Peacock", rate: 2300, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 53, name: "Top Gun", rate: 800, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 54, name: "Daisy Mixing", rate: 1000, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 55, name: "Helicopter", rate: 900, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 56, name: "IPL shower", rate: 2300, ratePer: "1 BOX", category: "Fancy Novelties" },
  { id: 57, name: "I cone", rate: 2150, ratePer: "1 BOX", category: "Fancy Novelties" },

  // Atom Bomb
  { id: 58, name: "Hydro Bomb", rate: 375, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 59, name: "King of King", rate: 500, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 60, name: "Digital Bomb", rate: 900, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 61, name: "Nuclear Bomb", rate: 1500, ratePer: "1 BOX", category: "Atom Bomb" },
  { id: 62, name: "Avatar Bomb", rate: 1700, ratePer: "1 BOX", category: "Atom Bomb" },

  // Rockets
  { id: 63, name: "Whistle Rocket", rate: 1250, ratePer: "1 Box", category: "Rockets" },

  // Single Sound Crackers
  { id: 64, name: "2(3/4) sound Cracker", rate: 55, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 65, name: "3 1/2 Sound Cracker", rate: 75, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 66, name: "4\" Sound Cracker", rate: 110, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 67, name: "4\" Gold Lakshmi", rate: 160, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 68, name: "4\" deluxe seven crackers", rate: 140, ratePer: "1 PKt", category: "Single Sound Crackers" },
  { id: 69, name: "5\" Sound Crackers", rate: 180, ratePer: "1 PKt", category: "Single Sound Crackers" },

  // Chorsa & Giant
  { id: 70, name: "28 Chorsa", rate: 90, ratePer: "1 PKT", category: "Chorsa & Giant" },
  { id: 71, name: "56 Giant", rate: 300, ratePer: "1 PKT", category: "Chorsa & Giant" },

  // Kids Special
  { id: 72, name: "Kit kat", rate: 160, ratePer: "1 BOX", category: "Kids Special" },
  { id: 73, name: "Red Bijilli", rate: 160, ratePer: "1 Bag", category: "Kids Special" },
  { id: 74, name: "Photo Flash", rate: 400, ratePer: "1 BOX", category: "Kids Special" },
  { id: 75, name: "Selfie Stick", rate: 900, ratePer: "1 BOX", category: "Kids Special" },
  { id: 76, name: "Emu Egg", rate: 1200, ratePer: "1 BOX", category: "Kids Special" },
  { id: 77, name: "Old is Gold", rate: 1100, ratePer: "1 BOX", category: "Kids Special" },
  { id: 78, name: "Shinchan", rate: 500, ratePer: "1 BOX", category: "Kids Special" },
  { id: 79, name: "Motu patlu", rate: 1400, ratePer: "1 Box", category: "Kids Special" },
  { id: 80, name: "90 Watts", rate: 600, ratePer: "1 BOX", category: "Kids Special" },
  { id: 81, name: "Lollipop", rate: 900, ratePer: "1 BOX", category: "Kids Special" },
  { id: 82, name: "Roll cap", rate: 100, ratePer: "1 BOX", category: "Kids Special" },
  { id: 83, name: "Ring Cap", rate: 150, ratePer: "1 BOX", category: "Kids Special" },
  { id: 84, name: "Gun", rate: 0, ratePer: "1 PCS", category: "Kids Special" },
  { id: 85, name: "Pambara", rate: 700, ratePer: "1 BOX", category: "Kids Special" },
  { id: 86, name: "Butter Fly", rate: 680, ratePer: "1 BOX", category: "Kids Special" },
  { id: 87, name: "Pop pop", rate: 100, ratePer: "1 BOX", category: "Kids Special" },

  // Garland
  { id: 88, name: "100 LAR", rate: 250, ratePer: "1 BOX", category: "Garland" },
  { id: 89, name: "1000 WALA", rate: 1650, ratePer: "1 BOX", category: "Garland" },
  { id: 90, name: "2000 Wala", rate: 3300, ratePer: "1 BOX", category: "Garland" },
  { id: 91, name: "3000 Wala", rate: 4950, ratePer: "1 BOX", category: "Garland" },
  { id: 92, name: "5000 Wala", rate: 8250, ratePer: "1 BOX", category: "Garland" },
  { id: 93, name: "10000 Wala", rate: 14500, ratePer: "1 BOX", category: "Garland" },

  // Repeating Shot
  { id: 94, name: "12 shot", rate: 1000, ratePer: "1 BOX", category: "Repeating Shot" },

  // Fountain
  { id: 95, name: "Asrafi koti(5 pcs)", rate: 600, ratePer: "1 BOX", category: "Fountain" },
  { id: 96, name: "Gold coin", rate: 600, ratePer: "1 BOX", category: "Fountain" },
  { id: 97, name: "Disco shower", rate: 650, ratePer: "1 BOX", category: "Fountain" },

  // Glittering
  { id: 98, name: "7 shot(5pcs)", rate: 600, ratePer: "1 BOX", category: "Glittering" },

  // Color Matches
  { id: 99, name: "Normal Matches", rate: 30, ratePer: "1 BOX", category: "Color Matches" },
  { id: 100, name: "Ideal Matches", rate: 75, ratePer: "1 BOX", category: "Color Matches" },
  { id: 101, name: "Super Deluxe matches", rate: 90, ratePer: "1 BOX", category: "Color Matches" },
  { id: 102, name: "Omega Matches", rate: 105, ratePer: "1 BOX", category: "Color Matches" },
  { id: 103, name: "Prince Matches", rate: 135, ratePer: "1 BOX", category: "Color Matches" },

  // Sound Crackers
  { id: 104, name: "1/4 KG paper bomb", rate: 500, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 105, name: "1/2 KG paper bomb", rate: 750, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 106, name: "1 KG paper bomb", rate: 1000, ratePer: "1 BOX", category: "Sound Crackers" },
  { id: 107, name: "Money in the bank 3in 1", rate: 760, ratePer: "1 BOX", category: "Sound Crackers" },

  // Pipe Items
  { id: 108, name: "Chota Fancy", rate: 240, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 109, name: "2\" Fancy pipe(3 pcs)", rate: 1250, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 110, name: "2\" Fancy pipe(1pcs)", rate: 750, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 111, name: "3\" 1/2 Fancy pipe", rate: 1450, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 112, name: "4 1/2\" Fancy Pipe", rate: 2250, ratePer: "1 BOX", category: "Pipe Items" },
  { id: 113, name: "4 1/2 Double pcs", rate: 4500, ratePer: "1 BOX", category: "Pipe Items" },

  // Shots
  { id: 114, name: "30 Shots", rate: 2250, ratePer: "1 BOX", category: "Shots" },
  { id: 115, name: "60 Shots", rate: 4500, ratePer: "1 BOX", category: "Shots" },
  { id: 116, name: "120 shots", rate: 9000, ratePer: "1 BOX", category: "Shots" },
  { id: 117, name: "240 Shots", rate: 19000, ratePer: "1 BOX", category: "Shots" },
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
