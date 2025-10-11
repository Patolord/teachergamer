"use client";

interface ParallaxSectionProps {
  id: string;
  sectionNumber: number;
  backgroundImage: string;
  foregroundImage: string;
  title: string;
  subtitle?: string;
}

export default function ParallaxSection({
  id,
  sectionNumber,
  backgroundImage,
  foregroundImage,
  title,
  subtitle = "Add your content here",
}: ParallaxSectionProps) {
  return (
    <div
      id={id}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background image container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="absolute w-full h-[160%] object-cover"
          data-speed="auto"
          style={{ top: 0, left: 0 }}
        />
      </div>

      {/* Foreground image container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={foregroundImage}
          alt=""
          className="absolute w-full h-[160%] object-cover"
          data-speed="auto"
          style={{ bottom: 0, left: 0 }}
        />
      </div>

      {/* Content */}
      <div className="text-white text-center relative z-10">
        {sectionNumber === 0 ? (
          <h1 className="text-6xl font-bold drop-shadow-lg">{title}</h1>
        ) : (
          <h2 className="text-6xl font-bold drop-shadow-lg">{title}</h2>
        )}
        <p className="text-xl mt-4 drop-shadow-md">{subtitle}</p>
      </div>
    </div>
  );
}
