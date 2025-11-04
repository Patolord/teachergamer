"use client";

import EletricCard from "./EletricCard";

export default function CoursesSection() {
  const courses = [
    {
      title: "Beginner Course",
      description: "Start your learning journey with our comprehensive program",
      color: "#7df9ff",
    },
    {
      title: "Intermediate Course",
      description: "Build on your foundation with advanced concepts",
      color: "#ff6b9d",
    },
    {
      title: "Advanced Course",
      description: "Master advanced techniques and strategies",
      color: "#ffd700",
    },
  ];

  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-8 py-16 max-w-7xl">
        <h2 className="text-6xl font-bold text-white mb-12 text-center max-[1000px]:text-4xl">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <EletricCard
              key={course.title}
              title={course.title}
              description={course.description}
              color={course.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
