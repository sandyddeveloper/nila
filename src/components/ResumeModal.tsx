"use client";

import React, { useState } from "react";
import { RESUME_DATA } from "@/data/resumeData";
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `${RESUME_DATA.name} - ${RESUME_DATA.title}
Email: ${RESUME_DATA.contact.email} | Phone: ${RESUME_DATA.contact.phone} | Location: ${RESUME_DATA.contact.location}

SUMMARY:
${RESUME_DATA.summary}

EXPERIENCE:
${RESUME_DATA.experience
  .map(
    (e) => `
${e.role} at ${e.company} (${e.period})
${e.bullets.map((b) => `- ${b}`).join("\n")}`
  )
  .join("\n")}

EDUCATION:
${RESUME_DATA.education
  .map((ed) => `${ed.degree} - ${ed.institution} (${ed.period}) - ${ed.grade}`)
  .join("\n")}

CERTIFICATIONS:
${RESUME_DATA.certifications.join("\n")}
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-purple-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#120a26] rounded-3xl border border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-purple-100/70 dark:bg-purple-950/90 border-b border-purple-200 dark:border-purple-800/60 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs sm:text-sm font-bold text-purple-950 dark:text-white">
              Curriculum Vitae • {RESUME_DATA.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-purple-900/60 text-purple-900 dark:text-purple-200 hover:bg-purple-50 transition-colors flex items-center gap-1.5 border border-purple-200 dark:border-purple-800"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied Plain Text" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-purple-700 dark:text-purple-300 hover:bg-purple-200/60 dark:hover:bg-purple-900/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white dark:bg-[#120a26] text-purple-950 dark:text-purple-100 print:text-black print:bg-white">
          {/* Header */}
          <div className="text-center space-y-2 border-b border-purple-200 dark:border-purple-800/60 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-950 dark:text-white uppercase tracking-wider">
              {RESUME_DATA.name}
            </h1>
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
              {RESUME_DATA.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-purple-700 dark:text-purple-300 pt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.location}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1">
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-purple-900/90 dark:text-purple-200/90">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1">
              Technical Skill Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <strong className="text-purple-950 dark:text-white">Languages & SQL:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.languages}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">BI & Visualization:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.biAndViz}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">Data Engineering:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.dataEng}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">Analytics Methods:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.methods}</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Professional Experience
            </h2>

            <div className="space-y-5">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-purple-950 dark:text-white">
                      {exp.role} <span className="text-purple-600 dark:text-purple-400 font-normal">| {exp.company}</span>
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-medium text-xs">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-purple-900/90 dark:text-purple-200/90">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs">
                <div>
                  <div className="font-bold text-purple-950 dark:text-white">
                    {edu.degree}
                  </div>
                  <div className="text-purple-600 dark:text-purple-400">
                    {edu.institution}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-purple-700 dark:text-purple-300 font-medium">
                    {edu.period}
                  </div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">
                    {edu.grade}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              Verified Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-purple-900/90 dark:text-purple-200/90">
              {RESUME_DATA.certifications.map((c, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
