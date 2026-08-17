"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import {
  Code,
  BarChart3,
  Database,
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const iconMap: Record<string, any> = {
    Code: Code,
    BarChart3: BarChart3,
    Database: Database,
    BrainCircuit: BrainCircuit,
  };

  const displayedCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Technical Mastery & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Data Analytics Skills Matrix
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            A comprehensive overview of programming languages, statistical frameworks, BI platforms, and cloud data warehouses utilized in production environments.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === "All"
                ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                : "glass-card text-purple-950 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/40"
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.category
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                  : "glass-card text-purple-950 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/40"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Layers;
            return (
              <div
                key={cat.category}
                className="glass-card rounded-3xl p-6 sm:p-7 border border-purple-200 dark:border-purple-800/70 shadow-xl purple-glow space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-purple-100 dark:border-purple-900/50">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-purple-950 dark:text-white">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-purple-600 dark:text-purple-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-purple-950 dark:text-white flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block" />
                          )}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300">
                            {skill.experience}
                          </span>
                          <span className="font-mono font-bold text-purple-700 dark:text-purple-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-purple-100 dark:bg-purple-950 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
