import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "New York, NY",
    rating: 5,
    text: "The custom candles for my wedding were absolutely perfect. The scent was exactly what I envisioned, and the quality is unmatched. My guests are still talking about them!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b194?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    location: "Austin, TX",
    rating: 5,
    text: "As a business owner, I needed high-quality corporate gifts. Anura delivered beyond expectations. The custom branding looked elegant and professional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "Portland, OR",
    rating: 5,
    text: "I'm obsessed with the Sage Tranquility candle! It burns evenly, smells amazing for hours, and the packaging is so beautiful. Definitely subscribing to the monthly box.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Park",
    location: "San Francisco, CA",
    rating: 5,
    text: "The attention to detail is incredible. From the moment you open the package to lighting the candle, everything feels premium and thoughtfully designed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-warm-beige to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who have transformed their spaces with Anura candles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group">
              <div className="card-luxury h-full">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary" 
                    />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-4 mt-auto">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-ui font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial) => (
                <img 
                  key={testimonial.id}
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <span className="font-body text-muted-foreground">
              +1,000 verified reviews
            </span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;