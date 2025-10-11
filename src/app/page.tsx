"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef, useEffect } from "react";
import { useSectionContext } from "@/contexts/SectionContext";

export default function Home() {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const { setScrollSmoother } = useSectionContext();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });

    // Select all sections using attribute selector
    const sections = gsap.utils.toArray<HTMLElement>('[id^="section-"]');

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  });

  useEffect(() => {
    if (smootherRef.current) {
      setScrollSmoother(smootherRef.current);
    }
  }, [setScrollSmoother]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
      {/* Section 0 */}
      <div id="section-0" className="h-screen flex items-center justify-center bg-blue-600">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold">Section 0</h1>
          <p className="text-xl mt-4">Add your content here</p>
        </div>
      </div>

      {/* Section 1 */}
      <div id="section-1" className="h-screen flex items-center justify-center bg-purple-600">
        <div className="text-white text-center">
          <h2 className="text-6xl font-bold">Section 1</h2>
          <p className="text-xl mt-4">Add your content here</p>
        </div>
      </div>

      {/* Section 2 */}
      <div id="section-2" className="h-screen flex items-center justify-center bg-pink-600">
        <div className="text-white text-center">
          <h2 className="text-6xl font-bold">Section 2</h2>
          <p className="text-xl mt-4">Add your content here</p>
        </div>
      </div>

      {/* Section 3 */}
      <div id="section-3" className="h-screen flex items-center justify-center bg-orange-600">
        <div className="text-white text-center">
          <h2 className="text-6xl font-bold">Section 3</h2>
          <p className="text-xl mt-4">Add your content here</p>
        </div>
      </div>

      {/* Section 4 */}
      <div id="section-4" className="h-screen flex items-center justify-center bg-green-600">
        <div className="text-white text-center">
          <h2 className="text-6xl font-bold">Section 4</h2>
          <p className="text-xl mt-4">Add your content here</p>
        </div>
      </div>
      </div>
    </div>
  );
}
