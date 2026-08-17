"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DataSandbox } from "@/components/DataSandbox";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CodeLab } from "@/components/CodeLab";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { ValueCalculator } from "@/components/ValueCalculator";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";

export default function HomePage() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen selection:bg-purple-500 selection:text-white bg-white dark:bg-[#090514] text-purple-950 dark:text-purple-50 transition-colors duration-300">
      {/* Dynamic Animated Data Particle Canvas */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Overview */}
      <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Live Data Sandbox Simulator */}
      <DataSandbox />

      {/* Featured Projects Showcase with Deep-Dive Modals */}
      <ProjectsSection />

      {/* Interactive SQL & Python Code Lab */}
      <CodeLab />

      {/* Technical Skills & Tooling Matrix */}
      <SkillsMatrix />

      {/* ROI & Business Value Calculator */}
      <ValueCalculator />

      {/* Career Experience & Education Timeline */}
      <ExperienceTimeline />

      {/* Verified Professional Certifications */}
      <Certifications />

      {/* Stakeholder Testimonials */}
      <Testimonials />

      {/* Contact & Collaboration Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Formatted Resume & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
