import Script from "next/script";

type Props = { sectionIndex?: number };

export default function SubstackSection({ sectionIndex }: Props) {
  return (
    <section
      data-scroll-section={sectionIndex}
      className="flex items-center justify-center h-screen bg-black"
    >
      <div className="w-full max-w-2xl p-4 text-white">
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

      <Script src="https://substack.com/embedjs/embed.js" />
    </section>
  );
}
