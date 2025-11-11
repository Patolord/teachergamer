"use client";

import EletricCard from "./EletricCard";

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({ sectionIndex }: CoursesSectionProps) {
 
  return (
    <section
      data-scroll-section={sectionIndex}
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
    >
      <div className="container mx-auto px-8 py-16 max-w-7xl">
        <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
          Section {sectionIndex}
        </h2>      
      </div>
    </section>
  );
}
