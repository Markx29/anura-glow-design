import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, Crown, Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-3xl p-12 text-center border border-border/20">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center mx-auto mb-8 shadow-luxury">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the Anura Community
          </h2>
         

          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center space-x-3">
              <Gift className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">10% Off First Order</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Crown className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">VIP Early Access</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-primary" />
              <span className="font-body text-muted-foreground">Monthly Tips</span>
            </div>
          </div>
          
          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 h-12 bg-background/80 border-border/50 focus:border-primary"
            />
            <Button variant="hero" size="lg" className="min-w-[120px]">
              Subscribe
            </Button>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
        
        {/* Subscription Box Teaser */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 border border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Candle Club Subscription
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                Discover a new signature scent every month, curated by our master chandlers.
              </p>
            </div>
            <Button variant="outline_gold" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;