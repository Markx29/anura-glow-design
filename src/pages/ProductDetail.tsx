import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";


const ProductDetail = () => {
  useScrollAnimation();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [ ];
  
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "100% natural soy wax with lead-free cotton wick"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $50"
    },
    {
      icon: RotateCcw,
      title: "30-Day Return",
      description: "Easy returns within 30 days of purchase"
    }
  ];

  const reviews = [
    {
      name: "Emily Rose",
      rating: 5,
      comment: "Absolutely stunning! The rose design is so intricate and beautiful.",
      date: "2 weeks ago"
    },
    {
      name: "Sarah Johnson", 
      rating: 5,
      comment: "Perfect gift for my friend's birthday. The scent is amazing!",
      date: "1 month ago"
    },
    {
      name: "Maria Garcia",
      rating: 5,
      comment: "Burns evenly and the fragrance fills the entire room. Love it!",
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 scroll-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images */}
            <div className="space-y-6">
              <div className="aspect-square relative overflow-hidden rounded-2xl shadow-luxury hover-scale-card">
                <img 
                  src={images[selectedImage]} 
                  alt="Handmade Rose Candle Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">New</Badge>
                </div>
                <button
                 className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Add to wishlist"
                  type="button">
                  <Heart className="w-5 h-5 text-primary" />
                  </button>
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 hover-scale-card ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pl-8 scroll-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-body text-muted-foreground">(127 reviews)</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Rose Blossom Collection
              </h1>
              
              <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
                Exquisite handcrafted rose-shaped candles that bloom with elegance. Each petal is 
                meticulously formed from premium soy wax, creating a stunning centerpiece that 
                transforms any space into a romantic sanctuary.
              </p>
              
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="font-display text-3xl font-bold text-primary">$48</span>
                <span className="font-body text-lg text-muted-foreground line-through">$64</span>
                <Badge variant="destructive">25% OFF</Badge>
              </div>
              
              {/* Color Options */}
              <div className="mb-8">
                <h3 className="font-ui font-semibold text-foreground mb-4">Available Colors</h3>
                <div className="flex space-x-3">
                  {['bg-pink-200', 'bg-purple-200', 'bg-amber-100', 'bg-white', 'bg-rose-300', 'bg-slate-300'].map((color, index) => (
                   <button
                   key={index}
                   className={`w-10 h-10 rounded-full border-2 border-border hover:border-primary transition-colors ${color} ${index === 0 ? 'ring-2 ring-primary' : ''}`}
                   aria-label={`Select ${color} color`}
                   type="button"
                 >
                   <span className="sr-only">Select {color} color</span>
                 </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity & Add to Cart */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="font-ui font-medium text-foreground">Quantity:</span>
                  <div className="flex items-center border border-border rounded-lg">
                   
                    <span className="px-4 py-2 font-ui font-medium">{quantity}</span>
                    
                      <Plus className="w-4 h-4" />
                    
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" className="flex-1">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline_gold" size="lg" className="flex-1">
                  Buy Now
                </Button>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
                {features.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-ui font-semibold text-sm text-foreground">{feature.title}</h4>
                    <p className="font-body text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-warm-beige">
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Product Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-luxury">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Specifications</h3>
              <ul className="space-y-3 font-body text-muted-foreground">
                <li className="flex justify-between">
                  <span>Material:</span>
                  <span className="text-foreground">Premium Soy Wax</span>
                </li>
                <li className="flex justify-between">
                  <span>Burn Time:</span>
                  <span className="text-foreground">25-30 hours</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimensions:</span>
                  <span className="text-foreground">4" x 4" x 2.5"</span>
                </li>
                <li className="flex justify-between">
                  <span>Weight:</span>
                  <span className="text-foreground">8 oz</span>
                </li>
                <li className="flex justify-between">
                  <span>Wick Type:</span>
                  <span className="text-foreground">Cotton Lead-Free</span>
                </li>
              </ul>
            </div>
            
            <div className="card-luxury">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">Fragrance Notes</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-ui font-medium text-primary">Top Notes:</span>
                  <p className="font-body text-muted-foreground">Fresh Rose Petals, Morning Dew</p>
                </div>
                <div>
                  <span className="font-ui font-medium text-primary">Heart Notes:</span>
                  <p className="font-body text-muted-foreground">Bulgarian Rose, Peony, Jasmine</p>
                </div>
                <div>
                  <span className="font-ui font-medium text-primary">Base Notes:</span>
                  <p className="font-body text-muted-foreground">White Musk, Sandalwood, Vanilla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto scroll-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Customer Reviews
          </h2>
          
          <div className="space-y-8">
            {reviews.map((review, index) => (
              <div key={index} className="card-luxury hover-scale-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center">
                      <span className="font-ui font-bold text-white">{review.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-ui font-semibold text-foreground">{review.name}</h4>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="font-body text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="font-body text-foreground leading-relaxed">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;