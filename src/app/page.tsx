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
  } = useScrollAnimations();

  return (
    <>
      <ProgressBar
        progressBarRef={progressBarRef}
        progressBarInnerRef={progressBarInnerRef}
      />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection
            navRef={navRef}
            headerRef={headerRef}
            heroImgRef={heroImgRef}
            videoRef={videoRef}
            heroSectionRef={heroSectionRef}
          />
          <div ref={sectionsWrapperRef} className="sections-wrapper">
            <TestimonialsSection sectionIndex={0} />
            <ShopSection sectionIndex={1} />
            <SubstackSection sectionIndex={2} />
            <CalendarBookingSection sectionIndex={3} />
            <CoursesSection sectionIndex={4} />
            <ResearchSection sectionIndex={5} />
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
