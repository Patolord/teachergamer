"use client";

import { useRef } from "react";
import { useSectionContext } from "@/contexts/SectionContext";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Tower sections mapped to app sections (bottom to top on the tower)
const towerSections = [
  { id: 0, label: "HOME", top: "73%", height: "15%" }, // Bottom section
  { id: 1, label: "ABOUT", top: "57%", height: "16%" }, // Second from bottom
  { id: 2, label: "COURSES", top: "41%", height: "16%" }, // Third from bottom
  { id: 3, label: "TRUST", top: "25%", height: "16%" }, // Fourth from bottom
  { id: 4, label: "BOOK", top: "9%", height: "16%" }, // Top section (roof area)
];

export default function Sidebar() {
  const { activeSection, setActiveSection } = useSectionContext();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sidebarRef.current) return;

    // Start hidden
    gsap.set(sidebarRef.current, { opacity: 0, x: -50 });

    // Fade in when section-1 (ABOUT) starts
    ScrollTrigger.create({
      trigger: "#section-1",
      start: "top center",
      onEnter: () => {
        gsap.to(sidebarRef.current, {
          opacity: 1,
          x: 0,
          visibility: 'visible',
          duration: 1,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(sidebarRef.current, {
          opacity: 0,
          x: -50,
          visibility: 'hidden',
          duration: 0.5,
          ease: "power2.in",
        });
      },
    });
  }, { scope: sidebarRef });

  const handleSectionClick = (sectionId: number) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "instant", block: "start" });
    }
  };

  return (
    <div 
      ref={sidebarRef} 
      className="absolute bottom-0 left-[-5px] pointer-events-auto"
      style={{ opacity: 0, transform: 'translateX(-50px)', visibility: 'hidden' }}
    >
      <div className="relative w-[180px] h-[600px]">
        {/* Tower background image */}
        <Image
          src="/menu-ui.png"
          alt="Navigation Tower"
          fill
          className="object-contain"
          priority
        />
        
        {/* Clickable regions overlay */}
        <div className="absolute inset-0">
          {towerSections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionClick(section.id)}
              className={`
                absolute left-[10%] right-[10%] 
                transition-all duration-300
                
                ${activeSection === section.id ? "" : ""}
              `}
              style={{
                top: section.top,
                height: section.height,
              }}
              aria-label={`Navigate to ${section.label}`}
            >
              {/* Optional: Visual indicator on hover/active */}
              <span className="sr-only">{section.label}</span>
            </button>
          ))}
        </div>

 
      </div>
    </div>
  );
}

