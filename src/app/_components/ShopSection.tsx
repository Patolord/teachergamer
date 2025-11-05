import ShopSectionCard from "./ShopSectionCard";

export default function ShopSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 bg-gradient-to-b from-whit group-even:from-yello-500 to-yellow-600 overflow-hidden">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <ShopSectionCard width={500} height={700} image="/book-cover.png" />
          <div className="flex flex-col justify-center gap-4 max-w-xl">
            <h1 className="text-black text-4xl md:text-5xl font-metamorphous tracking-wide mb-20 leading-tight whitespace-nowrap">
              The Teacher-Gamer Handbook
            </h1>
            <ul className="pl-6 list-disc space-y-2 mb-4">
              <li className="text-sm md:text-base text-white leading-relaxed">
                📘 300 pages of creative strategies and lesson plans
              </li>
              <li className="text-sm md:text-base text-white leading-relaxed">
                🎲 36 life skills through collaborative RPG experiences
              </li>
              <li className="text-sm md:text-base text-white leading-relaxed">
                ⚔️ Designed for educators guiding 10+ year-old learners
              </li>
              <li className="text-sm md:text-base text-white leading-relaxed">
                🔥 40+ hours of co-creative play and storytelling
              </li>
            </ul>

            <h2 className="text-white text-base md:text-lg leading-relaxed mb-6">
              A complete framework to bring the power of role-playing into
              education.
            </h2>
            <button
              type="button"
              className="text-white border-2 border-white rounded-md py-3 px-8 hover:bg-white hover:text-yellow-600 transition-all duration-300 w-fit font-semibold animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]"
            >
              BUY THE BOOK
            </button>
          </div>
        </div>
      </div>

      {/* Medieval Shaded Image - Bottom Right Corner */}
      <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-80 pointer-events-none">
        <img
          src="/medieval-shaded.png"
          alt="Medieval decoration"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
