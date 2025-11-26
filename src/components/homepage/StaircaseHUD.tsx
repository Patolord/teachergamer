"use client";

import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Mail,
  MessageSquare,
  ShoppingBag,
} from "lucide-react";
import { type RefObject, useEffect, useState } from "react";

interface Section {
  id: string;
  name: string;
  icon: typeof ShoppingBag;
  index: number;
}

const SECTIONS: Section[] = [
  { id: "shop", name: "Shop", icon: ShoppingBag, index: 0 },
  { id: "substack", name: "Substack", icon: BookOpen, index: 1 },
  { id: "calendar", name: "Calendar", icon: Calendar, index: 2 },
  { id: "courses", name: "Courses", icon: GraduationCap, index: 3 },
  { id: "research", name: "Research", icon: FileText, index: 4 },
  { id: "testimonials", name: "Reviews", icon: MessageSquare, index: 5 },
  { id: "contact", name: "Contact", icon: Mail, index: 6 },
];

interface StaircaseHUDProps {
  staircaseHUDRef?: RefObject<HTMLDivElement | null>;
}

export default function StaircaseHUD({ staircaseHUDRef }: StaircaseHUDProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Find current section based on scroll position
      const sectionElements = SECTIONS.map((s) => ({
        id: s.id,
        index: s.index,
        element: document.querySelector(`[data-scroll-section="${s.index}"]`),
      }));

      // Check from bottom to top to find the active section
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i].element;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionElements[i].index);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial check

    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionIndex: number) => {
    const section = document.querySelector(
      `[data-scroll-section="${sectionIndex}"]`,
    );
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (!isMounted) {
    return null;
  }

  const activeIndex = activeSection;
  const radius = 70;
  const centerX = 90;
  const centerY = 90;

  return (
    <div
      ref={staircaseHUDRef}
      className="group fixed left-4 top-4 z-50 pointer-events-auto"
    >
      {/* Circular staircase container */}
      <div className="relative w-[180px] h-[180px]">
        {/* Central section label */}
        <button
          type="button"
          onClick={() => setShowRoutes(!showRoutes)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center z-10 cursor-pointer transition-transform hover:scale-110"
        >
          <span className="text-xs font-bold text-primary font-serif text-center px-1">
            {SECTIONS.find((s) => s.index === activeSection)?.name}
          </span>
        </button>

        {/* Spinning staircase dial - always visible */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full transition-transform duration-700 ease-out"
            style={{
              transform: `rotate(${activeIndex * 51.43}deg)`, // 360/7 = ~51.43 degrees per section
            }}
          >
            <title>Staircase Navigation Dial</title>
            <defs>
              <radialGradient id="centerDarkness">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="30%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <filter id="activeGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Center dark pit */}
            <circle cx="80" cy="80" r="25" fill="url(#centerDarkness)" />

            {/* Draw spiral staircase steps */}
            {SECTIONS.map((section, index) => {
              const isActive = activeSection === section.index;
              const isPassed = activeSection > section.index;

              // Calculate angle for this step (clockwise spiral)
              const baseAngle = (index / SECTIONS.length) * 360;

              // Radius decreases as we go down
              const outerRadius = 65 - index * 5;
              const innerRadius = 30;

              // Calculate step corners for a wedge shape
              const startAngle = baseAngle - 25;
              const endAngle = baseAngle + 25;

              const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
              const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

              // Outer arc points
              const outerX1 = 80 + Math.cos(startAngleRad) * outerRadius;
              const outerY1 = 80 + Math.sin(startAngleRad) * outerRadius;
              const outerX2 = 80 + Math.cos(endAngleRad) * outerRadius;
              const outerY2 = 80 + Math.sin(endAngleRad) * outerRadius;

              // Inner arc points
              const innerX1 = 80 + Math.cos(startAngleRad) * innerRadius;
              const innerY1 = 80 + Math.sin(startAngleRad) * innerRadius;
              const innerX2 = 80 + Math.cos(endAngleRad) * innerRadius;
              const innerY2 = 80 + Math.sin(endAngleRad) * innerRadius;

              // Path for the step
              const stepPath = `
                M ${outerX1} ${outerY1}
                A ${outerRadius} ${outerRadius} 0 0 1 ${outerX2} ${outerY2}
                L ${innerX2} ${innerY2}
                A ${innerRadius} ${innerRadius} 0 0 0 ${innerX1} ${innerY1}
                Z
              `;

              return (
                <g key={section.index}>
                  {/* Main step */}
                  <path
                    d={stepPath}
                    fill={
                      isActive ? "#d4af37" : isPassed ? "#4a4a4a" : "#6b6b6b"
                    }
                    stroke={isActive ? "#ffd700" : "#3a3a3a"}
                    strokeWidth="1.5"
                    filter={isActive ? "url(#activeGlow)" : ""}
                    className="transition-all duration-300"
                  />

                  {/* Step edge highlight (3D effect) */}
                  <path
                    d={`
                      M ${outerX1} ${outerY1}
                      A ${outerRadius} ${outerRadius} 0 0 1 ${outerX2} ${outerY2}
                    `}
                    fill="none"
                    stroke={
                      isActive ? "#ffd700" : isPassed ? "#5a5a5a" : "#8a8a8a"
                    }
                    strokeWidth="2"
                    opacity="0.8"
                  />

                  {/* Step number indicator */}
                  <circle
                    cx={outerX1}
                    cy={outerY1}
                    r="5"
                    fill={isActive ? "#ffd700" : "#2a2a2a"}
                    stroke={isActive ? "#fff" : "#1a1a1a"}
                    strokeWidth="1"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Spiral path background - hidden by default, shown on hover or click */}
        <svg
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            showRoutes ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
          viewBox="0 0 180 180"
          aria-label="Navigation progress circle"
        >
          <title>Navigation Progress</title>
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
            className="text-muted"
          />
          {/* Progress arc */}
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary"
            strokeDasharray={`${
              ((activeIndex + 1) / SECTIONS.length) * 2 * Math.PI * radius
            } ${2 * Math.PI * radius}`}
            transform={`rotate(-90 ${centerX} ${centerY})`}
            style={{ transition: "stroke-dasharray 0.5s ease" }}
          />
        </svg>

        {/* Steps arranged in a circle - hidden by default, shown on hover or click */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            showRoutes
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
          }`}
        >
          {SECTIONS.map((section, index) => {
            const isActive = activeSection === section.index;
            const isPast = index <= activeIndex;
            const Icon = section.icon;

            const angle = (index / SECTIONS.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            return (
              <button
                key={section.id}
                type="button"
                onClick={() => scrollToSection(section.index)}
                className="absolute transition-all duration-300"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={`Navigate to ${section.name} section`}
              >
                {/* Step circle */}
                <div
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 border-2 ${
                    isActive
                      ? "w-11 h-11 bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/40 scale-110"
                      : isPast
                        ? "w-9 h-9 bg-primary/20 text-primary border-primary/40"
                        : "w-9 h-9 bg-background text-muted-foreground border-muted"
                  }`}
                >
                  <Icon className={isActive ? "w-5 h-5" : "w-4 h-4"} />

                  {/* Active pulse ring */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Level label */}
      <div className="text-center mt-2">
        <span className="text-xs text-muted-foreground font-medium">
          Level {activeIndex + 1}
        </span>
      </div>
    </div>
  );
}
