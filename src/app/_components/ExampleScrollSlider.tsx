"use client";

import CalendarBookingSection from "./CalendarBookingSection";
import ContactSection from "./ContactSection";
import CoursesSection from "./CoursesSection";
import ResearchSection from "./ResearchSection";
import ScrollSlider from "./ScrollSlider";
import ShopSection from "./ShopSection";
import SubstackSection from "./SubstackSection";
import TestimonialsSection from "./TestimonialsSection";

/**
 * ScrollSlider with main content sections
 *
 * Each child section becomes a slide in the slider.
 * The ScrollSlider handles scroll-based transitions, indicators, and progress bar.
 */
export default function ExampleScrollSlider() {
  return (
    <ScrollSlider>
      <TestimonialsSection />
      <ShopSection />
      <CalendarBookingSection />
      <SubstackSection />
      <ResearchSection />

      <CoursesSection />
      <ContactSection />
    </ScrollSlider>
  );
}
