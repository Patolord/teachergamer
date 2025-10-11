"use client";

import { useSectionContext } from "@/contexts/SectionContext";

export default function Radar() {
  const { activeSection } = useSectionContext();

  return (
    <div className="absolute top-4 left-4 pointer-events-auto">
      <div className="w-32 h-32 rounded-full border-2 border-green-500 bg-black/80 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
        {/* Radar grid lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-green-500/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-0.5 h-full bg-green-500/20" />
        </div>
        
        {/* Concentric circles */}
        <div className="absolute inset-4 rounded-full border border-green-500/30" />
        <div className="absolute inset-8 rounded-full border border-green-500/30" />

        {/* Section display */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="text-green-500 text-xs font-mono mb-1">SECTION</div>
          <div className="text-green-500 text-4xl font-bold font-mono">
            {activeSection}
          </div>
        </div>
      </div>
    </div>
  );
}

