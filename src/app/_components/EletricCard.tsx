import { ArrowRightIcon } from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EletricCardProps = {
  title: string;
  description: string;
  color: string;
};

export default function EletricCard({
  title,
  description,
  color,
}: EletricCardProps) {
  return (
    <ElectricBorder
      color={color}
      speed={1}
      chaos={0.5}
      thickness={2}
      style={{ borderRadius: 16 }}
    >
      <Card className="border-0 h-full min-h-[400px] bg-black/50 backdrop-blur-sm text-white flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-grey">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam ea
          aliquam delectus? Alias dicta omnis ab repellendus quae magnam cum?
        </CardContent>
        <CardFooter className="mt-auto">
          <Button
            variant="outline"
            className="text-black border rounded-xl px-10"
          >
            <ArrowRightIcon className="w-4 h-4" />
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </ElectricBorder>
  );
}
