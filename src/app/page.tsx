"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    let tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);


  tl.to(".circle", {
      y: 300,
      rotation: 360,
      color: "yellow",
      duration: 2,
      ease: "bounce.out",
    },1);

    tl.to(".star", {
      y: 300,
      scrollTrigger: {
        trigger: '.star',
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        markers: true,
        toggleActions: "restart pause reverse pause",

      },
      rotation: 360,
      color: "yellow",
      duration: 3,
      ease: "steps(5)",
    },1);

    tl.to(".heart", {
      scale: 1.2,
      repeat: -1,
      duration: 0.5,
      yoyo: true,
    }, 0);
  }, []);

  return (
    <div>
      Hello
      <div className="circle"></div>
      <div className="progress"></div>
      <div className="star"></div>
      <div className="heart"></div>
    </div>
  );
}
