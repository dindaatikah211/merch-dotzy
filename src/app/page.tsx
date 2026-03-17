import { Navbar }          from "@/shared/components/commons/navbar/Navbar";
import { Footer }          from "@/shared/components/commons/Footer";
import { ProductsSection } from "@/features/products/components";
import { HeroSection }     from "@/features/home/components";
import { MarqueeSection }  from "@/features/home/components";
import { AboutSection }    from "@/features/home/components";
import { FaqSection }      from "@/features/home/components";
import { CtaSection }      from "@/features/home/components";

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