"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ParallaxSection from "@/components/ParallaxSection";
import { useSectionContext } from "@/contexts/SectionContext";

const sections = [
  {
    id: "section-0",
    number: 0,
    title: "HOME",
    backgroundImage: "/section-0-bg.png",
    foregroundImage: "/section-0-fg.png",
  },
  {
    id: "section-1",
    number: 1,
    title: "ABOUT",
    backgroundImage: "/section-1-bg.png",
    foregroundImage: "/section-1-fg.png",
  },
  {
    id: "section-2",
    number: 2,
    title: "COURSES",
    backgroundImage: "/section-2-bg.png",
    foregroundImage: "/section-2-fg.png",
  },
  {
    id: "section-3",
    number: 3,
    title: "TRUST",
    backgroundImage: "/section-3-bg.png",
    foregroundImage: "/section-3-fg.png",
  },
];

export default function Home() {
  const { setActiveSection } = useSectionContext();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create ScrollSmoother BEFORE ScrollTriggers
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices
    });

    // Apply auto speed effects to all elements with data-speed="auto"
    smoother.effects("[data-speed='auto']", { speed: "auto" });

    // Track active section
    sections.forEach((section) => {
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
    <div id="smooth-wrapper" ref={container}>
      <div id="smooth-content">
        {sections.map((section) => (
          <ParallaxSection
            key={section.id}
            id={section.id}
            sectionNumber={section.number}
            title={section.title}
            backgroundImage={section.backgroundImage}
            foregroundImage={section.foregroundImage}
          />
        ))}
      </div>
    </div>
  );
}
