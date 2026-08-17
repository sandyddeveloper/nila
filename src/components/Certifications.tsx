"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import {
  Award,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";

export function Certifications() {
  return (
    <section className="py-20 relative bg-purple-50/40 dark:bg-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Verified Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Formal technical certifications validating domain expertise in Power BI, Cloud Data Analytics, and Statistical Data Science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.credentialId}
              className="glass-card rounded-3xl p-6 border border-purple-200 dark:border-purple-800/70 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-500" />
                    {cert.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-extrabold text-purple-950 dark:text-white leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-[10px] font-mono text-purple-400 dark:text-purple-500 mt-0.5">
                    ID: {cert.credentialId}
                  </p>
                </div>

                {/* Verified Skills */}
                <div className="space-y-1.5 pt-2 border-t border-purple-100 dark:border-purple-900/40">
                  <span className="text-[10px] uppercase font-bold text-purple-800 dark:text-purple-300 tracking-wider">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-purple-100/60 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-3 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
