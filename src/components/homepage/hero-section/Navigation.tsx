"use client";

import { forwardRef, CSSProperties } from "react";

interface NavigationProps {
  style?: CSSProperties;
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(({ style }, ref) => {
  return (
    <nav
      ref={ref}
      className="fixed w-full px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center justify-between gap-2 sm:gap-4 md:gap-8 z-[2]"
      style={{ willChange: "opacity", ...style }}
    >
      {/* Left Links - Hidden on very small screens, visible from 550px+ */}
      <div className="hidden min-[550px]:flex flex-1 gap-4 sm:gap-6 md:gap-12">
        <a
          href="#courses"
          className="text-white hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
        >
          Courses
        </a>
        <a
          href="#shop"
          className="text-white hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
        >
          Shop
        </a>
        <a
          href="#about"
          className="text-white hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
        >
          About
        </a>
      </div>

      {/* Center Logo */}
      <div className="flex-1 min-[550px]:flex-none flex justify-center items-center">
        <a href="/" className="text-base sm:text-xl md:text-2xl text-white font-normal whitespace-nowrap">
          Teacher Gamer
        </a>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-1 gap-2 sm:gap-4 md:gap-6 justify-end">
        <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded bg-white">
          <a href="#login" className="text-[10px] sm:text-xs font-medium uppercase text-black whitespace-nowrap">
            Training
          </a>
        </div>
        <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded bg-black border border-white">
          <a
            href="#signup"
            className="text-[10px] sm:text-xs font-medium uppercase text-white whitespace-nowrap"
          >
            Buy Book
          </a>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
