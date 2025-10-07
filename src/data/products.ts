import { Product } from "@/components/ProductCard";
import ValentineBubbleCandle from "@/assets/valentilebubblecandle.jpg";
import MiniTeddyCandle from "@/assets/MiniTeddyCandle.jpg";

import BlueRoseBouquetCandle from "@/assets/Bluerosebouqetcandle.jpg";
import Laddu from "@/assets/Laddu.jpg";
import Bouquet from "@/assets/Bouqet.jpg";
import BouqetCnadle from "@/assets/BouqetCnadle.jpg";
import Bubblecodle from "@/assets/Bubblecodle.jpg";
import Teddy from "@/assets/Teddy.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Mini Jar candle",
    scent: "Rose",
    price: 740,
    image: Teddy, // Use the imported Teddy image
    description: "A majestic peony-inspired bloom in deep rose wax, unfurling layers of velvety petals around a subtle wick. Infused with pure rose essence, it releases a rich, romantic floral bouquet that lingers like a whispered secret in a grand ballroom. Perfect for evening soirées or quiet moments of self-indulgence.",
    category: "Luxury",
    burnTime: "50 hours",
    rating: 4.9,
    reviews: 150,
    inStock: true,
  },
  {
    id: "2",
    name: "Valentine Bubble Candle",
    scent: "Rose",
    price: 980,
    image: ValentineBubbleCandle, // Use the imported ValentineBubbleCandle image
    description: "Shaped as a plush, heart-adorned cluster of orbs, this candle exudes warm amber notes blended with hints of vanilla and musk. Encased in a faceted glass dome, its golden flecks catch the light, evoking the glow of candlelit chandeliers. Ideal for creating an aura of mystery and allure in luxurious lounges.",
    category: "Luxury",
    burnTime: "60 hours",
    rating: 4.8,
    reviews: 130,
    inStock: true,
  },
  {
    id: "3",
    name: "Mini Teddy Candle",
    scent: "Sandalwood",
    price: 940,
    image: MiniTeddyCandle, // Use the imported MiniTeddyCandle image
    description: "Our signature rose-sculpted teddy bear, reimagined in creamy sandalwood wax with a hidden heart core. The scent profile weaves smoky sandalwood with subtle cedar undertones for a grounding, exotic warmth. Presented in a velvet-lined box, it's the ultimate heirloom gift for connoisseurs of refined sensory experiences.",
    category: "Luxury",
    burnTime: "70 hours",
    rating: 4.7,
    reviews: 140,
    inStock: true,
  },
  {
    id: "4",
    name: "Laddu",
    scent: "Rose",
    price: 880,
    image: Laddu, // Use the imported Laddu image
    description: "A soft pink peony flower candle, evoking the last blush of fall blooms against a bed of faux foliage. Rose scent mingles with subtle cinnamon hints for a cozy, harvest-inspired aroma. Hand-poured in a matte ceramic dish, it's perfect for mantel displays during crisp evenings.",
    category: "Seasonal",
    burnTime: "40 hours",
    rating: 4.6,
    reviews: 90,
    inStock: true,
  },
  {
    id: "5",
    name: "Valentine Bubble Candle",
    scent: "Vanilla",
    price: 920,
    image: ValentineBubbleCandle, // Use the imported ValentineBubbleCandle image
    description: "White orbs dotted with red hearts, reminiscent of snow-dusted berries in midwinter. Creamy vanilla essence warms the air with sweet, comforting notes of baked goods and fresh cream. Packaged in a kraft box with evergreen accents, it brings hygge to holiday tables.",
    category: "Seasonal",
    burnTime: "45 hours",
    rating: 4.7,
    reviews: 100,
    inStock: true,
  },
  {
    id: "6",
    name: "Bouquet",
    scent: "Eucalyptus",
    price: 900,
    image: Bouquet, // Use the imported Bouquet image
    description: "A cluster of pale green-tinted bubbles, bursting with invigorating eucalyptus and a touch of mint. This seasonal favorite mimics morning dew on new leaves, refreshing any room with its clean, spa-like vitality. Ideal for Easter brunches or renewal rituals.",
    category: "Seasonal",
    burnTime: "42 hours",
    rating: 4.5,
    reviews: 80,
    inStock: true,
  },
  {
    id: "7",
    name: "Blue Rose Bouquet Candle",
    scent: "Lavender",
    price: 240,
    image: BlueRoseBouquetCandle, // Use the imported BlueRoseBouquetCandle image
    description: "A minimalist lavender-hued peony flower, its ruffled petals soft and serene. Infused with calming lavender oil, it promotes relaxation and restful sleep with herbaceous, floral whispers. Set on a wooden base for easy display, it's your go-to for bedside serenity.",
    category: "Essential",
    burnTime: "35 hours",
    rating: 4.9,
    reviews: 110,
    inStock: true,
  },
  {
    id: "8",
    name: "Bouquet",
    scent: "Citrus Candle",
    price: 220,
    image: Bouquet, // Use the imported Bouquet image
    description: "Playful white orbs accented with red hearts, zested with bright citrus oils for an uplifting, energizing vibe. This essential pick-me-up evokes sun-kissed orchards, cutting through stress with tangy lemon and orange notes. Compact and giftable, perfect for workspaces or morning routines.",
    category: "Essential",
    burnTime: "30 hours",
    rating: 4.6,
    reviews: 70,
    inStock: true,
  },
  {
    id: "9",
    name: "Mini Jar Candle",
    scent: "Cedar",
    price: 360,
    image: Laddu, // Use the imported MiniJarCandle image
    description: "A compact rose-textured bear in neutral cedar wax, holding a simple wooden heart. Earthy cedar scent grounds and balances, with woody depth that fosters focus and calm. Doubles as a sculptural decor piece for minimalist shelves.",
    category: "Essential",
    burnTime: "38 hours",
    rating: 4.4,
    reviews: 85,
    inStock: true,
  },
  {
    id: "10",
    name: "BubbleCodle",
    scent: "Rose",
    price: 600,
    image: Bubblecodle, // Use the imported MiniJarCandle image
    description: "A pair of rose-sculpted bears—one pink, one white—embracing with heart centers, dusted in edible gold leaf. Rose petals unfold in intoxicating layers, paired with a hint of berry for a fairy-tale romance. Housed in a mirrored gift box, it's a whimsical statement for anniversaries or enchanted evenings.",
    category: "Special Edition",
    burnTime: "55 hours per bear",
    rating: 4.9,
    reviews: 180,
    inStock: true,
    featured: true,
  },
  {
    id: "11",
    name: "Mini Jar Candle",
    scent: "Lavender",
    price: 560,
    image: Laddu, // Use the imported MiniJarCandle image
    description: "Cascading white orbs flecked with 24k gold, releasing a dreamy lavender haze infused with chamomile for ultimate tranquility. This special release draws from Provençal fields at dusk, with a subtle shimmer that dances in low light. Limited to 500 pieces, ideal for meditative escapes.",
    category: "Special Edition",
    burnTime: "50 hours",
    rating: 4.8,
    reviews: 120,
    inStock: true,
  },
  {
    id: "12",
    name: "BouqetCnadle",
    scent: "Amber & Citrus",
    price: 760,
    image: BouqetCnadle, // Use the imported MiniJarCandle image
    description: "A faceted glass jar filled with creamy wax ripples, blending smoky amber with zesty citrus for a bold, unexpected harmony. Topped with a crystal lid and amethyst accents, this fusion scent awakens the senses like a sunset cocktail. A collector's dream for adventurous palates.",
    category: "Special Edition",
    burnTime: "65 hours",
    rating: 4.7,
    reviews: 160,
    inStock: true,
  },
];
