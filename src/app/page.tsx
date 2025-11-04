import SplashCursor from "@/components/SplashCursor";
import ExampleScrollSlider from "./_components/ExampleScrollSlider";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* Spacer for scroll animation - hero is pinned for 7x viewport height */}
      <div className="h-[700vh]" aria-hidden="true" />
      <ExampleScrollSlider />
      <SplashCursor />
    </div>
  );
}
