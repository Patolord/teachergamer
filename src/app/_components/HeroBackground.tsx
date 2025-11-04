import { forwardRef } from "react";

type HeroBackgroundProps = {
  imageUrl: string;
};

const HeroBackground = forwardRef<HTMLDivElement, HeroBackgroundProps>(
  ({ imageUrl }, ref) => {
    return (
      <div
        ref={ref}
        className="hero-img relative w-full h-full"
        style={{
          transform: "translateZ(1000px)",
          opacity: 0,
          willChange: "transform, opacity",
        }}
      >
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
    );
  },
);

HeroBackground.displayName = "HeroBackground";

export default HeroBackground;
