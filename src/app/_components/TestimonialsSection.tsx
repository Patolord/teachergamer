export default function TestimonialsSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 mb-4 italic">
              "Amazing learning experience! The interactive approach makes
              complex topics easy to understand."
            </p>
            <p className="text-white font-semibold">- Sarah M.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 mb-4 italic">
              "The gamification elements keep my kids engaged and excited about
              learning."
            </p>
            <p className="text-white font-semibold">- John D.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <p className="text-white/90 mb-4 italic">
              "Best educational platform I've come across. Highly recommended!"
            </p>
            <p className="text-white font-semibold">- Emily R.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
