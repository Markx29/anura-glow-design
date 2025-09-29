import { Button } from "@/components/ui/button";
import { Upload, Palette, Package, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Scent",
    description: "Select from our signature fragrances"
  },
  {
    icon: Package,
    title: "Choose Jar",
    description: "Pick your preferred size and style"
  },
  {
    icon: Upload,
    title: "Add Personal Touch",
    description: "Upload your custom design or label"
  },
  {
    icon: Sparkles,
    title: "Order Size",
    description: "Single candle or bulk orders"
  }
];

const CustomDesign = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-warm-beige">
      <div className="max-w-7xl mx-auto scroll-fade-in">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Vision, Your Candle
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Upload your design, choose your scent, and let us craft a one-of-a-kind candle just for you. 
            Perfect for special events, corporate gifts, or personal collections.
          </p>
        </div>
        
        {/* Upload Area */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center hover:border-primary/50 transition-colors duration-300 bg-background/50 backdrop-blur-sm">
            <Upload className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="font-ui text-xl font-semibold text-foreground mb-4">
              Drop your design here
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Drag and drop your artwork, or click to browse files
            </p>
            <Button variant="outline_gold" size="lg">
              Choose File
            </Button>
            <p className="font-body text-sm text-muted-foreground mt-4">
              Accepted formats: PNG, JPG, SVG, PDF (max 10MB)
            </p>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-tertiary rounded-full flex items-center justify-center mx-auto shadow-luxury">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-ui font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            <Sparkles className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Start Designing Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomDesign;