interface ResearchSectionProps {
  sectionIndex?: number;
}

export default function ResearchSection({
  sectionIndex,
}: ResearchSectionProps) {
  const articles = [
    {
      title: "Multiverse - Role-Playing Games as an Educational Discipline",
      authors: "Reznichek, Z.",
      journal: "Academia Letters",
      year: "2021",
      views: "7,228 Views",
      abstract:
        "The idea that when you play role-playing games (RPGs): you submerge yourself 'in-game' to adventure, explore, and problem-solve through experimentation, puts your imagination, sense of self, and morality to the test. This paper explores RPGs as a distinct educational discipline that fosters critical thinking, creativity, and collaborative learning.",
      link: "https://www.academia.edu/",
    },
    {
      title: "What is 'Authentic Education'?",
      authors: "Reznichek, Z.",
      journal: "Academia Letters",
      year: "2021",
      views: "24,241 Views • Top 4%",
      abstract:
        "The simple response would include that an 'authentic education' is designed to guide students to develop their unique talents and abilities, rather than forcing them to conform to standardized measures. This paper examines the philosophical foundations of authentic education and its implications for modern pedagogy.",
      link: "https://www.academia.edu/",
    },
    {
      title: "Converging Approaches is the Future of Education",
      authors: "Reznichek, Z. & Taiwo, O.",
      journal: "Academia.edu",
      year: "2021",
      views: "194 Views",
      abstract:
        "Current education systems were invented over a hundred years ago to meet the needs of the industrial revolution. This paper argues that the future of education lies in converging multiple pedagogical approaches to meet the diverse needs of 21st-century learners, emphasizing personalization, interdisciplinary learning, and real-world application.",
      link: "https://www.academia.edu/",
    },
    {
      title:
        "Self-Determination Theory and the Case Against Extrinsic Goals in Education",
      authors: "Reznichek, Z.",
      journal: "Academia.edu",
      year: "2021",
      views: "177 Views",
      abstract:
        "By the end of the 20th century, concerns over students' dependency, self-doubt, demotivation, and anxiety had reached critical levels. This paper examines Self-Determination Theory and argues against the overuse of extrinsic motivators in educational settings, advocating for intrinsic motivation through autonomy, competence, and relatedness.",
      link: "https://www.academia.edu/",
    },
    {
      title: "Start The Writing Journey",
      authors: "Reznichek, Z. & Jennings, K.",
      journal: "Academia.edu",
      year: "2025",
      views: "120 Views",
      abstract:
        "Education is not only about major milestones, like graduations and certifications, but also about the journey of continuous learning and growth. This paper explores pedagogical approaches to help students begin their writing journey with confidence, creativity, and authentic voice.",
      link: "https://www.academia.edu/",
    },
    {
      title:
        "As if Authenticity Matters: The Fall of Contemplation and The Rise of The Social Realm",
      authors: "Reznichek, Z.",
      journal: "Education Thesis",
      year: "2010",
      views: "3 Views",
      abstract:
        "As a corrupted byproduct of socioeconomic politics, curriculum philosophy is unsuitable to solve educational challenges. This defended thesis examines the decline of contemplative practices in education and the emergence of social constructivism as the dominant educational paradigm, questioning whether authenticity still matters in modern pedagogy.",
      link: "https://www.academia.edu/",
    },
  ];

  return (
    <section
      data-scroll-section={sectionIndex}
      className="relative w-full flex items-center justify-center bg-black py-30"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/0_0.jpeg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 bg-[linear-gradient(135deg,#fff_0%,#c47020_20%,#d09a11_40%,#fff_100%)] bg-[length:200%_200%] bg-clip-text text-transparent text-center inline-block whitespace-nowrap animate-gradientShift">
            Research & Publications
          </h2>
          <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
            Evidence-based research supporting the Teacher-Gamer methodology
          </p>
        </div>

        <div className="space-y-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:bg-white/15"
            >
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                {article.title}
              </h3>

              <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                <span className="text-yellow-400 font-medium">
                  {article.authors}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 italic">{article.journal}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/70">{article.year}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/60">{article.views}</span>
              </div>

              <p className="text-white/90 leading-relaxed mb-4 font-light">
                {article.abstract}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
                >
                  <span>Read on Academia.edu</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <title>Read on Academia.edu</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
    </section>
  );
}
