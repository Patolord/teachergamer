import HeroSection from "./_components/HeroSection";
import ScrollSlider from "./_components/ScrollSlider";
import ContactSection from "./_components/sections/ContactSection";
import CoursesSection from "./_components/sections/CoursesSection";

import ShopSection from "./_components/sections/ShopSection";

import TestimonialsSection from "./_components/sections/TestimonialsSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection sectionIndex={0} />
      <ShopSection sectionIndex={1} />

      <CoursesSection sectionIndex={2} />
      <ContactSection sectionIndex={3} />

      <ScrollSlider sectionCount={4} />
    </>
  );
}
