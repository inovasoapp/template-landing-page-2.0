import AboutUs from "./components/AboutUs";
import { BenefitsSection } from "./components/BenefitsSection";
import { CarouselMockup } from "./components/CarouselMockup";
import Hero from "./components/Hero/page";
import { ImageBentoGrid } from "./components/ImageBentoGrid";
import { LogoCloud } from "./components/LogoCloud/LogoCloud";

import StatsSection from "./components/StatsSection";
import { TeamCarousel } from "./components/TeamCarousel";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full bg-purple-500 ">
      <Hero />
      <LogoCloud />
      <StatsSection />
      <ImageBentoGrid />
      <AboutUs />
      <TeamCarousel />
      <BenefitsSection />
      <CarouselMockup />
    </main>
  );
}
