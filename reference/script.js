import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*   ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  }); */

  const nav = document.querySelector("nav");
  const header = document.querySelector(".header");
  const heroImg = document.querySelector(".hero-img");
  const video = document.querySelector("video");
  const progressBar = document.querySelector(".progress-bar");
  const progressBarInner = document.querySelector(".progress-bar-inner");

  // Set video source and configuration
  video.src = "/hero-vid-max.mp4";
  video.pause(); // Ensure video doesn't autoplay

  let isVideoReady = false;

  // Wait for video to be ready for seeking
  video.addEventListener("loadeddata", () => {
    isVideoReady = true;
    video.currentTime = 0; // Ensure video starts at first frame
    setupScrollTrigger();
  });

  const setupScrollTrigger = () => {
    let frameRequested = false;
    let targetVideoTime = 0;

    const updateVideoTime = () => {
      if (isVideoReady && video.duration) {
        video.currentTime = targetVideoTime;
      }
      frameRequested = false;
    };

    //hero section
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: `+=${window.innerHeight * 7}px`,
      pin: true,
      markers: true,
      pinSpacing: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // Calculate target video time
        const animationProgress = Math.min(progress / 0.9, 1);
        targetVideoTime = animationProgress * video.duration;

        // Use requestAnimationFrame to batch video seeks
        if (!frameRequested) {
          frameRequested = true;
          requestAnimationFrame(updateVideoTime);
        }

        if (progress <= 0.1) {
          const navProgress = progress / 0.1;
          const opacity = 1 - navProgress;
          gsap.set(nav, { opacity });
        } else {
          gsap.set(nav, { opacity: 0 });
        }

        if (progress <= 0.25) {
          const zProgress = progress / 0.25;
          const translateZ = zProgress * -500;

          let opacity = 1;
          if (progress >= 0.2) {
            const fadeProgress = Math.min((progress - 0.2) / (0.25 - 0.2), 1);
            opacity = 1 - fadeProgress;
          }

          gsap.set(header, {
            transform: `translate(-50%, -50%) translateZ(${translateZ}px)`,
            opacity,
          });
        } else {
          gsap.set(header, { opacity: 0 });
        }

        if (progress < 0.6) {
          gsap.set(heroImg, {
            transform: "translateZ(1000px)",
            opacity: 0,
          });
        } else if (progress >= 0.6 && progress <= 0.9) {
          const imgProgress = (progress - 0.6) / (0.9 - 0.6);
          const translateZ = 1000 - imgProgress * 1000;

          let opacity = 0;
          if (progress <= 0.8) {
            const opacityProgress = (progress - 0.6) / (0.8 - 0.6);
            opacity = opacityProgress;
          } else {
            opacity = 1;
          }

          gsap.set(heroImg, {
            transform: `translateZ(${translateZ}px)`,
            opacity,
          });
        } else {
          gsap.set(heroImg, {
            transform: "translateZ(0px)",
            opacity: 1,
          });
        }
      },
    });
    //sections wrapper - create progress bar

    ScrollTrigger.create({
      trigger: ".sections-wrapper",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(progressBarInner, { height: `${progress * 100}%` });
      },
      onEnter: () => {
        gsap.to(progressBar, { opacity: 1, duration: 0.3 });
      },
      onLeave: () => {
        gsap.to(progressBar, { opacity: 0, duration: 0.3 });
      },
      onEnterBack: () => {
        gsap.to(progressBar, { opacity: 1, duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(progressBar, { opacity: 0, duration: 0.3 });
        gsap.set(progressBarInner, { height: "0%" });
      },
    });
  };

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
  });
});
