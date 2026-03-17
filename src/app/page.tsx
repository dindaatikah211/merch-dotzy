import { Navbar } from "@/shared/components/commons/navbar/components/Navbar";
import { Footer } from "@/shared/components/commons/footer/Footer";
import { ProductsSection } from "@/features/products/components/ProductsSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { MarqueeSection } from "@/features/home/components/MarqueeSection";
import { AboutSection } from "@/features/home/components/AboutSection";
import { FaqSection } from "@/features/home/components/FaqSection";
import { CtaSection } from "@/features/home/components/CtaSection";
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
