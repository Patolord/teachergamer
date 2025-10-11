"use client";

import ParallaxSection from "@/components/ParallaxSection";
import { useSectionContext } from "@/contexts/SectionContext";

const sections = [
  {
    id: "section-0",
    number: 0,
    title: "Section 0",
    backgroundImage: "/section-0-bg.png",
    foregroundImage: "/section-0-fg.png",
  },
  {
    id: "section-1",
    number: 1,
    title: "Section 1",
    backgroundImage: "/section-1-bg.png",
    foregroundImage: "/section-1-fg.png",
  },
  {
    id: "section-2",
    number: 2,
    title: "Section 2",
    backgroundImage: "/section-2-bg.png",
    foregroundImage: "/section-2-fg.png",
    backgroundColor: "#db2777",
  },
  {
    id: "section-3",
    number: 3,
    title: "Section 3",
    backgroundImage: "/section-3-bg.png",
    foregroundImage: "/section-3-fg.png",
    backgroundColor: "#ea580c",
  },
  {
    id: "section-4",
    number: 4,
    title: "Section 4",
    backgroundImage: "/section-4-bg.png",
    foregroundImage: "/section-4-fg.png",
    backgroundColor: "#16a34a",
  },
];

export default function Home() {
  const { setActiveSection } = useSectionContext();

  return (
    <div>
      {sections.map((section) => (
        <ParallaxSection
          key={section.id}
          id={section.id}
          sectionNumber={section.number}
          title={section.title}
          backgroundImage={section.backgroundImage}
          foregroundImage={section.foregroundImage}
          backgroundColor={section.backgroundColor}
          onEnter={() => setActiveSection(section.number)}
          onEnterBack={() => setActiveSection(section.number)}
        />
      ))}
    </div>
  );
}
