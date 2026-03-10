import { Navbar } from "@/shared/components/commons/navbar/Navbar";
import { Footer } from "@/shared/components/commons/Footer";
import { HeroSection } from "@/features/home/HeroSection";
import { MarqueeSection } from "@/features/home/MarqueeSection";
import { ProductsSection } from "@/features/products/ProductsSection";
import { AboutSection } from "@/features/home/AboutSection";
import { FaqSection } from "@/features/home/FaqSection";
import { CtaSection } from "@/features/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProductsSection />
        <AboutSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
