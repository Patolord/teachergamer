import { useEffect } from "react";

export function useSectionFadeIn(delay: number = 2000) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.03,
    };

    const fadeInSections = () => {
      const sections = document.querySelectorAll("[data-scroll-section]");

      sections.forEach((section, index) => {
        const htmlSection = section as HTMLElement;

        // Find content elements within the section (skip absolute positioned backgrounds)
        // Look for common content wrapper patterns: container, relative z-10, etc.
        const contentSelectors = [
          "[data-section-content]",
          ".container",
          "[class*='relative'][class*='z-10']",
          "[class*='relative z-10']",
        ];

        const contentElements: HTMLElement[] = [];

        // Try to find content wrappers
        contentSelectors.forEach((selector) => {
          const elements = htmlSection.querySelectorAll(selector);
          elements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            // Only include if it's not absolute positioned (backgrounds are absolute)
            const computedStyle = window.getComputedStyle(htmlEl);
            if (
              computedStyle.position !== "absolute" &&
              computedStyle.position !== "fixed"
            ) {
              // Avoid duplicates
              if (!contentElements.includes(htmlEl)) {
                contentElements.push(htmlEl);
              }
            }
          });
        });

        // If no content wrappers found, use direct children that aren't absolute
        if (contentElements.length === 0) {
          Array.from(htmlSection.children).forEach((child) => {
            const htmlChild = child as HTMLElement;
            const computedStyle = window.getComputedStyle(htmlChild);
            if (
              computedStyle.position !== "absolute" &&
              computedStyle.position !== "fixed"
            ) {
              if (!contentElements.includes(htmlChild)) {
                contentElements.push(htmlChild);
              }
            }
          });
        }

        // Apply fade-in to content elements
        contentElements.forEach((contentEl) => {
          // Skip if already has opacity set (to avoid conflicts)
          if (contentEl.style.opacity === "") {
            // Set initial opacity to 0
            contentEl.style.opacity = "0";
            contentEl.style.transition = "opacity 1s ease-in-out";
          }
        });

        // Create intersection observer for the section
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Fade in content elements after delay
              setTimeout(() => {
                contentElements.forEach((contentEl) => {
                  contentEl.style.opacity = "1";
                });
              }, delay + index * 200); // Stagger animations slightly

              // Unobserve after animation starts
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        observer.observe(htmlSection);
      });
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(fadeInSections, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
}
