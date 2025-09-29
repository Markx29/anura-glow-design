import { Leaf, Heart, Flame, Award } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-hands.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainable",
    description: "100% natural soy wax and eco-friendly packaging"
  },
  {
    icon: Heart,
    title: "Hand-Poured",
    description: "Each candle is crafted with love and attention to detail"
  },
  {
    icon: Flame,
    title: "Clean Burning",
    description: "Lead-free cotton wicks for a pure, long-lasting flame"
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest natural fragrances and materials"
  }
];

const BrandStory = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-fade-in">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={lifestyleImage} 
                alt="Hands holding a lit handmade soy candle in warm natural lighting"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-luxury">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="font-body text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Choose Anura?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-12 leading-relaxed">
              Born from a passion for sustainable luxury, Anura represents the perfect harmony between 
              artisanal craftsmanship and modern elegance. Each candle tells a story of mindful creation, 
              using only the purest soy wax and carefully curated fragrances.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-gradient-card rounded-2xl border border-border/50">
              <p className="font-body text-muted-foreground italic">
                "Every Anura candle is a testament to our commitment to quality, sustainability, and the belief 
                that luxury should never come at the expense of our planet."
              </p>
              <div className="mt-4 font-ui font-semibold text-primary">
                — The Anura Team
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;