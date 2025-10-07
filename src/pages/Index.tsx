import { useState, useMemo } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProductCard, Product } from "@/components/ProductCard";
import { FilterSidebar, FilterState } from "@/components/FilterSidebar";
import { SortSelector, SortOption } from "@/components/SortSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Add Tabs components
import { CreditCard, Lock, Smartphone } from "lucide-react"; // Add Smartphone icon for UPI
import CheckoutStepper from "@/components/CheckoutStepper";
import OrderSummary from "@/components/OrderSummary";
import TrustBadges from "@/components/TrustBadges";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/candle-hero.jpg";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";
import { products } from "@/data/products";
import Hero from "@/components/Hero";
import Header from "@/components/ui/header";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomDesign from "@/components/CustomDesign";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollAnimation();
  
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <CustomDesign />
      <BrandStory />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;