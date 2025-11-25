"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Maison Élégante catered our wedding reception and it was absolutely spectacular. Every dish was a work of art, and our guests are still raving about the flavors. The attention to detail was impeccable.",
      name: "Sophie Laurent",
      role: "Wedding Client",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 2,
      quote: "As a restaurant owner, I thought I knew fine dining. But the private chef experience from Maison Élégante opened my eyes to a whole new level of culinary excellence. Simply extraordinary.",
      name: "Jean-Marc Dubois",
      role: "Restaurateur",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      id: 3,
      quote: "Their wine pairing expertise is unmatched. Every course was perfectly complemented, creating a symphony of flavors. Maison Élégante turned our anniversary into an unforgettable gastronomic journey.",
      name: "Isabelle Moreau",
      role: "Private Event Client",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">Client Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Savored Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what our discerning clients say about their culinary journey
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all text-gray-700 border border-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all text-gray-700 border border-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel - Center Card Larger with Prominent Avatar */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-10 md:p-16 text-center border border-gray-100">
              {/* Large Prominent Avatar at Top */}
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative Quote Icon */}
                  <div className="absolute -bottom-2 -right-2 bg-amber-600 rounded-full p-3 shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Large Star Rating */}
              <div className="flex gap-2 justify-center mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="min-h-[240px] flex flex-col justify-center">
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium italic mb-10 leading-relaxed max-w-3xl mx-auto">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                <div className="text-center">
                  <div className="font-bold text-gray-900 text-2xl mb-2">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-amber-600 font-medium text-lg">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Side Preview Cards - Subtle Peek */}
            <div className="hidden lg:block">
              {/* Left Preview */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 w-20 opacity-30 pointer-events-none">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mx-auto mb-3">
                    <Image 
                      src={testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].avatar} 
                      alt="Previous testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Preview */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 w-20 opacity-30 pointer-events-none">
                <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 mx-auto mb-3">
                    <Image 
                      src={testimonials[(activeIndex + 1) % testimonials.length].avatar} 
                      alt="Next testimonial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all rounded-full ${
                  index === activeIndex 
                    ? 'bg-amber-600 w-12 h-3' 
                    : 'bg-gray-300 hover:bg-amber-400 w-3 h-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Trusted by Connoisseurs</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600 text-sm">Events Catered</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">5.0</div>
              <div className="text-gray-600 text-sm">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </button>);
};

export default Testimonials;
