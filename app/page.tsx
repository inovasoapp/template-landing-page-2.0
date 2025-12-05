import Hero from "./components/Hero/page";
import { ImageBentoGrid } from "./components/ImageBentoGrid";
import { LogoCloud } from "./components/LogoCloud/LogoCloud";
import { QRCodeInovaso } from "./components/QRCodeInovaso";
import StatsSection from "./components/StatsSection";
import { UserCard } from "./components/UserCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen h-full bg-purple-500 ">
      <Hero />
      <LogoCloud />
      <StatsSection />
      <ImageBentoGrid />
      <QRCodeInovaso />

      <UserCard
        name="Ana Clara"
        image="https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </main>
  );
}
