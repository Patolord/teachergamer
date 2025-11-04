import ScrollSlider from "./ScrollSlider";

/**
 * ScrollSlider with main content sections
 *
 * Each child section becomes a slide in the slider.
 * The ScrollSlider handles scroll-based transitions, indicators, and progress bar.
 */
export default function ExampleScrollSlider() {
  return (
    <ScrollSlider>
      {/* Testimonials Section */}
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
                "The gamification elements keep my kids engaged and excited
                about learning."
              </p>
              <p className="text-white font-semibold">- John D.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <p className="text-white/90 mb-4 italic">
                "Best educational platform I've come across. Highly
                recommended!"
              </p>
              <p className="text-white font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="container mx-auto px-8 py-16 max-w-6xl">
          <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
            Our Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">
                Beginner Course
              </h3>
              <p className="text-white/90 mb-4">
                Start your learning journey with our comprehensive beginner
                program.
              </p>
              <button
                type="button"
                className="px-6 py-3 bg-white text-teal-900 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Learn More
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">
                Advanced Course
              </h3>
              <p className="text-white/90 mb-4">
                Take your skills to the next level with our advanced curriculum.
              </p>
              <button
                type="button"
                className="px-6 py-3 bg-white text-teal-900 rounded-lg font-semibold hover:bg-white/90 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Section */}
      <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="container mx-auto px-8 py-16 max-w-4xl text-center">
          <h2 className="text-6xl font-bold text-white mb-8 max-[1000px]:text-4xl">
            Book Your Session
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
            Schedule a personalized learning session with our expert
            instructors. Choose a time that works best for you.
          </p>
          <button
            type="button"
            className="px-8 py-4 bg-white text-red-900 rounded-lg font-bold text-xl hover:bg-white/90 transition"
          >
            View Calendar & Book Now
          </button>
        </div>
      </section>

      {/* Substack Section */}
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

      {/* Research Section */}
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
                Exploring how game-based learning improves student engagement
                and retention.
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
                Analyzing how technology transforms classroom dynamics and
                student involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
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
                <p className="text-white/90 mb-4">
                  Fun learning tools and games
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

      {/* Contact Section */}
      <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-8 py-16 max-w-4xl">
          <h2 className="text-6xl font-bold text-white mb-8 text-center max-[1000px]:text-4xl">
            Get In Touch
          </h2>
          <p className="text-white/90 text-xl mb-12 text-center max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-indigo-900 rounded-lg font-bold text-xl hover:bg-white/90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </ScrollSlider>
  );
}
