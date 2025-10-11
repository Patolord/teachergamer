"use client";

interface TestimonialsSectionProps {
  id: string;
  backgroundImage: string;
  foregroundImage: string;
  title: string;
}

const testimonials = [
  {
    id: 1,
    name: "Jennifer Walker",
    role: "Middle School Teacher",
    content: "My students' communication and teamwork skills have grown tremendously. Watching them collaborate to solve problems and support each other's characters has been incredible!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thompson",
    role: "Parent & Educator",
    content: "This approach helped my shy daughter find her voice. Through her character, she learned to express herself confidently and build genuine connections with her peers.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Sarah Chen",
    role: "School Counselor",
    content: "The empathy and emotional intelligence my students develop through these adventures is remarkable. It's experiential learning at its finest.",
    rating: 5,
  },
];

export default function TestimonialsSection({
  id,
  backgroundImage,
  foregroundImage,
  title,
}: TestimonialsSectionProps) {
  return (
    <div
      id={id}
      className="h-screen w-full relative overflow-hidden"
    >
      {/* Background image container - Full width */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="absolute w-full h-[160%] object-cover"
          data-speed="auto"
          style={{ top: 0, left: 0 }}
        />
      </div>

      {/* Foreground image container - Full width */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={foregroundImage}
          alt=""
          className="absolute w-full h-[160%] object-cover"
          data-speed="auto"
          style={{ bottom: 0, left: 0 }}
        />
      </div>

      {/* Content - Centered in right area accounting for sidebar */}
      <div className="absolute inset-0 flex items-center justify-center lg:pl-[240px]">
        <div className="w-full max-w-6xl mx-auto px-4 py-16 relative z-10">
          {/* Title */}
          <h2 className="text-6xl font-bold text-white text-center mb-12 drop-shadow-lg">
            {title}
          </h2>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={`${testimonial.id}-star-${i}`}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      aria-label="Star rating"
                    >
                      <title>Star</title>
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-white text-sm mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

