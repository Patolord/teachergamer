"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import BookSection from "@/components/BookSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoursesSection from "@/components/CoursesSection";
import { useSectionContext } from "@/contexts/SectionContext";

// Section configuration - defines order and type only
const SECTIONS_CONFIG = [
  { number: 0, type: "section", id: "section-0" },
  { number: 1, type: "section", id: "section-1" },
  { number: 2, type: "courses", id: "section-2" },
  { number: 3, type: "testimonials", id: "section-3" },
  { number: 4, type: "book", id: "section-4" },
] as const;

export default function Home() {
  const { setActiveSection } = useSectionContext();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Track active section
    SECTIONS_CONFIG.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.number),
        onEnterBack: () => setActiveSection(section.number),
      });
    });
  }, { scope: container });

  return (
    <div ref={container}>
      {SECTIONS_CONFIG.map((section) => {
        switch (section.type) {
          case "book":
            return <BookSection key={section.id} sectionNumber={section.number} />;
          
          case "testimonials":
            return <TestimonialsSection key={section.id} sectionNumber={section.number} />;
          
          case "courses":
            return <CoursesSection key={section.id} sectionNumber={section.number} />;
          
          case "section":
          default:
            return <Section key={section.id} sectionNumber={section.number} />;
        }
      })}
    </div>
  );
}
