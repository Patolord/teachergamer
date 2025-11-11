import ShopSectionCard from "./ShopSectionCard";

export default function ShopSection() {
  return (
    <section className="flex justify-center items-center bg-amber-900">
      <div className="flex flex-col md:flex-row items-center  justify-center max-w-3xl w-full">
        
        <div className="flex justify-center">
          <ShopSectionCard image="/book-cover.png" />
        </div>

        
        <div className="flex flex-col  text-left md:text-left space-y-4">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">
            The Teacher-Gamer Handbook
          </h1>

          <h2 className="text-white text-sm md:text-base">
            Build literacy. Spark imagination. Empower learners. Transform classrooms into immersive adventures where students learn by playing, failing, and growing together.
          </h2>

          <ul className="list-disc list-inside text-xs md:text-sm text-white">
            <li>📘 300 pages of creative strategies and lesson plans</li>
            <li>🎲 36 life skills through collaborative RPG experiences</li>
            <li>⚔️ Designed for educators guiding 10+ year-old learners</li>
            <li>🔥 40+ hours of co-creative play and storytelling</li>
          </ul>

          <h2 className="text-white text-sm md:text-base">
            A complete framework to bring the power of role-playing into education.
          </h2>

          <button className="self-start text-white border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black transition">
            BUY THE BOOK
          </button>
        </div>

      </div>
    </section>
  );
}
