"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

interface SectionProps {
  id: string;
  sectionNumber: number;
  backgroundImage: string;
  foregroundImage: string;
  title: string;
  subtitle?: string;
  videoSrc?: string;
}

export default function Section({
  id,
  sectionNumber,
  backgroundImage,
  foregroundImage,
  title,
  subtitle = "Add your content here",
  videoSrc,
}: SectionProps) {
  // Use video as full background for home section
  const isVideoBackground = videoSrc && sectionNumber === 0;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Control video playback with scroll
  useGSAP(() => {
    if (!videoRef.current || !isVideoBackground) return;

    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;

    // Wait for video metadata to load
    const setupScrollTrigger = () => {
      if (!video.duration) return;

      // Calculate scroll distance
      const scrollDistance = `+=${video.duration * 100}vh`;

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: scrollDistance,
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Smooth video scrubbing
          requestAnimationFrame(() => {
            if (video.duration && !video.seeking) {
              const targetTime = video.duration * self.progress;
              if (Math.abs(video.currentTime - targetTime) > 0.01) {
                video.currentTime = targetTime;
              }
            }
          });
        },
        onEnter: () => video.pause(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.pause(),
        onLeaveBack: () => video.pause(),
      });

      // Fade out content as user scrolls
      const contentOverlay = containerRef.current?.querySelector(".content-overlay");
      if (contentOverlay) {
        gsap.to(contentOverlay, {
          opacity: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=50vh",
            scrub: true,
          },
        });
      }

      // Fade out scroll indicator
      const scrollIndicator = containerRef.current?.querySelector(".scroll-indicator");
      if (scrollIndicator) {
        gsap.to(scrollIndicator, {
          opacity: 0,
          y: 20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=30vh",
            scrub: true,
          },
        });
      }
    };

    // Setup once metadata is loaded
    if (video.readyState >= 1) {
      setupScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", setupScrollTrigger);
    }

    return () => {
      video.removeEventListener("loadedmetadata", setupScrollTrigger);
    };
  }, { scope: containerRef, dependencies: [isVideoBackground] });

  return (
    <div
      ref={containerRef}
      id={id}
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Full-screen video background for home section */}
      {isVideoBackground ? (
        <>
          {/* Video container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover will-change-[transform]"
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
              }}
            />
          </div>
          
      
        </>
      ) : (
        <>
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground image */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={foregroundImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </>
      )}

      {/* Content - Centered in right area accounting for sidebar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center lg:pl-[240px] px-8">
        <div className="content-overlay text-white text-center relative z-10 max-w-4xl">
          {sectionNumber === 0 ? (
            <>
             
              
           
              
              {/* Scroll indicator */}
              <div className="scroll-indicator mt-12 animate-bounce">
                <svg className="w-6 h-6 mx-auto text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-label="Scroll down">
                  <title>Scroll down</title>
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
                <p className="text-sm mt-2 text-white/80">Scroll to explore</p>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-6xl font-bold drop-shadow-lg">{title}</h2>
              <p className="text-xl mt-4 drop-shadow-md">{subtitle}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
