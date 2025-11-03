"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

const slides = [
  {
    title:
      "Under the soft hum of streetlights she watches the world ripple through glass, her calm expression mirrored in the fragments of drifting light.",
    image: "/slider_img_1.jpg",
  },
  {
    title:
      "A car slices through the desert, shadow chasing the wind as clouds of dust rise behind, blurring the horizon into gold and thunder.",
    image: "/slider_img_2.jpg",
  },
  {
    title:
      "Reflections ripple across mirrored faces, each one a fragment of identity, caught between defiance, doubt, and the silence of thought.",
    image: "/slider_img_3.jpg",
  },
  {
    title:
      "Soft light spills through the café windows as morning settles into wood and metal, capturing the rhythm of quiet human routine.",
    image: "/slider_img_4.jpg",
  },
  {
    title:
      "Every serve becomes a battle between focus and instinct, movement flowing like rhythm as the court blurs beneath the sunlight.",
    image: "/slider_img_5.jpg",
  },
  {
    title:
      "Amber light spills over the stage as guitars cry into smoke and shadow, where music and motion merge into pure energy.",
    image: "/slider_img_6.jpg",
  },
  {
    title:
      "Dust erupts beneath his stride as sweat glints under floodlights, every step pushing closer to victory, grit, and pure determination.",
    image: "/slider_img_7.jpg",
  },
];

export default function Slider() {
  const sliderRef = useRef(null);
  const sliderImagesRef = useRef(null);
  const sliderTitleRef = useRef(null);
  const sliderIndicesRef = useRef(null);
  const progressBarRef = useRef(null);

  useGSAP(
    () => {
      let activeSlide = 0;
      let currentSplit: SplitText | null = null;

      const pinDistance = window.innerHeight * (slides.length - 1);

      function createIndices() {
        if (sliderIndicesRef.current) {
          (sliderIndicesRef.current as HTMLElement).innerHTML = "";

          slides.forEach((_, index) => {
            const indexNum = (index + 1).toString().padStart(2, "0");
            const indicatorElement = document.createElement("p");
            indicatorElement.dataset.index = index.toString();
            indicatorElement.innerHTML = `<span class="marker"></span><span class="index">${indexNum}</span>`;
            indicatorElement.style.cursor = "pointer";

            // Add click event to navigate to specific slide
            indicatorElement.addEventListener("click", () => {
              const targetProgress = index / slides.length;
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

            if (index === 0) {
              gsap.set(
                indicatorElement.querySelector(".index") as HTMLElement,
                {
                  opacity: 1,
                },
              );
              gsap.set(
                indicatorElement.querySelector(".marker") as HTMLElement,
                {
                  scaleX: 1,
                },
              );
            } else {
              gsap.set(
                indicatorElement.querySelector(".index") as HTMLElement,
                {
                  opacity: 0.35,
                },
              );
              gsap.set(
                indicatorElement.querySelector(".marker") as HTMLElement,
                {
                  scaleX: 0,
                },
              );
            }
          });
        }
      }

      function animateNewSlide(index: number) {
        if (!sliderImagesRef.current || !sliderTitleRef.current) return;

        const newSliderImage = document.createElement("img");
        newSliderImage.src = slides[index].image;
        newSliderImage.alt = `Slide ${index + 1}`;

        gsap.set(newSliderImage, {
          opacity: 0,
          scale: 1.1,
        });

        (sliderImagesRef.current as HTMLElement).appendChild(newSliderImage);

        gsap.to(newSliderImage, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(newSliderImage, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        });

        const allImages = (
          sliderImagesRef.current as HTMLElement
        ).querySelectorAll("img");
        if (allImages.length > 3) {
          const removeCount = allImages.length - 3;
          for (let i = 0; i < removeCount; i++) {
            (sliderImagesRef.current as HTMLElement).removeChild(allImages[i]);
          }
        }

        animateNewTitle(index);
        animateIndicators(index);
      }

      function animateIndicators(index: number) {
        if (!sliderIndicesRef.current) return;

        const indicators = (
          sliderIndicesRef.current as HTMLElement
        ).querySelectorAll("p");

        indicators.forEach((indicator, i) => {
          const markerElement = indicator.querySelector(".marker");
          const indexElement = indicator.querySelector(".index");

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

      function animateNewTitle(index: number) {
        if (!sliderTitleRef.current) return;

        if (currentSplit) {
          currentSplit.revert();
        }

        (sliderTitleRef.current as HTMLElement).innerHTML =
          `<h1>${slides[index].title}</h1>`;

        currentSplit = new SplitText(
          (sliderTitleRef.current as HTMLElement).querySelector(
            "h1",
          ) as HTMLElement,
          {
            type: "lines",
            linesClass: "line",
            mask: "lines",
          },
        );

        gsap.set(currentSplit.lines, {
          yPercent: 100,
          opacity: 0,
        });

        gsap.to(currentSplit.lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      createIndices();

      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: "top top",
        end: `+=${pinDistance}px`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            gsap.set(progressBarRef.current, {
              scaleY: self.progress,
            });
          }

          const currentSlide = Math.min(
            Math.floor(self.progress * slides.length),
            slides.length - 1,
          );

          if (activeSlide !== currentSlide) {
            activeSlide = currentSlide;
            animateNewSlide(activeSlide);
          }
        },
      });

      return () => {
        if (currentSplit) currentSplit.revert();
        ScrollTrigger.getAll().forEach((st) => {
          st.kill();
        });
      };
    },
    { scope: sliderRef },
  );

  return (
    <section className="slider" ref={sliderRef}>
      <div className="slider-images" ref={sliderImagesRef}>
        <img src="/slider_img_1.jpg" alt="Slide 1" />
      </div>

      <div className="slider-title" ref={sliderTitleRef}>
        <h1>
          Under the soft hum of streetlights she watches the world ripple
          through glass, her calm expression mirrored in the fragments of
          drifting light.
        </h1>
      </div>

      <div className="slider-indicator">
        <div className="slider-indices" ref={sliderIndicesRef}></div>

        <div className="slider-progress-bar">
          <div className="slider-progress" ref={progressBarRef}></div>
        </div>
      </div>
    </section>
  );
}
