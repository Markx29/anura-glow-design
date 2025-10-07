import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-warm-beige">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a custom order in mind? Questions about our candles? 
            We'd love to hear from you and help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-luxury">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Send us a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-ui font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="font-ui font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="h-12 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="font-ui font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="font-ui font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  type="text" 
                  placeholder="Custom candle inquiry"
                  className="h-12 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="font-ui font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project or ask us anything..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-luxury">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-ui font-semibold text-foreground mb-1"> india </h4>
                    <p className="font-body text-muted-foreground">
                      <br />
                      
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-ui font-semibold text-foreground mb-1">Phone</h4>
                    <p className="font-body text-muted-foreground">
                     +(91)  8847065877    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-tertiary to-accent rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-ui font-semibold text-foreground mb-1">Email</h4>
                    <p className="font-body text-muted-foreground">
                      hello@anuracandles.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="card-luxury">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Monday - Friday</span>
                  <span className="font-body text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Saturday</span>
                  <span className="font-body text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Sunday</span>
                  <span className="font-body text-foreground">Closed</span>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="card-luxury">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center hover:shadow-glow transition-all duration-300 group">
                  <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
                
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-tertiary to-accent rounded-lg flex items-center justify-center hover:transform: scale(2) shadow-glow transition-all duration-3000 group">
                  <Twitter className="w-6 h-6 text-white group-hover:scale-110 transition-transform: scale(2)" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;