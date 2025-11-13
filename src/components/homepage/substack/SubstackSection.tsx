import Script from "next/script";

type Props = { sectionIndex?: number };

export default function SubstackSection({ sectionIndex }: Props) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="flex items-center justify-center min-h-screen py-40 bg-black relative"
    >
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl px-6">
        <h2 className="text-xl text-white mb-6">Latest from Substack</h2>

        {/* 🔥 POSTER RPG */}
        <div className="relative mx-auto w-full aspect-[2/3] max-w-[480px]">
          {/* Poster medieval */}
          <div
            className="absolute inset-0 bg-center bg-contain bg-no-repeat drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)]"
            style={{ backgroundImage: "url('/poster1.png')" }}
          />

          {/* Conteúdo do Substack dentro do poster */}
          <div className="absolute inset-0 flex items-center justify-center px-6 pt-10 pb-12">
            <div className="w-full text-white text-center">
              <p className="text-sm mb-3 leading-snug">
                Teacher-Gamer — Summer Starts with a Michael Franti interview by Zachary Reznichek
              </p>

              <a
                data-post-link
                href="https://zacharyreznichek.substack.com/p/teacher-gamer-summer-starts-with"
                className="text-yellow-300 hover:text-yellow-200 transition-colors underline text-sm font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Read on Substack
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

      <Script src="https://substack.com/embedjs/embed.js" />
    </section>
  );
}
