import Hero from "./components/Hero/page";
import { LogoCloud } from "./components/LogoCloud/LogoCloud";
import { QRCodeInovaso } from "./components/QRCodeInovaso";
import StatsSection from "./components/StatsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full bg-purple-500">
      <Hero />
      <LogoCloud />
      <StatsSection />
      <QRCodeInovaso />
    </main>
  );
}
