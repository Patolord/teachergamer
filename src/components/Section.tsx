"use client";

interface SectionProps {
  sectionNumber: number;
}

// Section data configuration
const SECTIONS_DATA = {
  0: {
    id: "section-0",
    title: "Teacher Gamer",
    subtitle: "Transform Learning Into an Adventure",
    videoSrc: "/3d-dice-spin.mp4",
  },
  1: {
    id: "section-1",
    title: "ABOUT",
    subtitle: "Learn about our approach",
    videoSrc: undefined,
  },
} as const;

export default function Section({
  sectionNumber,
}: SectionProps) {
  const sectionData = SECTIONS_DATA[sectionNumber as keyof typeof SECTIONS_DATA];
  const { id, title, subtitle, videoSrc } = sectionData;
  const hasVideo = videoSrc && sectionNumber === 0;

  return (
    <div
      id={id}
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Video Background - Full Screen */}
      {hasVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Animated dice background"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Top Navigation Bar */}
      {sectionNumber === 0 && (
        <nav className="absolute top-0 left-0 right-0 z-20 lg:pl-[240px]">
          <div className="flex items-center justify-between px-8 py-6">
            <div className="text-white font-bold text-2xl drop-shadow-lg">
              TeacherGamer
            </div>
            <div className="flex gap-6 text-white text-sm font-medium">
              <a href="#section-1" className="hover:text-white/80 transition-colors drop-shadow-md">
                About
              </a>
              <a href="#section-2" className="hover:text-white/80 transition-colors drop-shadow-md">
                Courses
              </a>
              <a href="#section-3" className="hover:text-white/80 transition-colors drop-shadow-md">
                Testimonials
              </a>
              <a href="#section-4" className="hover:text-white/80 transition-colors drop-shadow-md">
                Book
              </a>
            </div>
          </div>
        </nav>
      )}

      {/* Hero Content - Positioned around the edges */}
      {sectionNumber === 0 ? (
        <>
          {/* Heading - Top area below nav */}
          <div className="absolute top-24 left-0 right-0 z-10 lg:pl-[240px] px-8 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl tracking-tight">
              {title}
            </h1>
          </div>

          {/* Subheading - Bottom area above scroll */}
          <div className="absolute bottom-32 left-0 right-0 z-10 lg:pl-[240px] px-8 text-center">
            <p className="text-2xl md:text-3xl text-white drop-shadow-lg font-light tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Scroll Indicator - Very bottom */}
          <div className="absolute bottom-8 left-0 right-0 z-10 lg:pl-[240px] text-center">
            <div className="scroll-indicator animate-bounce">
              <svg className="w-8 h-8 mx-auto text-white drop-shadow-lg" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" aria-label="Scroll down">
                <title>Scroll down</title>
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <p className="text-sm mt-3 text-white/90 font-medium drop-shadow-md">Scroll to explore</p>
            </div>
          </div>
        </>
      ) : (
        /* Other Sections */
        <div className="absolute inset-0 flex flex-col items-center justify-center lg:pl-[240px] px-8">
          <div className="content-overlay text-white text-center relative z-10 max-w-4xl">
            <h2 className="text-6xl font-bold drop-shadow-lg">{title}</h2>
            <p className="text-xl mt-4 drop-shadow-md">{subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}
