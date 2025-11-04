"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import type { ReactNode } from "react";
import { Children, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ScrollSliderProps {
  children: ReactNode;
}

export default function ScrollSlider({ children }: ScrollSliderProps) {
  const sliderRef = useRef(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const sliderIndicesRef = useRef(null);
  const progressBarRef = useRef(null);
  const lenisRef = useRef<Lenis | null>(null);

  const childrenArray = Children.toArray(children);
  const slideCount = childrenArray.length;

  // Generate stable keys for slides based on their content
  const slidesWithKeys = childrenArray.map((child, index) => ({
    child,
    key: `scroll-slide-${index}-${slideCount}`,
  }));

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  useGSAP(
    () => {
      if (slideCount === 0) return;

      let activeSlide = 0;
      let previousSlide = 0;
      const pinDistance = window.innerHeight * (slideCount - 1);

      // Get all slide elements
      const slideElements = slidesContainerRef.current?.children;
      if (!slideElements) return;

      function createIndices() {
        if (sliderIndicesRef.current) {
          (sliderIndicesRef.current as HTMLElement).innerHTML = "";

          Array.from({ length: slideCount }).forEach((_, index) => {
            const indexNum = (index + 1).toString().padStart(2, "0");
            const indicatorElement = document.createElement("p");
            indicatorElement.dataset.index = index.toString();
            indicatorElement.innerHTML = `<span class="relative w-3 h-px bg-white origin-right will-change-transform scale-x-0"></span><span class="relative w-5 flex justify-end will-change-[opacity]">${indexNum}</span>`;
            indicatorElement.style.cursor = "pointer";

            // Add click event to navigate to specific slide
            indicatorElement.addEventListener("click", () => {
              const targetProgress = index / slideCount;
              const scrollTrigger = ScrollTrigger.getAll().find(
                (st) => st.trigger === sliderRef.current,
              );

              if (scrollTrigger) {
                const targetScroll =
                  scrollTrigger.start +
                  targetProgress * (scrollTrigger.end - scrollTrigger.start);
                gsap.to(window, {
                  scrollTo: targetScroll,
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

      function animateNewSlide(index: number) {
        if (!slideElements) return;

        // Crossfade between slides
        Array.from(slideElements).forEach((slide, i) => {
          if (i === index) {
            // Kill any existing animations on this slide
            gsap.killTweensOf(slide);
            // Set new slide on top with higher z-index and animate opacity
            gsap.set(slide as HTMLElement, {
              zIndex: 2,
            });
            gsap.fromTo(
              slide as HTMLElement,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: true,
                immediateRender: true,
                onComplete: () => {
                  // After the new slide has faded in, hide all other slides
                  Array.from(slideElements).forEach((otherSlide, j) => {
                    if (j !== index) {
                      gsap.set(otherSlide as HTMLElement, {
                        opacity: 0,
                        zIndex: 0,
                      });
                    }
                  });
                },
              },
            );
          } else if (i === previousSlide) {
            // Keep the previous active slide visible during the transition for crossfade
            // Set it below the new slide
            gsap.set(slide as HTMLElement, {
              opacity: 1,
              zIndex: 1,
            });
          } else {
            // Hide all other slides instantly
            gsap.set(slide as HTMLElement, {
              opacity: 0,
              zIndex: 0,
            });
          }
        });

        animateIndicators(index);
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

      // Initialize slides - hide all except first
      Array.from(slideElements).forEach((slide, i) => {
        gsap.set(slide as HTMLElement, {
          opacity: i === 0 ? 1 : 0,
          zIndex: i === 0 ? 1 : 0,
        });
      });

      createIndices();

      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: `+=${pinDistance}px`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, {
              scaleY: self.progress,
            });
          }

          const currentSlide = Math.min(
            Math.floor(self.progress * slideCount),
            slideCount - 1,
          );

          if (activeSlide !== currentSlide) {
            previousSlide = activeSlide;
            activeSlide = currentSlide;
            animateNewSlide(activeSlide);
          }
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          st.kill();
        });
      };
    },
    { scope: sliderRef, dependencies: [slideCount] },
  );

  return (
    <section
      className="scroll-slider relative w-full h-screen overflow-hidden"
      ref={sliderRef}
    >
      {/* Container for all slides */}
      <div
        className="slides-container absolute inset-0 w-full h-full"
        ref={slidesContainerRef}
      >
        {slidesWithKeys.map(({ child, key }) => (
          <div key={key} className="slide absolute inset-0 w-full h-full">
            {child}
          </div>
        ))}
      </div>

      {/* Indicators and Progress Bar */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 max-h-[80vh] flex flex-col justify-center max-[1000px]:top-auto max-[1000px]:translate-y-0 max-[1000px]:bottom-8 font-geist-mono z-10">
        <div
          className="flex flex-col gap-3 px-5 py-4 [&_p]:flex [&_p]:items-center [&_p]:gap-4 [&_p]:text-white"
          ref={sliderIndicesRef}
        ></div>

        <div className="absolute top-0 right-0 w-px h-full bg-white/35">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-white origin-top will-change-transform"
            ref={progressBarRef}
          ></div>
        </div>
      </div>
    </section>
  );
}
