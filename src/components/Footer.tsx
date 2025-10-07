import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl font-bold mb-6 text-primary">
              Anura
            </h3>
            <p className="font-body text-secondary-foreground/80 mb-6 leading-relaxed">
              Crafting luxury handmade soy candles with sustainable materials and timeless elegance. 
              Each candle tells a story of mindful creation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-ui font-semibold text-lg mb-6 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Shop All Candles",
                "Custom Design",
                "Gift Cards",
                "About Us",
                "Our Story"
              ].map((link) => (
                <li key={link}>
                  <a href="/shop" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h4 className="font-ui font-semibold text-lg mb-6 text-primary">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {[
                "Contact Us",
                "FAQ",
                "Shipping & Returns",
                "Size Guide",
                "Care Instructions",
                "Wholesale Inquiry"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-secondary-foreground/80 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-ui font-semibold text-lg mb-6 text-primary">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-body text-secondary-foreground/80 text-sm">
                  123 Artisan Street<br />
                  Craft District, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-secondary-foreground/80 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-secondary-foreground/80 text-sm">
                  hello@anuracandles.com
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-secondary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Anura Candles. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-body text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="font-body text-secondary-foreground/60 hover:text-primary text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;