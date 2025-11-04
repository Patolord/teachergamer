import ShopSectionCard from "./ShopSectionCard";

export default function ShopSection() {
  return (
    <section className="flex items-center justify-center min-h-[60vh] px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-40  ">
          <ShopSectionCard width={300} height={400} image="/book-cover.png" />
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-2xl font-semibold">
              The Teacher-Gamer Handbook
            </h1>

            <h2 className="text-white text-sm mb-2">
              Build literacy. Spark imagination. Empower learners. Transform
              classrooms into immersive adventures where students learn by
              playing, failing, and growing together.
            </h2>
            <ul className="pl-6 list-disc mb-2">
              <li className="text-xs text-white">
                📘 300 pages of creative strategies and lesson plans
              </li>
              <li className="text-xs text-white">
                🎲 36 life skills through collaborative RPG experiences
              </li>
              <li className="text-xs text-white">
                ⚔️ Designed for educators guiding 10+ year-old learners
              </li>
              <li className="text-xs text-white">
                🔥 40+ hours of co-creative play and storytelling
              </li>
            </ul>

            <h2 className="text-white text-sm mb-4">
              {" "}
              A complete framework to bring the power of role-playing into
              education.{" "}
            </h2>
            <button
              type="button"
              className="text-white border border-white rounded-md"
            >
              BUY THE BOOK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
