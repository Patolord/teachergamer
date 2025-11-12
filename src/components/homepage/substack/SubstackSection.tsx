import Script from "next/script";

type Props = { sectionIndex?: number };

export default function SubstackSection({ sectionIndex }: Props) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="flex items-center justify-center min-h-screen py-40 bg-black relative"
    >
      {/* Top horizontal transition element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />

      <div className="w-full max-w-2xl p-4 text-white relative z-10">
        <h2 className="text-xl mb-4">Latest from Substack</h2>

        <div className="substack-post-embed">
          <p className="mb-2">
            Teacher-Gamer — Summer Starts with a Michael Franti interview by Zachary Reznichek
          </p>
          <a
            data-post-link
            href="https://zacharyreznichek.substack.com/p/teacher-gamer-summer-starts-with"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Read on Substack
          </a>
        </div>

        
      </div>

      {/* Bottom horizontal transition element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />

      <Script src="https://substack.com/embedjs/embed.js" />
    </section>
  );
}
