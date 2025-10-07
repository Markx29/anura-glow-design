import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import CheckoutStepper from "@/components/CheckoutStepper";
import OrderSummary from "@/components/OrderSummary";
import TrustBadges from "@/components/TrustBadges";
import { CreditCard, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const { toast } = useToast();

  const steps = [
    { id: 1, label: "Cart" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Payment" },
    { id: 4, label: "Confirm" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed Successfully",
      description: "Thank you for your purchase. You'll receive a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-serif font-semibold text-center text-foreground">
            Lumière
          </h1>
        </div>
      </header>

      {/* Stepper */}
      <div className="container mx-auto px-4">
        <CheckoutStepper currentStep={currentStep} steps={steps} />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 mb-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Shipping Information */}
              <section className="bg-card rounded-2xl p-6 md:p-8 shadow-soft animate-fade-in">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Shipping Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium text-foreground">
                      Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium text-foreground">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="New York"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-medium text-foreground">
                      ZIP Code
                    </Label>
                    <Input
                      id="zip"
                      placeholder="10001"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* Payment Information */}
              <section className="bg-card rounded-2xl p-6 md:p-8 shadow-soft animate-fade-in">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-serif font-semibold text-foreground">
                    Payment Details
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-sm font-medium text-foreground">
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-sm font-medium text-foreground">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-sm font-medium text-foreground">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        type="password"
                        maxLength={3}
                        className="h-11 bg-background border-border focus:border-primary focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Complete Purchase Button */}
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-medium bg-gradient-warm hover:opacity-90 transition-all duration-300 hover:shadow-warm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Complete Purchase
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Your payment information is secure and encrypted
                </p>
              </section>

              {/* Trust Badges */}
              <TrustBadges />
            </form>
          </div>

          {/* Order Summary - Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Anura. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
