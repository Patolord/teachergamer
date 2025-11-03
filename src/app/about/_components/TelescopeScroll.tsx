"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

const config = {
  gap: 0.08,
  speed: 0.3,
  arcRadius: 500,
};

const spotlightItems = [
  { name: "Social Emotional", img: "/section-0-bg.png" },
  { name: "Bloom24", img: "/section-1-bg.png" },
  { name: "Glass Fade", img: "/section-1-fg.png" },
  { name: "Echo 9", img: "/section-2-bg.png" },
  { name: "Velvet Loop", img: "/section-2-fg.png" },
  { name: "Field Two", img: "/section-3-bg.png" },
  { name: "Pale Thread", img: "/section-3-fg.png" },
  { name: "Stillroom", img: "/section-4-bg.png" },
  { name: "Ghostline", img: "/section-4-fg.png" },
];

export default function TelescopeScroll() {
  const titlesContainerRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const titlesContainer = document.querySelector(
      ".spotlight-titles",
    ) as HTMLElement;
    const imagesContainer = document.querySelector(
      ".spotlight-images",
    ) as HTMLElement;
    const spotlightHeader = document.querySelector(
      ".spotlight-header",
    ) as HTMLElement;
    const titlesContainerElement = document.querySelector(
      ".spotlight-titles-container",
    ) as HTMLElement;
    const introTextElements = document.querySelectorAll(
      ".spotlight-intro-text",
    );
    const imageElements: HTMLElement[] = [];

    // Criar elementos dinamicamente
    spotlightItems.forEach((item, index) => {
      const titleElement = document.createElement("h1");
      titleElement.textContent = item.name;
      titleElement.className =
        "text-6xl font-medium leading-none text-white opacity-25 transition-opacity duration-300";
      if (index === 0) titleElement.style.opacity = "1";
      titlesContainer?.appendChild(titleElement);

      const imgWrapper = document.createElement("div");
      imgWrapper.className = "spotlight-img";
      const imgElement = document.createElement("img");
      imgElement.src = item.img;
      imgElement.alt = "";
      imgWrapper.appendChild(imgElement);
      imagesContainer?.appendChild(imgWrapper);
      imageElements.push(imgWrapper);
    });

    const titleElements = titlesContainer?.querySelectorAll("h1");
    let currentActiveIndex = 0;

    const containerWidth = window.innerWidth * 0.3;
    const containerHeight = window.innerHeight;
    const arcStartX = containerWidth - 220;
    const arcStartY = -200;
    const arcEndY = containerHeight + 200;
    const arcControlPointX = arcStartX + config.arcRadius;
    const arcControlPointY = containerHeight / 2;

    function getBezierPosition(t: number) {
      const x =
        (1 - t) * (1 - t) * arcStartX +
        2 * (1 - t) * t * arcControlPointX +
        t * t * arcStartX;
      const y =
        (1 - t) * (1 - t) * arcStartY +
        2 * (1 - t) * t * arcControlPointY +
        t * t * arcEndY;
      return { x, y };
    }

    function getImgProgressState(index: number, overallProgress: number) {
      const startTime = index * config.gap;
      const endTime = startTime + config.speed;

      if (overallProgress < startTime) return -1;
      if (overallProgress > endTime) return 2;

      return (overallProgress - startTime) / config.speed;
    }

    imageElements.forEach((img) => {
      gsap.set(img, { opacity: 0 });
    });

    ScrollTrigger.create({
      trigger: ".spotlight",
      start: "top top",
      end: `+=${window.innerHeight * 10}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress <= 0.2) {
          const animationProgress = progress / 0.2;

          const moveDistance = window.innerWidth * 0.6;
          gsap.set(introTextElements[0], {
            x: -animationProgress * moveDistance,
          });
          gsap.set(introTextElements[1], {
            x: animationProgress * moveDistance,
          });
          gsap.set(introTextElements[0], { opacity: 1 });
          gsap.set(introTextElements[1], { opacity: 1 });

          gsap.set(".spotlight-bg-img", {
            transform: `scale(${animationProgress})`,
          });
          gsap.set(".spotlight-bg-img img", {
            transform: `scale(${1.5 - animationProgress * 0.5})`,
          });

          imageElements.forEach((img) => {
            gsap.set(img, { opacity: 0 });
          });
          spotlightHeader.style.opacity = "0";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "0",
            "--after-opacity": "0",
          });
        } else if (progress > 0.2 && progress <= 0.25) {
          gsap.set(".spotlight-bg-img", {
            transform: "scale(1)",
            opacity: 0.5,
          });
          gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });

          gsap.set(introTextElements[0], { opacity: 0 });
          gsap.set(introTextElements[1], { opacity: 0 });

          imageElements.forEach((img) => {
            gsap.set(img, { opacity: 0 });
          });
          spotlightHeader.style.opacity = "1";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "1",
            "--after-opacity": "1",
          });
        } else if (progress > 0.25 && progress <= 0.95) {
          gsap.set(".spotlight-bg-img", {
            transform: "scale(1)",
            opacity: 0.5,
          });
          gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });

          gsap.set(introTextElements[0], { opacity: 0 });
          gsap.set(introTextElements[1], { opacity: 0 });

          spotlightHeader.style.opacity = "1";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "1",
            "--after-opacity": "1",
          });

          const switchProgress = (progress - 0.25) / 0.7;
          const viewportHeight = window.innerHeight;
          const titlesContainerHeight = titlesContainer.scrollHeight;
          const startPosition = viewportHeight;
          const targetPosition = -titlesContainerHeight;
          const totalDistance = startPosition - targetPosition;
          const currentY = startPosition - switchProgress * totalDistance;

          gsap.set(".spotlight-titles", {
            transform: `translateY(${currentY}px)`,
          });

          imageElements.forEach((img, index) => {
            const imageProgress = getImgProgressState(index, switchProgress);

            if (imageProgress < 0 || imageProgress > 1) {
              gsap.set(img, { opacity: 0 });
            } else {
              const pos = getBezierPosition(imageProgress);
              gsap.set(img, {
                x: pos.x - 100,
                y: pos.y - 75,
                opacity: 1,
              });
            }
          });

          const viewportMiddle = viewportHeight / 2;
          let closestIndex = 0;
          let closestDistance = Infinity;

          titleElements?.forEach((title, index) => {
            const titleRect = title.getBoundingClientRect();
            const titleCenter = titleRect.top + titleRect.height / 2;
            const distanceFromCenter = Math.abs(titleCenter - viewportMiddle);

            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter;
              closestIndex = index;
            }
          });

          if (closestIndex !== currentActiveIndex) {
            if (titleElements?.[currentActiveIndex]) {
              (titleElements[currentActiveIndex] as HTMLElement).style.opacity =
                "0.25";
            }
            (titleElements?.[closestIndex] as HTMLElement).style.opacity = "1";
            // Manter a imagem de fundo fixa - não trocar
            // const bgImg = document.querySelector(
            //   ".spotlight-bg-img img",
            // ) as HTMLImageElement;
            // if (bgImg) bgImg.src = spotlightItems[closestIndex].img;
            currentActiveIndex = closestIndex;
          }
        } else if (progress > 0.95) {
          gsap.set(".spotlight-bg-img", {
            transform: "scale(1)",
            opacity: 0.5,
          });
          gsap.set(".spotlight-bg-img img", { transform: "scale(1)" });

          spotlightHeader.style.opacity = "0";
          gsap.set(titlesContainerElement, {
            "--before-opacity": "0",
            "--after-opacity": "0",
          });
        }
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  return (
    <>
      <section className="spotlight relative w-screen h-screen overflow-hidden">
        <div className="spotlight-intro-text-wrapper  absolute w-full top-1/2 -translate-y-1/2 flex gap-2">
          <div className="spotlight-intro-text flex-1 relative will-change-transform">
            <div className="flex justify-end">
              <p className="text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
                The Teacher-Gamer
              </p>
            </div>
          </div>
          <div className="spotlight-intro-text flex-1 relative will-change-transform">
            <p className="text-6xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
              Certification Program
            </p>
          </div>
        </div>

        <div className="spotlight-bg-img absolute w-full h-full overflow-hidden scale-0 opacity-10 will-change-transform">
          <img
            src="/image/about/img1.png"
            alt="Zach Reznichek"
            className="w-full h-full object-cover scale-150 will-change-transform"
          />
        </div>

        <div
          className="spotlight-titles-container absolute top-0 left-[15vw] w-full h-full overflow-hidden"
          style={{
            clipPath:
              "polygon(50svh 0px, 0px 50%, 50svh 100%, 100% calc(100% + 100svh), 100% -100svh)",
          }}
        >
          <div className="spotlight-titles relative left-[15%] w-3/4 h-full flex flex-col gap-20 translate-y-full z-[2]">
            {/* Títulos serão inseridos dinamicamente via JavaScript */}
          </div>
        </div>

        <div
          ref={imagesContainerRef}
          className="spotlight-images absolute top-0 right-0 w-1/2 min-w-[300px] h-full z-[1] pointer-events-none"
        />

        <div className="spotlight-header absolute top-1/2 left-[10%] -translate-y-1/2 text-green-700 transition-opacity duration-300 z-[2] opacity-0">
          <p className="text-4xl font-medium">ABOUT</p>
        </div>
      </section>

      <section className="flex justify-center items-center h-screen overflow-hidden bg-white text-green-500">
        <h1 className="text-4xl md:text-6xl font-medium leading-none px-8 text-center">
          Moments in still motion.
        </h1>
      </section>
    </>
  );
}
