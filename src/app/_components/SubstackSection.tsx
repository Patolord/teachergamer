import Script from "next/script";

export default function SubstackSection() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-8 max-w-4xl">
        <h2 className="text-5xl font-semibold text-white mb-12 text-center max-[1000px]:text-3xl tracking-tight">
          Latest from Substack
        </h2>

        <div className="substack-post-embed">
          <p lang="en">
            Teacher-Gamer - Summer Starts with a Michael Franti interview by
            Zachary Reznichek TeacherGamer
          </p>
          <p>
            New Pod featuring Michael Franti - New Da Vinci Life Skills Website
            - Building an RPG Hub in your Community - TG Trainings coming Sept 8
            - Fun Offline with Brazil's RPG Dojo
          </p>
          <a
            data-post-link
            href="https://zacharyreznichek.substack.com/p/teacher-gamer-summer-starts-with"
          >
            Read on Substack
          </a>
        </div>
      </div>
      <Script async src="https://substack.com/embedjs/embed.js" />
    </section>
  );
}
