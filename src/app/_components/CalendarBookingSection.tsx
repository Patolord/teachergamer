"use client";

import Cal from "@calcom/embed-react";

export default function CalendarBookingSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
      <div className="container mx-auto px-8 py-16 max-w-4xl text-center">
        <h2 className="text-6xl font-bold text-white mb-8 max-[1000px]:text-4xl">
          Book Your Session
        </h2>
        <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto">
          Schedule a personalized learning session with our expert instructors.
          Choose a time that works best for you.
        </p>
        <Cal
          calLink="upcraft-crew/training-session"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
        <button
          type="button"
          className="px-8 py-4 bg-white text-red-900 rounded-lg font-bold text-xl hover:bg-white/90 transition"
        >
          View Calendar & Book Now
        </button>
      </div>
    </section>
  );
}
