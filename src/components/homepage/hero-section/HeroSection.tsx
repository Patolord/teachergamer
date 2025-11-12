"use client";

import { useHeroScrollAnimation } from "../../../hooks/useHeroScrollAnimation";
import HeroContent from "./HeroContent";
import Navigation from "./Navigation";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function HeroSection() {
  const {
    canvasRef,
    navRef,
    headerRef,
    heroSectionRef,
    scrollDownIndicatorRef,
  } = useHeroScrollAnimation();

  return (
    <>
      <Navigation ref={navRef} style={{ opacity: 0 }} />

      <section
        ref={heroSectionRef}
        className="hero relative w-full h-screen overflow-hidden bg-black"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Canvas for frame animation */}
        <canvas ref={canvasRef} className="w-full h-full object-cover" />

        {/* Hero Content with 3D transform */}
        <div
          ref={headerRef}
          className="header absolute top-1/2 left-1/2 w-full flex flex-col items-center gap-6 text-center"
          style={{
            transform: "translate(-50%, -50%)",
            transformOrigin: "center",
            willChange: "transform, opacity",
            opacity: 0,
          }}
        >
          <HeroContent
            title="Teacher Gamer Revolution"
            description="The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn."
            buttonText="Get Started Now"
          />
        </div>

        {/* Scroll Down Indicator */}
        <ScrollDownIndicator
          ref={scrollDownIndicatorRef}
          style={{ opacity: 0 }}
        />
      </section>
    </>
  );
}
