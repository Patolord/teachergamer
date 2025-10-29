"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Home() {
  const box = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(box.current, {
      x: 100,
      duration: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <div>
      <h1>Home</h1>
      <div ref={box} className="w-10 h-10 bg-red-500"></div>
    </div>
  );
}
