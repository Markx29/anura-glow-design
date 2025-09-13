import { Button } from "@/components/ui/button";
import candleSage from "@/assets/candle-sage.jpg";
import candleIvory from "@/assets/candle-ivory.jpg";
import candleAmber from "@/assets/candle-amber.jpg";

const products = [
  {
    id: 1,
    name: "Sage Tranquility",
    price: "$32",
    image: candleSage,
    description: "Calming sage and eucalyptus blend"
  },
  {
    id: 2,
    name: "Ivory Dreams",
    price: "$32",
    image: candleIvory,
    description: "Vanilla and white tea serenity"
  },
  {
    id: 3,
    name: "Amber Warmth",
    price: "$32",
    image: candleAmber,
    description: "Rich amber and sandalwood"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Best-Sellers
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved scents, each carefully crafted with premium soy wax and natural fragrances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="card-luxury relative overflow-hidden">
                <div className="aspect-square relative mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                    <Button variant="hero" size="lg" className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Quick Shop
                    </Button>
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
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline_gold" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;