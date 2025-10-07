import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 

          alt="Artisanal handmade soy candles arranged on black marble table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto scroll-fade-in">
        <div className="fade-in-up animate">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Anura — Handmade Soy Candles
          </h1>
          <p className="font-display text-2xl md:text-3xl text-white/90 mb-4 italic">
            Custom Scents. Timeless Glow.
          </p>
          <p className="font-body text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Custom scents • Aesthetic gifts • Bulk orders
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          <Button
  variant="hero"
  size="xl"
  className="min-w-[200px]"
  onClick={() => (window.location.href = "/shop")}
>
  Shop Now
</Button>

            <Button variant="outline_gold" size="xl" className="min-w-[200px] bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground">
              Create Your Candle
              scroll down
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;