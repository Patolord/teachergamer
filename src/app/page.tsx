"use client";

import ProgressBar from "@/components/ProgressBar";
import ScrollSlider from "@/components/ScrollSlider";
import SplashCursor from "@/components/SplashCursor";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";
import CalendarBookingSection from "../components/homepage/bookings/CalendarBookingSection";
import ContactSection from "../components/homepage/contact/ContactSection";
import CoursesSection from "../components/homepage/courses/CoursesSection";
import HeroSection from "../components/homepage/hero-section/HeroSection";
import ResearchSection from "../components/homepage/research/ResearchSection";
import StaircaseHUD from "../components/homepage/StaircaseHUD";
import ShopSection from "../components/homepage/shop/ShopSection";
import SubstackSection from "../components/homepage/substack/SubstackSection";
import TestimonialsSection from "../components/homepage/testimonials/TestimonialsSection";

export default function Home() {
  const {
    navRef,
    headerRef,
    heroImgRef,
    videoRef,
    heroSectionRef,
    progressBarRef,
    progressBarInnerRef,
    sectionsWrapperRef,
    playAnimation,
  } = useScrollAnimations();

  return (
    <>
      <ProgressBar
        progressBarRef={progressBarRef}
        progressBarInnerRef={progressBarInnerRef}
      />

      <div id="smooth-wrapper" className="w-full overflow-x-hidden">
        <div id="smooth-content" className="w-full">
          <HeroSection
            navRef={navRef}
            headerRef={headerRef}
            heroImgRef={heroImgRef}
            videoRef={videoRef}
            heroSectionRef={heroSectionRef}
            onGetStartedClick={playAnimation}
          />
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

      <StaircaseHUD />
      <ScrollSlider sectionCount={7} />
      <SplashCursor />
    </>
  );
}
