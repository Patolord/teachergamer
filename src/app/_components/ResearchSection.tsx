export default function ResearchSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
          Our Research
        </h2>
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">
              The Impact of Gamification on Learning Outcomes
            </h3>
            <p className="text-white/90">
              Exploring how game-based learning improves student engagement and
              retention.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">
              Interactive Learning Methods in Modern Education
            </h3>
            <p className="text-white/90">
              Research on the effectiveness of hands-on, interactive teaching
              approaches.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-3">
              Digital Tools for Enhanced Student Participation
            </h3>
            <p className="text-white/90">
              Analyzing how technology transforms classroom dynamics and student
              involvement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
