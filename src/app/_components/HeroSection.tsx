import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center gap-6">
      <HeroBackground imageUrl="/section-0-bg.png" />

      <HeroContent
        title="Teacher Gamer Revolution"
        description="The future of education is here. Join the Teacher Gamer Revolution and revolutionize the way you learn."
        buttonText="Get Started Now"
      />

      <ScrollIndicator />
    </div>
  );
}
