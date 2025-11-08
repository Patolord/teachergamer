import SplashCursor from "@/components/SplashCursor";
import CalendarBookingSection from "./_components/CalendarBookingSection";
import ContactSection from "./_components/ContactSection";
import CoursesSection from "./_components/CoursesSection";
import HeroSection from "./_components/HeroSection";
import ResearchSection from "./_components/ResearchSection";
import ScrollSlider from "./_components/ScrollSlider";
import ShopSection from "./_components/ShopSection";
import SubstackSection from "./_components/SubstackSection";
import TestimonialsSection from "./_components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection sectionIndex={0} />
      <ShopSection sectionIndex={1} />
      <CalendarBookingSection sectionIndex={2} />
      <SubstackSection sectionIndex={3} />
      <ResearchSection sectionIndex={4} />
      <CoursesSection sectionIndex={5} />
      <ContactSection sectionIndex={6} />

      <ScrollSlider sectionCount={7} />
      <SplashCursor />
    </>
  );
}
