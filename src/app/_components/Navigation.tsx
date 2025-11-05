"use client";

import { forwardRef } from "react";

const Navigation = forwardRef<HTMLElement>((props, ref) => {
  return (
    <nav
      ref={ref}
      className="fixed w-screen px-8 py-6 flex items-center gap-8 z-[2]"
      style={{ willChange: "opacity" }}
    >
      <div className="flex-1 flex gap-12">
        <a
          href="#courses"
          className="text-white hover:opacity-70 transition-opacity text-xs font-medium uppercase"
        >
          Courses
        </a>
        <a
          href="#shop"
          className="text-white hover:opacity-70 transition-opacity text-xs font-medium uppercase"
        >
          Shop
        </a>
        <a
          href="#about"
          className="text-white hover:opacity-70 transition-opacity text-xs font-medium uppercase"
        >
          About
        </a>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <a href="/" className="text-2xl text-white font-normal">
          Teacher Gamer
        </a>
      </div>

      <div className="flex-1 flex gap-6 justify-end">
        <div className="px-6 py-3 rounded bg-white">
          <a href="#login" className="text-xs font-medium uppercase text-black">
            Training
          </a>
        </div>
        <div className="px-6 py-3 rounded bg-black">
          <a
            href="#signup"
            className="text-xs font-medium uppercase text-white"
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
