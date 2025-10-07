import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarohi Mehta",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "The candles I ordered for my engagement were beyond perfect! The fragrance filled the entire room, and the design looked so elegant. Everyone kept asking where I got them from!",
  },
  {
    id: 2,
    name: "Rohit Singh",
    location: "Bangalore, Punjab",
    rating: 5,
    text: "I wanted premium gifts for my clients, and Anura candles were a hit. The customization, packaging, and fragrance quality — everything felt high-end and truly Indian in essence.",
  },
  {
    id: 3,
    name: "Priya Nair",
    location: "Kochi, Kerala",
    rating: 5,
    text: "Absolutely love the Sandalwood Serenity candle! It burns beautifully and fills my home with such calming vibes. It’s now a part of my daily evening ritual.",
  },
  {
    id: 4,
    name: "Arjun Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "From the elegant packaging to the long-lasting fragrance, everything feels so thoughtfully crafted. Anura candles truly bring a touch of luxury to everyday moments.",
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
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`group scroll-fade-in hover-scale-card`} style={{animationDelay: `${index * 150}ms`}}>
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