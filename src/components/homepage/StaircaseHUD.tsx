"use client";

import { useEffect, useState } from "react";

interface Section {
  name: string;
  index: number;
}

const SECTIONS: Section[] = [
  { name: "Testimonials", index: 0 },
  { name: "Shop", index: 1 },
  { name: "Substack", index: 2 },
  { name: "Calendar", index: 3 },
  { name: "Courses", index: 4 },
  { name: "Research", index: 5 },
  { name: "Contact", index: 6 },
];

export default function StaircaseHUD() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Check if hero section is out of view (hero is 100vh)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Show HUD after scrolling past hero section
      setIsVisible(scrollY > heroHeight * 10);

      // Find current section based on scroll position
      const sections = document.querySelectorAll("[data-scroll-section]");
      let foundSection = 0;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionIndex = parseInt(
          section.getAttribute("data-scroll-section") || "0",
        );

        // Check if section is in the middle third of viewport
        if (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight / 2
        ) {
          foundSection = sectionIndex;
        }
      });

      setCurrentSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionIndex: number) => {
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

  return (
    <div
      className={`hidden md:block fixed top-4 left-4 z-50 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      {/* Medieval Frame Container - Circular */}
      <div className="relative">
        {/* Main SVG Container with circular stone background */}
        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-4 border-yellow-700 shadow-2xl overflow-hidden">
          {/* Stone texture overlay */}
          <div
            className="absolute inset-0 opacity-20 rounded-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* SVG Spiral Staircase with rotation */}
          <svg
            viewBox="0 0 160 160"
            className="w-full h-full transition-transform duration-700 ease-out"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
              transform: `rotate(${currentSection * 51.43}deg)`, // 360/7 = ~51.43 degrees per section
            }}
          >
            <title>Staircase Navigation</title>
            {/* Center darkness (dungeon depth) */}
            <defs>
              <radialGradient id="centerDarkness">
                <stop offset="0%" stopColor="#0a0a0a" />
                <stop offset="30%" stopColor="#1a1a1a" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Glow effect for active step */}
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

            {/* Draw actual staircase steps spiraling down */}
            {SECTIONS.map((section, index) => {
              const isActive = currentSection === section.index;
              const isPassed = currentSection > section.index;

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

              // Text position (middle of step)
              const textAngleRad = ((baseAngle - 90) * Math.PI) / 180;
              const textRadius = (outerRadius + innerRadius) / 2;
              const textX = 80 + Math.cos(textAngleRad) * textRadius;
              const textY = 80 + Math.sin(textAngleRad) * textRadius;

              return (
                // biome-ignore lint/a11y/noStaticElementInteractions: SVG navigation component
                <g
                  key={section.index}
                  onClick={() => navigateToSection(section.index)}
                  style={{ cursor: "pointer" }}
                  className="transition-all duration-300"
                >
                  {/* Main step */}
                  <path
                    d={stepPath}
                    fill={
                      isActive ? "#d4af37" : isPassed ? "#4a4a4a" : "#6b6b6b"
                    }
                    stroke={isActive ? "#ffd700" : "#3a3a3a"}
                    strokeWidth="1.5"
                    filter={isActive ? "url(#activeGlow)" : ""}
                    className="transition-all duration-300 hover:fill-yellow-600"
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

                  {/* Counter-rotate text so it stays readable */}
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="8"
                    fontWeight="bold"
                    fill={isActive ? "#000" : "#fff"}
                    className="pointer-events-none select-none"
                    style={{
                      textShadow: isActive
                        ? "0 0 6px #ffd700"
                        : "1px 1px 2px #000",
                      fontFamily: "serif",
                    }}
                    transform={`rotate(${-currentSection * 51.43}, ${textX}, ${textY})`}
                  >
                    {section.name}
                  </text>

                  {/* Step number */}
                  <g
                    transform={`rotate(${-currentSection * 51.43}, ${outerX1}, ${outerY1})`}
                  >
                    <circle
                      cx={outerX1}
                      cy={outerY1}
                      r="5"
                      fill={isActive ? "#ffd700" : "#2a2a2a"}
                      stroke={isActive ? "#fff" : "#1a1a1a"}
                      strokeWidth="1"
                    />
                    <text
                      x={outerX1}
                      y={outerY1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="6"
                      fontWeight="bold"
                      fill={isActive ? "#000" : "#fff"}
                      className="pointer-events-none select-none"
                      style={{ fontFamily: "serif" }}
                    >
                      {index + 1}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>

          {/* Title at bottom - counter-rotates to stay readable */}
          <div
            className="absolute inset-0 flex items-end justify-center pb-2 pointer-events-none"
            style={{
              transform: `rotate(${-currentSection * 51.43}deg)`,
              transition: "transform 0.7s ease-out",
            }}
          >
            <p
              className="text-center text-yellow-400 text-[10px] font-bold tracking-wider px-2 py-1 bg-black/60 rounded"
              style={{
                fontFamily: "serif",
                textShadow: "0 0 8px rgba(212, 175, 55, 0.5)",
              }}
            >
              LEVEL {currentSection + 1}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
