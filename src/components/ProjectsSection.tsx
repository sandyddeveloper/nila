"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Database,
  BarChart2,
  Search,
  Filter,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Python & ML",
    "SQL & Warehousing",
    "Power BI & Tableau",
    "A/B Testing & Stats",
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Featured Case Studies & Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Data Analytics & BI Portfolio
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Production-grade data pipelines, machine learning models, and executive business intelligence dashboards built to solve high-stakes business challenges.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-purple-100/70 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-102"
                    : "text-purple-950/80 dark:text-purple-200 hover:text-purple-600 dark:hover:text-white hover:bg-purple-200/50 dark:hover:bg-purple-900/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tool, tech, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-950/40 text-purple-950 dark:text-white placeholder:text-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glass-card rounded-3xl p-6 border border-purple-200 dark:border-purple-800/70 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-500/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Header Pills */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {project.category}
                  </span>

                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {project.impactMetric}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div>
                  <h3 className="text-base font-extrabold text-purple-950 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-purple-900/70 dark:text-purple-300/80 mt-2 line-clamp-3 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Dataset metadata pill */}
                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/40 text-[11px] text-purple-900 dark:text-purple-200 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1.5">
                    <Database className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    {project.dataset.records}
                  </span>
                  <span className="text-purple-600 dark:text-purple-400 text-[10px]">
                    {project.dataset.source.split(" ")[0]}
                  </span>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-purple-100/60 dark:bg-purple-900/40 text-purple-900 dark:text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] text-purple-500 dark:text-purple-400">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Action Link */}
              <div className="pt-5 mt-5 border-t border-purple-100 dark:border-purple-900/50 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                <span>View Full Deep Dive & Code</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-3xl border border-purple-200 dark:border-purple-800">
            <p className="text-sm text-purple-900 dark:text-purple-300">
              No projects found matching your search. Try resetting filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
