export default function ShopSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-900">
      <div className="container mx-auto px-8 py-16 max-w-6xl">
        <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
          Shop Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="h-48 bg-white/20 flex items-center justify-center">
              <span className="text-6xl">📚</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Learning Books
              </h3>
              <p className="text-white/90 mb-4">
                Comprehensive guides and workbooks
              </p>
              <button
                type="button"
                className="w-full px-4 py-2 bg-white text-orange-900 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="h-48 bg-white/20 flex items-center justify-center">
              <span className="text-6xl">🎲</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Educational Games
              </h3>
              <p className="text-white/90 mb-4">Fun learning tools and games</p>
              <button
                type="button"
                className="w-full px-4 py-2 bg-white text-orange-900 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
            <div className="h-48 bg-white/20 flex items-center justify-center">
              <span className="text-6xl">🎯</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Course Bundles
              </h3>
              <p className="text-white/90 mb-4">Complete learning packages</p>
              <button
                type="button"
                className="w-full px-4 py-2 bg-white text-orange-900 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
