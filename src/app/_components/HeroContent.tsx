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
    <div className="relative z-20 flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold text-center text-white p-5">{title}</h1>

      <ScrambledText
        radius={50}
        duration={1.2}
        className="pb-30"
        speed={0.5}
        scrambleChars={".:"}
      >
        {description}
      </ScrambledText>

      <Button
        className="text-lg py-5 uppercase tracking-wide flex items-center gap-2 cursor-pointer hover:scale-110 transition-all duration-300 hover:font-bold rounded-xl "
        type="button"
        onClick={onButtonClick}
      >
        <Swords className="w-5 h-5" />
        <span>{buttonText}</span>
      </Button>

      <SocialProof />
    </div>
  );
}
