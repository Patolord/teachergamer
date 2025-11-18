import { Swords } from "lucide-react";
import ScrambledText from "@/components/ScrambledText";

import { Button } from "@/components/ui/button";
import SocialProof from "./SocialProof";

type HeroContentProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
};

export default function HeroContent({
  title,
  description,
  buttonText,
  onButtonClick,
}: HeroContentProps) {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-4 w-full max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white px-2 sm:px-5 leading-tight">
        {title}
      </h1>

      <ScrambledText
        radius={50}
        duration={1.2}
        className="pb-30 text-sm sm:text-base px-2"
        speed={0.5}
        scrambleChars={".:"}
      >
        {description}
      </ScrambledText>

      <Button
        className="text-sm sm:text-base md:text-lg py-4 sm:py-5 px-4 sm:px-6 uppercase tracking-wide flex items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 hover:font-bold rounded-xl"
        type="button"
        onClick={onButtonClick}
      >
        <Swords className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{buttonText}</span>
      </Button>

      <SocialProof />
    </div>
  );
}
