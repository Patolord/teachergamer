"use client";

import { useEffect, useRef, useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import ScrollSlider from "@/components/ScrollSlider";
import SplashCursor from "@/components/SplashCursor";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import CalendarBookingSection from "../../components/homepage/bookings/CalendarBookingSection";
import ContactSection from "../../components/homepage/contact/ContactSection";
import CoursesSection from "../../components/homepage/courses/CoursesSection";
import Navigation from "../../components/homepage/hero-section/Navigation";
import SecondaryHeroSection from "../../components/homepage/hero-section/SecondaryHeroSection";
import ResearchSection from "../../components/homepage/research/ResearchSection";
import StaircaseHUD from "../../components/homepage/StaircaseHUD";
import ShopSection from "../../components/homepage/shop/ShopSection";
import SubstackSection from "../../components/homepage/substack/SubstackSection";
import TestimonialsSection from "../../components/homepage/testimonials/TestimonialsSection";

export default function HomePage() {
  const {
    progressBarRef,
    progressBarInnerRef,
    staircaseHUDRef,
    sectionsWrapperRef,
  } = useScrollAnimations();
  const secondaryHeroRef = useRef<HTMLElement>(null);
  const [showHUDAndProgress, setShowHUDAndProgress] = useState(false);

  // Remove transition overlay after page loads
  useEffect(() => {
    const removeOverlay = () => {
      // Check if overlay exists or needs to be created
      let overlay = document.getElementById("transition-overlay");

      // If overlay doesn't exist but flag is set, create it (persisted from previous page)
      if (!overlay && sessionStorage.getItem("transitionOverlay")) {
        overlay = document.createElement("div");
        overlay.id = "transition-overlay";
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          z-index: 99999;
          opacity: 1;
          pointer-events: none;
        `;
        document.body.appendChild(overlay);
      }

      if (overlay) {
        // Fade out overlay smoothly
        overlay.style.transition = "opacity 0.2s ease-out";
        overlay.style.opacity = "0";
        setTimeout(() => {
          overlay?.remove();
          sessionStorage.removeItem("transitionOverlay");
        }, 200);
      } else if (sessionStorage.getItem("transitionOverlay")) {
        // If overlay doesn't exist but flag is set, clear the flag
        sessionStorage.removeItem("transitionOverlay");
      }
    };

    // Small delay to ensure page is rendered
    const timer = setTimeout(removeOverlay, 50);
    return () => clearTimeout(timer);
  }, []);

  // Hide StaircaseHUD and ProgressBar when SecondaryHeroSection is visible
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = secondaryHeroRef.current;
      if (!heroSection) return;

      const rect = heroSection.getBoundingClientRect();
      const isHeroVisible = rect.bottom > 0 && rect.top < window.innerHeight;

      setShowHUDAndProgress(!isHeroVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation style={{ opacity: 1 }} />

      <div id="smooth-wrapper" className="w-full overflow-x-hidden">
        <div id="smooth-content" className="w-full">
          <SecondaryHeroSection ref={secondaryHeroRef} />
          <div ref={sectionsWrapperRef} className="sections-wrapper w-full">
            <ShopSection sectionIndex={0} />
            <SubstackSection sectionIndex={1} />
            <CalendarBookingSection sectionIndex={2} />
            <CoursesSection sectionIndex={3} />
            <ResearchSection sectionIndex={4} />

            <TestimonialsSection sectionIndex={5} />
            <ContactSection sectionIndex={6} />
          </div>
        </div>
      </div>

      {/* Hide StaircaseHUD and ProgressBar when SecondaryHeroSection is visible */}
      <div
        className={`transition-opacity duration-300 ${
          showHUDAndProgress ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <StaircaseHUD staircaseHUDRef={staircaseHUDRef} />
        <ProgressBar
          progressBarRef={progressBarRef}
          progressBarInnerRef={progressBarInnerRef}
        />
      </div>
      <ScrollSlider sectionCount={7} />
      <SplashCursor />
    </>
  );
}
