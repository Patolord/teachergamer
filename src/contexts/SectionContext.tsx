"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { ScrollSmoother } from "gsap/ScrollSmoother";

interface SectionContextType {
  activeSection: number;
  setActiveSection: (section: number) => void;
  scrollSmoother: ScrollSmoother | null;
  setScrollSmoother: (smoother: ScrollSmoother) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollSmoother, setScrollSmoother] = useState<ScrollSmoother | null>(
    null,
  );

  return (
    <SectionContext.Provider
      value={{ activeSection, setActiveSection, scrollSmoother, setScrollSmoother }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
}

