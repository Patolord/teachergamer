export default function SubstackSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900">
      <div className="container mx-auto px-8 py-16 max-w-4xl text-center">
        <h2 className="text-6xl font-bold text-white mb-8 max-[1000px]:text-4xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
          Get weekly insights, teaching tips, and exclusive content delivered
          straight to your inbox.
        </p>
        <div className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-6 py-4 rounded-lg mb-4 text-gray-900 text-lg"
          />
          <button
            type="button"
            className="w-full px-8 py-4 bg-white text-purple-900 rounded-lg font-bold text-xl hover:bg-white/90 transition"
          >
            Subscribe on Substack
          </button>
        </div>
      </div>
    </section>
  );
}
