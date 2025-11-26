"use client";

import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SecondaryHeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: "hsl(39, 63%, 89%)",
      }}
    >
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                Now enrolling for Fall 2025
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-gray-900">
              A Safe Space for Kids to{" "}
              <span className="text-green-600">Play & Learn</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
              Where education meets adventure in a secure, monitored
              environment. Our platform creates a nurturing space where children
              can explore, create, and grow through game-based learning—all
              while parents and teachers have complete peace of mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <Link
                  href="/home"
                  onClick={() => {
                    setTimeout(() => {
                      const coursesSection = document.querySelector(
                        '[data-scroll-section="3"]',
                      );
                      if (coursesSection) {
                        coursesSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 bg-transparent border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                Watch How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Safe & Inclusive
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Small Groups
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">
                  Trained Game Masters
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden  rounded-4xl bg-muted border-4 border-gray-200 shadow-2xl">
              <Image
                src="/teacher-kids-books.jpg"
                alt="Children learning and playing safely in an educational environment"
                fill
                className="object-cover rounded-4xl transparent"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎲</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">
                    Adventures Led
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">4.9/5</p>
                  <p className="text-sm text-muted-foreground">Parent Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-700 text-sm uppercase tracking-wider">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Scroll down indicator"
            role="img"
          >
            <title>Scroll down</title>
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
