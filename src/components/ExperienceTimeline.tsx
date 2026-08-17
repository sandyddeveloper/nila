"use client";

import React, { useState, useEffect, useRef } from "react";
import { CAREER_EXPERIENCES } from "@/data/portfolioData";
import { RESUME_DATA } from "@/data/resumeData";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Building2,
} from "lucide-react";

export function ExperienceTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = timelineRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is scrolled through
      const totalHeight = rect.height;
      const currentScroll = windowHeight / 2 - rect.top;

      const progress = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Building2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Career Milestones &amp; Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Professional data QA &amp; conversion experience at HTC Global Services, combined with computer applications academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Work Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-lg font-extrabold text-purple-950 dark:text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Professional Experience</span>
            </h3>

            {/* Scroll-Tracked Timeline Line */}
            <div ref={timelineRef} className="relative pl-6 sm:pl-8 space-y-10">
              {/* Background Track Line */}
              <div className="absolute left-[3px] sm:left-[5px] top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900/50" />

              {/* Glowing Active Fill Progress Line */}
              <div
                className="absolute left-[3px] sm:left-[5px] top-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-500 to-indigo-500 shadow-[0_0_10px_#c084fc] transition-all duration-150 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              />

              {CAREER_EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline bullet dot with glowing pulse ring */}
                  <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-[#090514] shadow-md group-hover:scale-125 transition-transform z-10">
                    <span className="animate-ping absolute -inset-1 rounded-full bg-purple-400 opacity-60 group-hover:block" />
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-3xl p-6 sm:p-7 border border-purple-200 dark:border-purple-800/70 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-purple-100 dark:border-purple-900/50">
                      <div>
                        <h4 className="text-base sm:text-lg font-extrabold text-purple-950 dark:text-white">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-purple-800 dark:text-purple-300">
                        <span className="flex items-center gap-1 font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60">
                          <Calendar className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950">
                          <MapPin className="w-3 h-3 text-purple-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-purple-900/80 dark:text-purple-200/80 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-800 dark:text-purple-300">
                        Key Responsibilities &amp; Quality Deliverables
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-purple-950/90 dark:text-purple-100">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-purple-100/70 dark:bg-purple-900/50 border border-purple-200/60 dark:border-purple-800 text-[11px] font-semibold text-purple-900 dark:text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Core Competencies Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Education Card */}
            <div className="glass-card rounded-3xl p-6 border border-purple-200 dark:border-purple-800/70 shadow-lg space-y-4">
              <h3 className="text-base font-extrabold text-purple-950 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b border-purple-100 dark:border-purple-900/40 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-purple-950 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="font-bold text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] text-purple-700 dark:text-purple-400">
                      {edu.period} • {edu.coursework}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Card */}
            <div className="glass-card rounded-3xl p-6 border border-purple-200 dark:border-purple-800/70 shadow-lg space-y-4">
              <h3 className="text-base font-extrabold text-purple-950 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Core Competencies</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {RESUME_DATA.coreCompetencies.map((comp, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800 text-xs font-medium text-purple-900 dark:text-purple-200"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
