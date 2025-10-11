"use client";

import { useSectionContext } from "@/contexts/SectionContext";
import Image from "next/image";

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

  const handleSectionClick = (sectionId: number) => {
    setActiveSection(sectionId);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="absolute bottom-8 left-8 pointer-events-auto">
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

