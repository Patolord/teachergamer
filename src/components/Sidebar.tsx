"use client";

import { useSectionContext } from "@/contexts/SectionContext";

const sections = [
  { id: 0, label: "Section 0", icon: "🏠" },
  { id: 1, label: "Section 1", icon: "📊" },
  { id: 2, label: "Section 2", icon: "🎮" },
  { id: 3, label: "Section 3", icon: "⚙️" },
  { id: 4, label: "Section 4", icon: "🎯" },
];

export default function Sidebar() {
  const { activeSection, setActiveSection, scrollSmoother } = useSectionContext();

  const handleSectionClick = (sectionId: number) => {
    setActiveSection(sectionId);
    if (scrollSmoother) {
      // Calculate scroll position based on section index
      // Each section is 100vh, so multiply by viewport height
      const scrollPosition = sectionId * window.innerHeight;
      scrollSmoother.scrollTo(scrollPosition, true);
    }
  };

  return (
    <div className="absolute bottom-8 left-8 pointer-events-auto">
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4">
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionClick(section.id)}
              className={`
                w-14 h-14 rounded-xl flex flex-col items-center justify-center
                transition-all duration-300 relative group
                ${
                  activeSection === section.id
                    ? "bg-blue-600 border-2 border-blue-400 scale-110"
                    : "bg-gray-800 border border-gray-600 hover:bg-gray-700 hover:scale-105"
                }
              `}
            >
              <span className="text-xl">{section.icon}</span>
              <span className="text-[10px] font-mono mt-0.5">
                {section.id}
              </span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 border border-gray-600 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-xs font-medium">{section.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

