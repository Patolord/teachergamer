"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { startTransition, useCallback, useRef } from "react";

export function useHeroAnimation() {
  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const animationTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const fadeOverlayRef = useRef<HTMLDivElement | null>(null);
  const floatingTextRef = useRef<HTMLDivElement | null>(null);
  const floatingText2Ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  useGSAP(() => {
    const nav = navRef.current;
    const header = headerRef.current;
    const video = videoRef.current;

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
    // Ensure hero section always has black background and initial opacity
    const heroSection = heroSectionRef.current;
    if (heroSection) {
      gsap.set(heroSection, { backgroundColor: "#000000", opacity: 1 });
    }
  });

  const playAnimation = useCallback(() => {
    const nav = navRef.current;
    const header = headerRef.current;
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
      const tl = gsap.timeline();

      // 0-5%: Fade out nav very quickly
      if (nav) {
        tl.to(nav, {
          opacity: 0,
          duration: totalDuration * 0.05,
          ease: "power2.in",
        });
      }

      // 0-15%: Header zoom (translateZ) - faster
      if (header) {
        tl.to(
          header,
          {
            transform: "translate(-50%, -50%) translateZ(-500px)",
            duration: totalDuration * 0.15,
            ease: "none",
          },
          0
        );

        // 15-18%: Header fade out (very fast)
        tl.to(
          header,
          {
            opacity: 0,
            duration: totalDuration * 0.03,
            ease: "power2.in",
          },
          totalDuration * 0.15
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

      // 35-45%: First floating text animation (back layer - appears first, fades completely)
      let floatingText = floatingTextRef.current;
      if (!floatingText && heroSection) {
        floatingText = document.createElement("div");
        floatingText.innerHTML = "Welcome to the Revolution";
        floatingText.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          color: #ffffff;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: bold;
          text-align: center;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          white-space: nowrap;
          filter: blur(2px);
        `;
        document.body.appendChild(floatingText);
        floatingTextRef.current = floatingText;
      }

      if (floatingText) {
        // Fade in and float up (35-38%)
        tl.to(
          floatingText,
          {
            opacity: 1,
            y: -20,
            scale: 0.9,
            duration: totalDuration * 0.03,
            ease: "power2.out",
          },
          totalDuration * 0.35
        );

        // Hold visible (38-42%)
        tl.to(
          floatingText,
          {
            opacity: 1,
            duration: totalDuration * 0.04,
            ease: "none",
          },
          totalDuration * 0.38
        );

        // Fade out completely (42-45%)
        tl.to(
          floatingText,
          {
            opacity: 0,
            y: -40,
            scale: 0.85,
            duration: totalDuration * 0.03,
            ease: "power2.in",
          },
          totalDuration * 0.42
        );

        // Remove first floating text after fade out
        tl.call(
          () => {
            if (floatingText) {
              floatingText.remove();
              floatingTextRef.current = null;
            }
          },
          [],
          totalDuration * 0.45
        );
      }

      // 45-55%: Second floating text animation (front layer - appears after first fades)
      let floatingText2 = floatingText2Ref.current;
      if (!floatingText2 && heroSection) {
        floatingText2 = document.createElement("div");
        floatingText2.innerHTML = "Join the Movement";
        floatingText2.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
          color: #ffffff;
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: bold;
          text-align: center;
          z-index: 1001;
          opacity: 0;
          pointer-events: none;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        `;
        document.body.appendChild(floatingText2);
        floatingText2Ref.current = floatingText2;
      }

      if (floatingText2) {
        // Fade in and float up (45-48%) - starts right after first text fades
        tl.to(
          floatingText2,
          {
            opacity: 1,
            y: -20,
            scale: 1,
            duration: totalDuration * 0.03,
            ease: "power2.out",
          },
          totalDuration * 0.45
        );

        // Hold visible (48-52%)
        tl.to(
          floatingText2,
          {
            opacity: 1,
            duration: totalDuration * 0.04,
            ease: "none",
          },
          totalDuration * 0.48
        );

        // Fade out (52-55%)
        tl.to(
          floatingText2,
          {
            opacity: 0,
            y: -40,
            scale: 1.1,
            duration: totalDuration * 0.03,
            ease: "power2.in",
          },
          totalDuration * 0.52
        );

        // Remove second floating text after fade out
        tl.call(
          () => {
            if (floatingText2) {
              floatingText2.remove();
              floatingText2Ref.current = null;
            }
          },
          [],
          totalDuration * 0.55
        );
      }

      // 80-90%: Create black overlay and fade in to cover everything
      // Create overlay element if it doesn't exist
      let overlay = fadeOverlayRef.current;
      if (!overlay && heroSection) {
        overlay = document.createElement("div");
        overlay.id = "transition-overlay";
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          z-index: 99999;
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
            onComplete: () => {
              // Navigate immediately when overlay is fully black
              // Store overlay reference in sessionStorage so it persists
              sessionStorage.setItem("transitionOverlay", "true");
              // Use startTransition for smoother navigation
              startTransition(() => {
                router.push("/home");
              });
            },
          },
          totalDuration * 0.8
        );
      }

      // Clean up floating texts before navigation
      tl.call(
        () => {
          if (floatingTextRef.current) {
            floatingTextRef.current.remove();
            floatingTextRef.current = null;
          }
          if (floatingText2Ref.current) {
            floatingText2Ref.current.remove();
            floatingText2Ref.current = null;
          }
        },
        [],
        totalDuration * 0.85
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
  }, [router]);

  return {
    navRef,
    headerRef,
    videoRef,
    heroSectionRef,
    playAnimation,
  };
}
