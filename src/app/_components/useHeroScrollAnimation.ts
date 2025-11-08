"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useHeroScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!canvasRef.current) return;

      const ctx = gsap.context(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const setCanvasSize = () => {
          const pixelRatio = window.devicePixelRatio || 1;
          canvas.width = window.innerWidth * pixelRatio;
          canvas.height = window.innerHeight * pixelRatio;
          canvas.style.width = window.innerWidth + "px";
          canvas.style.height = window.innerHeight + "px";
          context.scale(pixelRatio, pixelRatio);
        };
        setCanvasSize();

        const frameCount = 189;
        const currentFrame = (index: number) =>
          `/hero-frames/frame_${(index + 1).toString().padStart(3, "0")}.jpg`;

        const images: HTMLImageElement[] = [];
        const videoFrames = { frame: 0 };
        let imagesToLoad = frameCount;

        const render = () => {
          const canvasWidth = window.innerWidth;
          const canvasHeight = window.innerHeight;

          context.clearRect(0, 0, canvasWidth, canvasHeight);

          const img = images[videoFrames.frame];
          if (img?.complete && img.naturalWidth > 0) {
            const imageAspect = img.naturalWidth / img.naturalHeight;
            const canvasAspect = canvasWidth / canvasHeight;

            let drawWidth: number,
              drawHeight: number,
              drawX: number,
              drawY: number;

            if (imageAspect > canvasAspect) {
              drawHeight = canvasHeight;
              drawWidth = drawHeight * imageAspect;
              drawX = (canvasWidth - drawWidth) / 2;
              drawY = 0;
            } else {
              drawWidth = canvasWidth;
              drawHeight = drawWidth / imageAspect;
              drawX = 0;
              drawY = (canvasHeight - drawHeight) / 2;
            }

            context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          }
        };

        const setupScrollTrigger = () => {
          const scrollHeight = window.innerHeight * 10;

          // Independent hero ScrollTrigger
          // Pins the hero section and drives frame animation via scroll
          // pinSpacing: true ensures natural layout flow to next sections after unpin
          ScrollTrigger.create({
            trigger: heroSectionRef.current,
            start: "top top",
            end: `+=${scrollHeight}`,
            pin: true,
            markers: false,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;

              // Frame animation (0-90%)
              const animationProgress = Math.min(progress / 0.9, 1);
              const targetFrame = Math.round(
                animationProgress * (frameCount - 1),
              );
              videoFrames.frame = targetFrame;
              render();

              // Navigation fade out (0-10%)
              if (navRef.current) {
                if (progress <= 0.1) {
                  const navProgress = progress / 0.1;
                  const opacity = 1 - navProgress;
                  gsap.set(navRef.current, { opacity });
                } else {
                  gsap.set(navRef.current, { opacity: 0 });
                }
              }

              // Header zoom and fade (0-25%)
              if (headerRef.current) {
                if (progress <= 0.25) {
                  const zProgress = progress / 0.25;
                  const translateZ = zProgress * -500;

                  let opacity = 1;
                  if (progress >= 0.2) {
                    const fadeProgress = Math.min(
                      (progress - 0.2) / (0.25 - 0.2),
                      1,
                    );
                    opacity = 1 - fadeProgress;
                  }

                  gsap.set(headerRef.current, {
                    transform: `translate(-50%, -50%) translateZ(${translateZ}px)`,
                    opacity,
                  });
                } else {
                  gsap.set(headerRef.current, { opacity: 0 });
                }
              }

              // Hero image reveal (60-90%)
              if (heroImgRef.current) {
                if (progress < 0.6) {
                  gsap.set(heroImgRef.current, {
                    transform: "translateZ(1000px)",
                    opacity: 0,
                  });
                } else if (progress >= 0.6 && progress <= 0.9) {
                  const imgProgress = (progress - 0.6) / (0.9 - 0.6);
                  const translateZ = 1000 - imgProgress * 1000;

                  let opacity = 0;
                  if (progress <= 0.8) {
                    const opacityProgress = (progress - 0.6) / (0.8 - 0.6);
                    opacity = opacityProgress;
                  } else {
                    opacity = 1;
                  }

                  gsap.set(heroImgRef.current, {
                    transform: `translateZ(${translateZ}px)`,
                    opacity,
                  });
                } else {
                  gsap.set(heroImgRef.current, {
                    transform: "translateZ(0px)",
                    opacity: 1,
                  });
                }
              }
            },
          });
        };

        const onLoad = () => {
          imagesToLoad--;

          if (imagesToLoad === 0) {
            render();
            setupScrollTrigger();
          }
        };

        // Load all frame images
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.onload = onLoad;
          img.onerror = function () {
            onLoad.call(this);
          };
          img.src = currentFrame(i);
          images.push(img);
        }

        // Handle window resize
        const handleResize = () => {
          setCanvasSize();
          render();
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, heroSectionRef);

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [] },
  );

  return { canvasRef, navRef, headerRef, heroImgRef, heroSectionRef };
}
