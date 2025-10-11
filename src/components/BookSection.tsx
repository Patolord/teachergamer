"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface BookSectionProps {
  id: string;
}

export default function BookSection({ id }: BookSectionProps) {
  const bookImage = "/book-cover.png";
  const title = "The Educator's Guide to Tabletop Adventures";
  const description = "Transform your classroom or learning space with story-rich, collaborative role-playing experiences. This comprehensive guide shows you how to use tabletop RPGs to build essential life skills—empathy, resilience, strategic thinking, and communication—through epic adventures your students will never forget. Device-free, imagination-first learning.";
  const price = "$29.99";

  const handleBuyClick = () => {
    // Add your purchase logic here
    console.log("Redirecting to purchase...");
    // window.location.href = "/checkout";
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
      
      {/* Content Container - Centered in right area accounting for sidebar */}
      <div className="absolute inset-0 flex items-center justify-center lg:pl-[240px]">
        <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Book Image */}
            <div className="flex justify-center" data-speed="0.8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-800 to-orange-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                <Image
                  src={bookImage}
                  alt={title}
                  width={400}
                  height={600}
                  className="relative w-full max-w-md h-auto object-contain rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>

            {/* Book Details */}
            <div className="text-amber-950 space-y-6" data-speed="0.9">
              <div>
                <h2 className="text-5xl font-bold mb-4 text-amber-900">
                  {title}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-amber-800 to-orange-800 rounded" />
              </div>

              <p className="text-lg text-amber-900 leading-relaxed">
                {description}
              </p>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-3xl font-bold text-amber-900">
                  {price}
                </div>
                <Button
                  onClick={handleBuyClick}
                  size="lg"
                  className="bg-gradient-to-r from-amber-800 to-orange-800 hover:from-amber-900 hover:to-orange-900 text-amber-50 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  Buy Now
                </Button>
              </div>

              {/* Additional Features/Benefits */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3 text-amber-800">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                    <title>Check mark</title>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Ready-to-Use Adventure Guides</span>
                </div>
                <div className="flex items-center gap-3 text-amber-800">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                    <title>Check mark</title>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Character Creation Templates</span>
                </div>
                <div className="flex items-center gap-3 text-amber-800">
                  <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 20 20" aria-label="Check mark">
                    <title>Check mark</title>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lifetime Community Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

