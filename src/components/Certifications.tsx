"use client";

import React, { useState } from "react";
import { CERTIFICATIONS, Certification } from "@/data/portfolioData";
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Calendar,
  Maximize2,
  X,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative bg-purple-50/40 dark:bg-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Award className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Licenses & Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Official technical credentials validating domain proficiency in SQL, Python data structures & analytics, and frontend web development.
          </p>
        </div>

        {/* Certifications Grid (4 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.credentialId}
              className="glass-card rounded-3xl p-5 border border-purple-200 dark:border-purple-800/70 shadow-lg hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-4 group bg-white/80 dark:bg-[#120a26]/80"
            >
              <div className="space-y-3.5">
                {/* Certificate Image Preview Card */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative w-full h-44 rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-800/60 bg-purple-100/50 dark:bg-purple-950/50 cursor-pointer group/img"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.name} Certificate`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Overlay Hover Button */}
                  <div className="absolute inset-0 bg-purple-950/50 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white text-xs font-bold backdrop-blur-xs">
                    <Maximize2 className="w-4 h-4" />
                    <span>View Certificate</span>
                  </div>

                  {/* Issuer Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/90 dark:bg-[#120a26]/90 text-purple-950 dark:text-purple-200 shadow-md backdrop-blur-sm border border-purple-200/50 dark:border-purple-800/50">
                    {cert.issuer}
                  </div>
                </div>

                {/* Info Block */}
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] text-purple-600 dark:text-purple-400 font-semibold mb-1">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Verified
                    </span>
                    <span className="flex items-center gap-1 text-purple-500 dark:text-purple-400">
                      <Calendar className="w-3 h-3" />
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold text-purple-950 dark:text-white leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-[11px] font-mono text-purple-600 dark:text-purple-300 mt-1 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md inline-block">
                    ID: {cert.credentialId}
                  </p>
                </div>

                {/* Verified Skills */}
                <div className="space-y-1 pt-2 border-t border-purple-100 dark:border-purple-900/40">
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-purple-100/70 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 text-[10px] font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between text-xs font-bold">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center gap-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Issuer</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white dark:bg-[#120a26] rounded-3xl border border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-5 bg-purple-100/70 dark:bg-purple-950/90 border-b border-purple-200 dark:border-purple-800/60 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-purple-950 dark:text-white">
                    {selectedCert.name}
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-300">
                    Issued by {selectedCert.issuer} • ID: {selectedCert.credentialId}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open Full Image</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-900/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Certificate Image View */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-purple-50/50 dark:bg-purple-950/30 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-h-[65vh] w-auto object-contain rounded-2xl shadow-xl border border-purple-200 dark:border-purple-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
