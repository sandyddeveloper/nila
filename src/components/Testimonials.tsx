"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/portfolioData";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MessageSquareQuote,
} from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <MessageSquareQuote className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Stakeholder Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            What Leaders Say About INDHU S
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Direct feedback from Product VPs, Engineering Directors, and Analytics Leads on strategic business impact.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-200 dark:border-purple-800/80 shadow-2xl purple-glow relative overflow-hidden">
            {/* Big quote icon watermark */}
            <Quote className="w-28 h-28 text-purple-200/50 dark:text-purple-900/30 absolute -top-4 -right-4 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <blockquote className="text-base sm:text-xl font-medium text-purple-950 dark:text-white leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-purple-100 dark:border-purple-900/50">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg text-white shadow-md"
                    style={{ backgroundColor: current.avatarColor }}
                  >
                    {current.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-purple-950 dark:text-white">
                      {current.author}
                    </h4>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      {current.role}
                    </p>
                    <p className="text-[11px] text-purple-500/80 dark:text-purple-400/70">
                      {current.company}
                    </p>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold px-2">
                    {currentIndex + 1} / {TESTIMONIALS.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
