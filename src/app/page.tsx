"use client";

import { useEffect, useState } from "react";
import SplashCursor from "@/components/SplashCursor";
import ExampleScrollSlider from "./_components/ExampleScrollSlider";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    // Set spacer to match the hero's pinned scroll distance
    setSpacerHeight(window.innerHeight * 9); // 10x for hero minus 1x for the section itself
  }, []);

  return (
    <div>
      <HeroSection />
      {/* Dynamic spacer to ensure content starts after hero animation */}
      <div style={{ height: spacerHeight }} aria-hidden="true" />
      <ExampleScrollSlider />
      <SplashCursor />
    </div>
  );
}
