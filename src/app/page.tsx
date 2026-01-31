import { HeroSection } from "@/components/sections/HeroSection";
import { DashboardSection } from "@/components/sections/DashboardSection";
import { InsightsSection } from "@/components/sections/InsightsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DashboardSection />
      <InsightsSection />
    </>
  );
}
