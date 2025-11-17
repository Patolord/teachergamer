"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);

export function useScrollAnimations() {
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarInnerRef = useRef<HTMLDivElement>(null);
  const sectionsWrapperRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    // Register plugins
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollSmoother);

    // ScrollSmoother.create({
    //   wrapper: "#smooth-wrapper",
    //   content: "#smooth-content",
    //   smooth: 2,
    //   effects: true,
    // });

    const nav = navRef.current;
    const header = headerRef.current;
    const heroImg = heroImgRef.current;
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const progressBarInner = progressBarInnerRef.current;

    // Set progress bar opacity to 0 immediately - must happen before video check
    // This ensures GSAP controls opacity from the start via inline styles
    if (progressBar && progressBarInner) {
      gsap.set(progressBar, { opacity: 0, immediateRender: true });
      gsap.set(progressBarInner, { height: "0%", immediateRender: true });
    }

    if (!video) return;

    // Set video source and configuration
    video.src = "/hero-vid-max.mp4";
    video.pause(); // Ensure video doesn't autoplay

    let isVideoReady = false;

    // Wait for video to be ready for seeking
    const handleLoadedData = () => {
      isVideoReady = true;
      video.currentTime = 0; // Ensure video starts at first frame
      setupScrollTrigger();
    };

    video.addEventListener("loadeddata", handleLoadedData);

    const setupScrollTrigger = () => {
      let frameRequested = false;
      let targetVideoTime = 0;

      const updateVideoTime = () => {
        if (isVideoReady && video.duration) {
          video.currentTime = targetVideoTime;
        }
        frameRequested = false;
      };

      // Hero section
      ScrollTrigger.create({
        trigger: ".hero-section",
        start: "top top",
        // Use function for end so it recalculates on refresh (important for mobile)
        end: () => `+=${window.innerHeight * 7}`,
        pin: true,
        markers: false,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: contextSafe((self: ScrollTrigger) => {
          const progress = self.progress;

          // Calculate target video time
          const animationProgress = Math.min(progress / 0.9, 1);
          targetVideoTime = animationProgress * video.duration;

          // Use requestAnimationFrame to batch video seeks
          if (!frameRequested) {
            frameRequested = true;
            requestAnimationFrame(updateVideoTime);
          }

          if (progress <= 0.1) {
            const navProgress = progress / 0.1;
            const opacity = 1 - navProgress;
            if (nav) {
              gsap.set(nav, { opacity });
            }
          } else {
            if (nav) {
              gsap.set(nav, { opacity: 0 });
            }
          }

          if (progress <= 0.25) {
            const zProgress = progress / 0.25;
            const translateZ = zProgress * -500;

            let opacity = 1;
            if (progress >= 0.2) {
              const fadeProgress = Math.min((progress - 0.2) / (0.25 - 0.2), 1);
              opacity = 1 - fadeProgress;
            }

            if (header) {
              gsap.set(header, {
                transform: `translate(-50%, -50%) translateZ(${translateZ}px)`,
                opacity,
              });
            }
          } else {
            if (header) {
              gsap.set(header, { opacity: 0 });
            }
          }

          if (heroImg) {
            if (progress < 0.6) {
              gsap.set(heroImg, {
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

              gsap.set(heroImg, {
                transform: `translateZ(${translateZ}px)`,
                opacity,
              });
            } else {
              gsap.set(heroImg, {
                transform: "translateZ(0px)",
                opacity: 1,
              });
            }
          }
        }),
      });

      // Sections wrapper - create progress bar
      if (progressBar && progressBarInner) {
        ScrollTrigger.create({
          trigger: ".sections-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          markers: true,
          onUpdate: contextSafe((self: ScrollTrigger) => {
            const progress = self.progress;
            if (progressBarInner) {
              gsap.set(progressBarInner, { height: `${progress * 100}%` });
            }
          }),
          onEnter: contextSafe(() => {
            if (progressBar) {
              gsap.to(progressBar, { opacity: 1, duration: 0.3 });
            }
          }),
          onLeave: contextSafe(() => {
            if (progressBar) {
              gsap.to(progressBar, { opacity: 0, duration: 0.3 });
            }
          }),
          onEnterBack: contextSafe(() => {
            if (progressBar) {
              gsap.to(progressBar, { opacity: 1, duration: 0.3 });
            }
          }),
          onLeaveBack: contextSafe(() => {
            if (progressBar && progressBarInner) {
              gsap.to(progressBar, { opacity: 0, duration: 0.3 });
              gsap.set(progressBarInner, { height: "0%" });
            }
          }),
        });
      }
    };

    const handleResize = () => {
      // Recalculate and refresh ScrollTriggers on resize
      // This is especially important for mobile where viewport height changes
      ScrollTrigger.refresh();
    };

    // Also handle orientation changes on mobile
    const handleOrientationChange = () => {
      // Small delay to allow viewport to settle
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  });

  return {
    navRef,
    headerRef,
    heroImgRef,
    videoRef,
    heroSectionRef,
    progressBarRef,
    progressBarInnerRef,
    sectionsWrapperRef,
  };
}
