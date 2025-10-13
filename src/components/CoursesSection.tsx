"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CoursesSectionProps {
  sectionNumber: number;
}

const SECTION_DATA = {
  id: "section-2",
  title: "COURSES",
};

const courses = [
  {
    id: 1,
    title: "Beginner Adventures",
    description: "Perfect for first-time adventurers. Learn the basics of storytelling, character development, and collaborative problem-solving.",
    diceImage: "/dice-green.png",
  },
  {
    id: 2,
    title: "Hero's Journey",
    description: "Dive deeper into epic narratives. Build resilience, strategic thinking, and leadership skills through challenging quests.",
    diceImage: "/dice-blue.png",
  },
  {
    id: 3,
    title: "Advanced Campaigns",
    description: "Master complex storytelling and emotional intelligence. Explore moral dilemmas and develop empathy through intricate character arcs.",
    diceImage: "/dice-purple.png",
  },
  {
    id: 4,
    title: "Educator Training",
    description: "Learn to facilitate your own tabletop adventures. Complete guide to running life-skill building sessions for your students or children.",
    diceImage: "/dice-yellow.png",
  },
];

export default function CoursesSection({
  sectionNumber: _sectionNumber,
}: CoursesSectionProps) {
  const { id, title } = SECTION_DATA;
  const handleBookNow = (courseTitle: string) => {
    console.log(`Booking: ${courseTitle}`);
    // Add your booking logic here
    // window.location.href = `/booking?course=${courseTitle}`;
  };

  return (
    <div
      id={id}
      className="min-h-screen w-full relative overflow-hidden"
    >
      {/* Background - Full width with medieval paper texture */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/texture-paper.png)',
          backgroundRepeat: 'repeat',
          filter: 'saturate(0.7)'
        }}
      />

      {/* Content - Centered in right area accounting for sidebar */}
      <div className="absolute inset-0 flex items-center justify-center lg:pl-[240px]">
        <div className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
          {/* Title */}
          <h2 className="text-6xl font-bold text-amber-900 text-center mb-12 drop-shadow-lg">
            {title}
          </h2>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-amber-50/80 backdrop-blur-md rounded-xl p-6 border border-amber-800/30 hover:border-amber-800/50 transition-all duration-300 hover:scale-[1.02] group shadow-lg flex flex-col"
              >
                {/* Dice Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24">
                    <Image
                      src={course.diceImage}
                      alt={`${course.title} dice`}
                      fill
                      className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Course Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-amber-900 text-center">
                    {course.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-amber-900 text-sm mb-6 leading-relaxed flex-grow">
                  {course.description}
                </p>

                {/* Book Now Button - Anchored at bottom */}
                <Button
                  onClick={() => handleBookNow(course.title)}
                  className="w-full bg-gradient-to-r from-amber-800 to-orange-800 hover:from-amber-900 hover:to-orange-900 text-amber-50 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Book Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

