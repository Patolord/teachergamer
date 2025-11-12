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
  const sliderIndicesRef = useRef(null);
  const progressBarRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (sectionCount === 0) return;

      // Query all section elements from document (not scoped)
      const sectionElements = gsap.utils.toArray<HTMLElement>(
        "[data-scroll-section]",
      );

      if (sectionElements.length === 0) return;

      // Initially hide the slider
      if (containerRef.current) {
        gsap.set(containerRef.current, { opacity: 0, pointerEvents: "none" });
      }

      function createIndices() {
        if (sliderIndicesRef.current) {
          (sliderIndicesRef.current as HTMLElement).innerHTML = "";

          Array.from({ length: sectionCount }).forEach((_, index) => {
            const indexNum = (index + 1).toString().padStart(2, "0");
            const indicatorElement = document.createElement("p");
            indicatorElement.dataset.index = index.toString();
            indicatorElement.innerHTML = `<span class="relative w-3 h-px bg-white origin-right will-change-transform scale-x-0"></span><span class="relative w-5 flex justify-end will-change-[opacity]">${indexNum}</span>`;
            indicatorElement.style.cursor = "pointer";

            // Add click event to navigate to specific section
            indicatorElement.addEventListener("click", () => {
              const targetElement = sectionElements[index];
              if (targetElement) {
                gsap.to(window, {
                  scrollTo: { y: targetElement, offsetY: 0 },
                  duration: 1,
                  ease: "power2.inOut",
                });
              }
            });

            (sliderIndicesRef.current as unknown as HTMLElement).appendChild(
              indicatorElement,
            );

            const markerElement = indicatorElement.querySelector(
              "span:first-child",
            ) as HTMLElement;
            const indexElement = indicatorElement.querySelector(
              "span:last-child",
            ) as HTMLElement;

            if (index === 0) {
              gsap.set(indexElement, {
                opacity: 1,
              });
              gsap.set(markerElement, {
                scaleX: 1,
              });
            } else {
              gsap.set(indexElement, {
                opacity: 0.35,
              });
              gsap.set(markerElement, {
                scaleX: 0,
              });
            }
          });
        }
      }

      function animateIndicators(index: number) {
        if (!sliderIndicesRef.current) return;

        const indicators = (
          sliderIndicesRef.current as HTMLElement
        ).querySelectorAll("p");

        indicators.forEach((indicator, i) => {
          const markerElement = indicator.querySelector("span:first-child");
          const indexElement = indicator.querySelector("span:last-child");

          if (i === index) {
            gsap.to(indexElement, {
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(markerElement, {
              scaleX: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          } else {
            gsap.to(indexElement, {
              opacity: 0.5,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(markerElement, {
              scaleX: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      }

      createIndices();

      const ctx = gsap.context(() => {
        // Each section gets its own independent ScrollTrigger
        // This section tracking is completely decoupled from the hero
        sectionElements.forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              animateIndicators(index);
            },
            onEnterBack: () => {
              animateIndicators(index);
            },
            markers: false,
          });
        });

        // Independent progress bar ScrollTrigger
        // Starts when first section enters viewport (after hero unpins naturally)
        if (sectionElements.length > 0) {
          const firstSection = sectionElements[0];
          const lastSection = sectionElements[sectionElements.length - 1];

          ScrollTrigger.create({
            trigger: firstSection,
            start: "top top",
            endTrigger: lastSection,
            end: "bottom bottom",
            scrub: true,
            markers: false,
            onUpdate: (self) => {
              if (progressBarRef.current) {
                gsap.set(progressBarRef.current, {
                  scaleY: self.progress,
                });
              }
            },
          });

          // Independent visibility trigger
          // Appears when testimonials section (first section) comes into view
          ScrollTrigger.create({
            trigger: firstSection,
            start: "top 80%",
            end: "max",
            markers: false,
            onEnter: () => {
              if (containerRef.current) {
                gsap.to(containerRef.current, {
                  opacity: 1,
                  pointerEvents: "auto",
                  duration: 0.5,
                  ease: "power2.out",
                });
              }
            },
            onLeaveBack: () => {
              if (containerRef.current) {
                gsap.to(containerRef.current, {
                  opacity: 0,
                  pointerEvents: "none",
                  duration: 0.3,
                  ease: "power2.in",
                });
              }
            },
          });
        }
      }, scopeRef);

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [sectionCount] },
  );

  return (
    <div ref={scopeRef}>
      <div
        ref={containerRef}
        className="hidden md:flex fixed top-1/2 right-8 -translate-y-1/2 max-h-[80vh] flex-col justify-center font-geist-mono z-50 pointer-events-none"
      >
        <div
          className="flex flex-col gap-3 px-5 py-4 [&_p]:flex [&_p]:items-center [&_p]:gap-4 [&_p]:text-white pointer-events-auto"
          ref={sliderIndicesRef}
        ></div>

        <div className="absolute top-0 right-0 w-px h-full bg-white/35">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white origin-top will-change-transform"
            ref={progressBarRef}
          ></div>
        </div>
      </div>
    </div>
  );
}
