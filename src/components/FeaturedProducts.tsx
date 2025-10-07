import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Bouqet from "@/assets/Bouqet.jpg";
import Bluerosebouqetcandle from "@/assets/Bluerosebouqetcandle.jpg";
import MiniJar from "@/assets/MiniJar.jpg";

// Define the Product type for TypeScript
interface Product {
  id: string;
  name: string;
  scent: string;
  price: number; // Price in INR after conversion
  image: string; // Use imported image
  description: string;
  category: string;
  burnTime: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: "1",
    name: "Imperial Bouquet",
    scent: "Rose",
    price: 900, // Converted to INR
    image: Bouqet, // Use imported image
    description:
      "A majestic peony-inspired bloom in deep rose wax, unfurling layers of velvety petals around a subtle wick. Infused with pure rose essence, it releases a rich, romantic floral bouquet that lingers like a whispered secret in a grand ballroom. Perfect for evening soirées or quiet moments of self-indulgence.",
    category: "Luxury",
    burnTime: "50 hours",
    rating: 4.9,
    reviews: 150,
    inStock: true,
  },
  {
    id: "2",
    name: "candle",
    scent: "Amber",
    price: 2000, // Converted to INR
    image: MiniJar, // Use imported image
    description:
      "Shaped as a plush, heart-adorned cluster of orbs, this candle exudes warm amber notes blended with hints of vanilla and musk. Encased in a faceted glass dome, its golden flecks catch the light, evoking the glow of candlelit chandeliers. Ideal for creating an aura of mystery and allure in luxurious lounges.",
    category: "Luxury",
    burnTime: "60 hours",
    rating: 4.8,
    reviews: 130,
    inStock: true,
  },
  {
    id: "3",
    name: "Bluerosebouqetcandle",
    scent: "Sandalwood",
    price: 2500, // Converted to INR
    image: Bluerosebouqetcandle, // Use imported image
    description:
      "Our signature rose-sculpted teddy bear, reimagined in creamy sandalwood wax with a hidden heart core. The scent profile weaves smoky sandalwood with subtle cedar undertones for a grounding, exotic warmth. Presented in a velvet-lined box, it's the ultimate heirloom gift for connoisseurs of refined sensory experiences.",
    category: "Luxury",
    burnTime: "70 hours",
    rating: 4.7,
    reviews: 140,
    inStock: true,
  },
];
   // Added missing closing bracket

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Best-Sellers
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved scents, each carefully crafted with premium
            soy wax and natural fragrances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group scroll-fade-in hover-scale-card`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="card-luxury relative overflow-hidden">
                <div className="aspect-square relative mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <Link to={`/product/${product.id}`}>
                      <Button
                        variant="hero"
                        size="lg"
                        className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        aria-label={`Quick shop for ${product.name}`}
                      >
                        Quick Shop
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <p className="font-ui text-xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button variant="outline_gold" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;