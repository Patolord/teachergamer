"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressBarInnerRef = useRef<HTMLDivElement>(null);
  const sectionsWrapperRef = useRef<HTMLDivElement>(null);
  const animationTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const fadeOverlayRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP(() => {
    const nav = navRef.current;
    const header = headerRef.current;
    const heroImg = heroImgRef.current;
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const progressBarInner = progressBarInnerRef.current;

    // Set progress bar opacity to 0 immediately
    if (progressBar && progressBarInner) {
      gsap.set(progressBar, { opacity: 0, immediateRender: true });
      gsap.set(progressBarInner, { height: "0%", immediateRender: true });
    }

    if (!video) return;

    // Set video source and configuration
    video.src = "/to-the-tower-2-adjusted.mp4";
    video.pause(); // Ensure video doesn't autoplay
    video.currentTime = 0; // Start at first frame

    // Set initial states
    if (nav) {
      gsap.set(nav, { opacity: 1 });
    }
    if (header) {
      gsap.set(header, {
        transform: "translate(-50%, -50%) translateZ(0px)",
        opacity: 1,
      });
    }
    if (heroImg) {
      gsap.set(heroImg, {
        transform: "translateZ(1000px)",
        opacity: 0,
      });
    }
    // Ensure hero section always has black background
    const heroSection = heroSectionRef.current;
    if (heroSection) {
      gsap.set(heroSection, { backgroundColor: "#000000" });
    }

    // Sections wrapper - create progress bar (keep scroll-based progress bar)
    if (progressBar && progressBarInner) {
      ScrollTrigger.create({
        trigger: ".sections-wrapper",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
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
  });

  const playAnimation = useCallback(() => {
    const nav = navRef.current;
    const header = headerRef.current;
    const heroImg = heroImgRef.current;
    const video = videoRef.current;
    const heroSection = heroSectionRef.current;

    if (!video) {
      console.warn("Video element not found");
      return;
    }

    // Wait for video to be ready if not already loaded
    const startAnimation = () => {
      if (!video.duration || video.duration === 0) {
        console.warn("Video duration not available");
        return;
      }

      // Kill any existing animation
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
      }

      // Calculate animation duration based on video duration
      // The animation should complete in 90% of the timeline, so we scale accordingly
      const totalDuration = video.duration / 0.9;

      // Create timeline for the full animation sequence
      const tl = gsap.timeline({
        onComplete: () => {
          // Scroll to sections wrapper smoothly after animation completes
          const sectionsWrapper = document.querySelector(".sections-wrapper");
          if (sectionsWrapper) {
            sectionsWrapper.scrollIntoView({ behavior: "smooth" });
          }
        },
      });

      // 0-10%: Fade out nav
      if (nav) {
        tl.to(nav, {
          opacity: 0,
          duration: totalDuration * 0.1,
          ease: "none",
        });
      }

      // 0-20%: Header zoom (translateZ)
      if (header) {
        tl.to(
          header,
          {
            transform: "translate(-50%, -50%) translateZ(-500px)",
            duration: totalDuration * 0.2,
            ease: "none",
          },
          0
        );

        // 20-25%: Header fade out
        tl.to(
          header,
          {
            opacity: 0,
            duration: totalDuration * 0.05,
            ease: "none",
          },
          totalDuration * 0.2
        );
      }

      // 0-80%: Play video
      const videoDuration = totalDuration * 0.8;
      tl.to(
        video,
        {
          currentTime: video.duration,
          duration: videoDuration,
          ease: "none",
          onUpdate: function () {
            // Ensure video time stays in sync
            if (video.duration) {
              const progress = this.progress();
              video.currentTime = progress * video.duration;
            }
          },
        },
        0
      );

      // 50-80%: Hero image animation
      if (heroImg) {
        tl.to(
          heroImg,
          {
            transform: "translateZ(0px)",
            opacity: 1,
            duration: totalDuration * 0.2,
            ease: "power2.out",
          },
          totalDuration * 0.5
        );
      }

      // 80-90%: Create black overlay and fade in to cover everything
      // Create overlay element if it doesn't exist
      let overlay = fadeOverlayRef.current;
      if (!overlay && heroSection) {
        overlay = document.createElement("div");
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
        `;
        document.body.appendChild(overlay);
        fadeOverlayRef.current = overlay;
      }

      // Fade in black overlay
      if (overlay) {
        tl.to(
          overlay,
          {
            opacity: 1,
            duration: totalDuration * 0.1,
            ease: "power2.in",
          },
          totalDuration * 0.8
        );
      }

      // After fade completes, hide the hero section completely and remove overlay
      tl.call(
        () => {
          if (heroSection) {
            heroSection.style.pointerEvents = "none";
            heroSection.style.visibility = "hidden";
            heroSection.style.height = "0";
            heroSection.style.minHeight = "0";
            heroSection.style.opacity = "0";
          }
          if (overlay) {
            overlay.remove();
            fadeOverlayRef.current = null;
          }
        },
        [],
        totalDuration * 0.9
      );

      animationTimelineRef.current = tl;

      // Start video playback
      video.currentTime = 0;
      video.play().catch((error) => {
        console.warn("Video play failed:", error);
      });
    };

    // Check if video is ready
    if (video.readyState >= 2) {
      // Video metadata is loaded
      startAnimation();
    } else {
      // Wait for video to load
      const handleLoadedData = () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        startAnimation();
      };
      video.addEventListener("loadeddata", handleLoadedData);
      // Also try to load the video
      video.load();
    }
  }, []);

  return {
    navRef,
    headerRef,
    heroImgRef,
    videoRef,
    heroSectionRef,
    progressBarRef,
    progressBarInnerRef,
    sectionsWrapperRef,
    playAnimation,
  };
}
