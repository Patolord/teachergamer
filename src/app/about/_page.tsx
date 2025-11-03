export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            The Teacher-Gamer Certification Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Using Role-Playing Games & World-Building to Transform Education
          </p>
        </div>
      </section>

      {/* Main Message */}
      <section className="px-4 py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-100 leading-relaxed">
            Teacher Gamer complements progressive learning environments—uniting
            emotional depth, life-skills learning, and story-driven play into
            one transformative discipline.
          </p>
        </div>
      </section>

      {/* Why Become a Teacher-Gamer */}
      <section className="px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            🌟 Why Become a Teacher-Gamer?
          </h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            Transform student-teacher relationships through immersive
            storytelling, collaborative play, and 36 life skills that foster
            adult readiness, emotional intelligence, and creative agency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                ✅ Screen-free, Deeply Engaging
              </h3>
              <p className="text-gray-300">
                Although devices can be tools to expand ideas, this is ideally a
                tabletop and device-free learning experience that brings people
                together in meaningful ways.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">
                ✅ Builds Trust & Resilience
              </h3>
              <p className="text-gray-300">
                Fosters identity, trust, and resilience through collaborative
                storytelling and shared challenges.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-pink-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">
                ✅ Integrates SEL, PBL & Literacy
              </h3>
              <p className="text-gray-300">
                Seamlessly combines Social-Emotional Learning, Project-Based
                Learning, and academic literacy.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                ✅ Supports Ages 11+
              </h3>
              <p className="text-gray-300">
                Designed for learners aged 11 and up, adaptable to middle
                schools, high schools, homeschools, and international hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            🧭 What Is It?
          </h2>
          <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-lg border border-gray-700">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A multi-level certification program that trains educators to use
              tabletop role-playing games (RPGs) as a framework for teaching,
              mentoring, and world-building in schools.
            </p>

            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▪</span>
                <span>
                  Developed from decades of RPG gameplay, higher education, and
                  mindfulness training
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▪</span>
                <span>
                  Used in middle schools, high schools, homeschools, wilderness
                  programs, and international hubs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▪</span>
                <span>
                  Designed to complement any curriculum and discipline
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="px-4 py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            🧠 Core Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-lg border border-purple-500/50">
              <h3 className="text-2xl font-bold mb-4 text-purple-300">
                The Multiverse as Metaphor
              </h3>
              <p className="text-gray-300">
                RPGs simulate life's complexity—risk, consequence, identity, and
                collaboration—through structured, sober, non-trivial gameplay.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-pink-900/30 p-8 rounded-lg border border-blue-500/50">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">
                Noticing as Praxis
              </h3>
              <p className="text-gray-300">
                Each of the 36 life skills is a lens for noticing: academic,
                kinesthetic, maker-space, and social-emotional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 p-8 rounded-lg border border-pink-500/50">
              <h3 className="text-2xl font-bold mb-4 text-pink-300">
                Oscillating Play
              </h3>
              <p className="text-gray-300">
                In-game and out-game cycles mirror real-world reflection,
                action, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Stand Out */}
      <section className="px-4 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            What Makes Teacher-Gamer Stand Out
          </h2>

          <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-lg border border-gray-700 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Schools, hubs, homeschools and learning centers should take
              responsibility in the social-emotional development of learners.
              There is no better way to develop the depth of Social-Emotional
              Learning (SEL) than through role-playing games.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              This work needs to be conducted by a responsible person who
              understands learners' emotional growth as individuals and as
              collaborators. Trained Teacher-Gamers can ensure safety and safe
              spaces while delivering a world-building experience as learners
              explore the multiverse—our multilayered world of metaphors,
              stories and relationships.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-10 rounded-lg border border-purple-500/50">
            <h3 className="text-2xl font-bold mb-6 text-purple-300">
              Multiverse-Thinking
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Instead of leaving certain story lines, personality types, and
              forms of expression on the fringes, multiverse-thinking allows us
              to critically dissect narratives and metaphors. It establishes the
              opportunity for learners to explore their subconscious minds as
              they navigate society's opportunities, risks, challenges, and
              demands. We take responsibility for the social-emotional
              well-being of learners—once and for all—in our educational
              curricula and practicum.
            </p>
          </div>
        </div>
      </section>

      {/* In Your Own Words */}
      <section className="px-4 py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            In Your Own Words
          </h2>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-10 rounded-lg border border-gray-600">
            <p className="text-xl text-gray-200 leading-relaxed italic">
              "A story-rich, collaborative experience where learners build life
              skills through role-playing games (like Dungeons & Dragons). Each
              participant creates a character and joins a team to co-author an
              epic adventure—learning empathy, resilience, strategic thinking,
              and communication along the way."
            </p>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="px-4 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            Our Values
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-purple-400">Empathetic</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-blue-400">Bold</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-pink-400">Innovative</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <p className="text-2xl font-bold text-green-400">Authentic</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join educators worldwide who are revolutionizing learning through
            the power of role-playing games.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/schedule"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
            >
              Book a Session
            </a>
            <a
              href="#programs"
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-600 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
