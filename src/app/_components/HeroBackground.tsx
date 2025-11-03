type HeroBackgroundProps = {
  imageUrl: string;
};

export default function HeroBackground({ imageUrl }: HeroBackgroundProps) {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />
    </>
  );
}
