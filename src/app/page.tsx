"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SplashCursor from "@/components/SplashCursor";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import HeroSection from "../components/homepage/hero-section/HeroSection";

export default function Home() {
  const { headerRef, videoRef, heroSectionRef, playAnimation } =
    useHeroAnimation();
  const router = useRouter();

  // Aggressively prefetch the home page route and preload critical resources
  useEffect(() => {
    // Prefetch the route immediately
    router.prefetch("/home");

    // Preload critical images programmatically
    const criticalImages = [
      "/frame_001.png",
      "/section-4-bg.png",
      "/book-cover.png",
      "/poster1.png",
      "/Teacher-book-kids-costumes-768x512-1.jpg",
      "/kids-at-green-school-making-game-rules.jpg",
      "/table.png",
      "/magic1.png",
      "/magic2.png",
      "/0_0.jpeg",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);

      // Also create Image objects to force browser to cache them
      const img = new Image();
      img.src = src;
    });

    // Prefetch DNS and establish connection to speed up navigation
    const prefetchLink = document.createElement("link");
    prefetchLink.rel = "dns-prefetch";
    prefetchLink.href = window.location.origin;
    document.head.appendChild(prefetchLink);
  }, [router]);

  return (
    <>
      <div id="smooth-wrapper" className="w-full overflow-x-hidden">
        <div id="smooth-content" className="w-full">
          <HeroSection
            headerRef={headerRef}
            videoRef={videoRef}
            heroSectionRef={heroSectionRef}
            onGetStartedClick={playAnimation}
          />
        </div>
      </div>
      <SplashCursor />
    </>
  );
}
