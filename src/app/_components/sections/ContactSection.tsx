interface ContactSectionProps {
  sectionIndex?: number;
}

export default function ContactSection({ sectionIndex }: ContactSectionProps) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"
    >
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
  );
}
