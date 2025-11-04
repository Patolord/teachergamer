import ShopSectionCard from "./ShopSectionCard";

export default function ShopSection() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-20">
          <ShopSectionCard width={300} height={400} image="/book-cover.png" />
        </div>
      </div>
    </section>
  );
}
