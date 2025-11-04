import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollDownIndicator from "./ScrollDownIndicator";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-black to-gray-900">
      <HeroBackground imageUrl="/section-0-bg.png" />

      <HeroContent
        title="Teacher Gamer Revolution"
        description="The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn."
        buttonText="Get Started Now"
      />

      <ScrollDownIndicator />
    </div>
  );
}
