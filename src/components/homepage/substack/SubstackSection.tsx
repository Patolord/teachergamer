import Link from "next/link";

type Props = { sectionIndex?: number };

export default function SubstackSection({ sectionIndex }: Props) {
  const post = {
    title:
      "Teacher-Gamer - Summer Starts with a Michael Franti interview by Zachary Reznichek TeacherGamer",
    description:
      "New Pod featuring Michael Franti - New Da Vinci Life Skills Website - Building an RPG Hub in your Community - TG Trainings coming Sept 8 - Fun Offline with Brazil's RPG Dojo",
    link: "https://zacharyreznichek.substack.com/p/teacher-gamer-summer-starts-with",
  };

  return (
    <section
      data-scroll-section={sectionIndex}
      className="flex justify-center min-h-screen pt-24 pb-40 bg-black relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/poster1.png')] brightness-120" />

      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none z-10" />

      {/* Content centered horizontally, starting from top */}
      <div className="relative z-10 w-full max-w-2xl px-8 md:px-12">
        <h2 className="text-4xl pb-6">Latest from Substack</h2>

        <Link
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <h3 className="text-xl pb-6">{post.title}</h3>

          <p className="">{post.description}</p>

          <div className="">
            <span>Read on Substack</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 z-10" />
    </section>
  );
}
