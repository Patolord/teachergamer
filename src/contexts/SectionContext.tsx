"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SectionContextType {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
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

