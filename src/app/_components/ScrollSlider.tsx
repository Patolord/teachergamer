"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ScrollSliderProps {
  sectionCount: number;
}

export default function ScrollSlider({ sectionCount }: ScrollSliderProps) {
  const sliderIndicesRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionCount === 0) return;

    // Query content sections (excludes hero)
    const sections = gsap.utils.toArray<HTMLElement>("[data-scroll-section]");
    if (sections.length === 0) return;

    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];

    // Create section indicators
    if (sliderIndicesRef.current) {
      sliderIndicesRef.current.innerHTML = "";

      for (let i = 0; i < sectionCount; i++) {
        const indicator = document.createElement("p");
        indicator.className =
          "flex items-center gap-4 text-white cursor-pointer";
        indicator.dataset.index = i.toString();

        const indexNum = (i + 1).toString().padStart(2, "0");
        indicator.innerHTML = `
          <span class="index-marker w-3 h-px bg-white origin-right scale-x-0"></span>
          <span class="index-number w-5 flex justify-end opacity-50">${indexNum}</span>
        `;

        // Click to scroll to section
        indicator.addEventListener("click", () => {
          const targetSection = sections[i];
          if (targetSection) {
            gsap.to(window, {
              scrollTo: { y: targetSection, offsetY: 0 },
              duration: 1,
              ease: "power2.inOut",
            });
          }
        });

        sliderIndicesRef.current.appendChild(indicator);
      }

      // Set first indicator as active initially
      const firstMarker =
        sliderIndicesRef.current.querySelector(".index-marker");
      const firstNumber =
        sliderIndicesRef.current.querySelector(".index-number");
      if (firstMarker && firstNumber) {
        gsap.set(firstMarker, { scaleX: 1 });
        gsap.set(firstNumber, { opacity: 1 });
      }
    }

    // Progress bar ScrollTrigger
    ScrollTrigger.create({
      trigger: firstSection,
      start: "top top", // When Section 0 top reaches viewport top
      endTrigger: lastSection,
      end: "bottom bottom", // When last section bottom reaches viewport bottom
      markers: true,
      scrub: true,
      onUpdate: (self) => {
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, { scaleY: self.progress });
        }
      },
    });

    return () => {
      // Cleanup
    };
  }, [sectionCount]);

  return (
    <div
      ref={containerRef}
      className="fixed top-1/2 right-8 -translate-y-1/2 max-h-[80vh] flex flex-col justify-center font-geist-mono z-50"
    >
      {/* Section indicators go here */}
      <div
        ref={sliderIndicesRef}
        className="flex flex-col gap-3 px-5 py-4"
      ></div>

      {/* Progress bar container */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/35">
        {/* Progress bar fill */}
        <div
          ref={progressBarRef}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white origin-top scale-y-0"
        ></div>
      </div>
    </div>
  );
}
