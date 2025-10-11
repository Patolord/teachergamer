"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParallaxSectionProps {
  id: string;
  sectionNumber: number;
  backgroundImage: string;
  foregroundImage: string;
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  onEnter?: () => void;
  onEnterBack?: () => void;
}

export default function ParallaxSection({
  id,
  sectionNumber,
  backgroundImage,
  foregroundImage,
  title,
  subtitle = "Add your content here",
  backgroundColor,
  onEnter,
  onEnterBack,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onEnter: onEnter,
          onEnterBack: onEnterBack,
        },
      });

      // Background moves slowly (stays more in place)
      tl.to(
        backgroundRef.current,
        {
          y: "30%",
          ease: "none",
        },
        0
      );

      // Foreground moves faster (goes up)
      // For section 0, start from bottom and move up
      if (sectionNumber === 0) {
        tl.fromTo(
          foregroundRef.current,
          {
            y: "0%",
          },
          {
            y: "-50%",
            ease: "none",
          },
          0
        );
      } else {
        tl.to(
          foregroundRef.current,
          {
            y: "-90%",
            ease: "none",
          },
          0
        );
      }

      // Transition element - fades in to cover artifacts and help transition
      tl.fromTo(
        transitionRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "none",
        },
        0.5
      );

      // Content stays relatively normal
      tl.to(
        contentRef.current,
        {
          y: "-20%",
          opacity: 0.8,
          ease: "none",
        },
        0
      );
    });

    return () => ctx.revert();
  }, [onEnter, onEnterBack, sectionNumber]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className="min-h-[150vh] flex items-center justify-center relative overflow-hidden"
    >
      {/* Background - slow parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: backgroundColor,
        }}
      />

      {/* Foreground - fast parallax (goes up) */}
      <div
        ref={foregroundRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${foregroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: sectionNumber === 0 ? "bottom center" : "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Transition element - covers artifacts and helps transition */}
      <div
        ref={transitionRef}
        className="absolute bottom-0 left-0 w-full h-1/3"
        style={{
          background: backgroundColor 
            ? `linear-gradient(to bottom, transparent, ${backgroundColor})`
            : "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
          opacity: 0,
        }}
      />

      {/* Content - normal speed */}
      <div ref={contentRef} className="text-white text-center relative z-10">
        {sectionNumber === 0 ? (
          <h1 className="text-6xl font-bold drop-shadow-lg">{title}</h1>
        ) : (
          <h2 className="text-6xl font-bold drop-shadow-lg">{title}</h2>
        )}
        <p className="text-xl mt-4 drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
}

