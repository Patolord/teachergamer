"use client";

import { useRef } from "react";
import { useSectionContext } from "@/contexts/SectionContext";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Radar() {
  const { activeSection } = useSectionContext();
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentRotationRef = useRef(0);

  useGSAP(() => {
    if (!textRef.current) return;

    // Calculate target rotation angle
    const targetAngle = activeSection * 60;
    const currentAngle = currentRotationRef.current;
    
    // Determine direction: always go forward (clockwise), wrapping around
    let newAngle = targetAngle;
    if (targetAngle < currentAngle) {
      // Going backwards (e.g., section 3 to 0), add 360 to continue clockwise
      newAngle = targetAngle + 360;
    }
    
    // Calculate position on the circle (radius from center)
    const radius = 70; // Distance from center to text position
    
    // Animate rotation value
    gsap.to(currentRotationRef, {
      current: newAngle,
      duration: 1,
      ease: "circ.inOut",
      onUpdate: () => {
        if (!textRef.current) return;
        const angle = currentRotationRef.current % 360;
        const angleInRadians = (angle - 90) * (Math.PI / 180); // -90 to start from top
        const x = Math.cos(angleInRadians) * radius;
        const y = Math.sin(angleInRadians) * radius;
        
        gsap.set(textRef.current, { x, y });
      },
    });
  }, { scope: containerRef, dependencies: [activeSection] });

  return (
    <div className="absolute top-4 left-[-10px] pointer-events-auto" ref={containerRef}>
      <div className="relative w-48 h-48">
        {/* Disk background image */}
        <Image
          src="/disk.png"
          alt="Navigation Disk"
          fill
          className="object-contain"
          priority
        />
        
        {/* Section display overlay - positioned around the circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            ref={textRef}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-amber-100/80 text-xs font-mono mb-1 whitespace-nowrap">
              SECTION
            </div>
            <div className="text-amber-200 text-4xl font-bold font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {activeSection}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

