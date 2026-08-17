"use client";

import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  BarChart2,
  FileText,
  Menu,
  X,
  Sparkles,
  Send,
  Code,
  Layers,
  FolderGit2,
  Briefcase,
} from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "sandbox", "projects", "skills", "codelab", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#hero", id: "hero" },
    { name: "Live Sandbox", href: "#sandbox", id: "sandbox", badge: "Live" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Code Lab", href: "#codelab", id: "codelab" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-lg shadow-purple-950/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center text-white shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
              <BarChart2 className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
                  INDHU S
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <p className="text-[11px] font-medium text-purple-600 dark:text-purple-300/80 tracking-wide uppercase">
                Data Analyst & BI
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-purple-600 text-white shadow-sm shadow-purple-600/40"
                      : "text-purple-950/80 dark:text-purple-200 hover:text-purple-600 dark:hover:text-white hover:bg-purple-100/60 dark:hover:bg-purple-900/40"
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-amber-400 text-purple-950 animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume + ThemeToggle + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-purple-900/30 text-purple-700 dark:text-purple-200 border border-purple-300 dark:border-purple-700/60 hover:bg-purple-50 dark:hover:bg-purple-800/50 transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md shadow-purple-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/80 dark:bg-purple-950/50 text-purple-900 dark:text-purple-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-card border border-purple-200 dark:border-purple-800/60 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium flex items-center justify-between ${
                    activeSection === link.id
                      ? "bg-purple-600 text-white font-semibold"
                      : "text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-amber-400 text-purple-950">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-purple-200 dark:border-purple-800/40 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 border border-purple-300 dark:border-purple-750 text-purple-800 dark:text-purple-200 bg-purple-50 dark:bg-purple-900/30"
                >
                  <FileText className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  View & Download Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-purple-600 text-white text-center shadow-md shadow-purple-600/30"
                >
                  <Send className="w-4 h-4" />
                  Contact INDHU S
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
