"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  BarChart2,
  ArrowUp,
  Heart,
  Mail,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-purple-100/50 dark:bg-[#070310] border-t border-purple-200 dark:border-purple-900/60 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white flex items-center justify-center shadow-md">
                <BarChart2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-purple-900/70 dark:text-purple-300/70 max-w-sm">
              {PERSONAL_INFO.role} — Turning complex datasets into actionable business decisions, predictive models, and executive BI dashboards.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-semibold text-purple-900 dark:text-purple-300">
            <a href="#hero" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Overview
            </a>
            <a href="#sandbox" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Live Sandbox
            </a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#codelab" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Code Lab
            </a>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Social & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-md transition-all active:scale-95"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-200 dark:border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-700 dark:text-purple-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Analytics Infrastructure: 100% Operational</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-200 font-medium text-[11px]">
              <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              <span>Developed &amp; Designed by <strong className="font-bold text-purple-700 dark:text-purple-300">Santhosh Raj K</strong></span>
            </div>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
