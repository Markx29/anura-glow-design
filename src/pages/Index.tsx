import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Hero from "@/components/Hero";
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