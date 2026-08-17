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
  FolderGit2,
  ExternalLink,
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
Location: ${RESUME_DATA.contact.location} | Email: ${RESUME_DATA.contact.email}
LinkedIn: ${RESUME_DATA.contact.linkedin} | GitHub: ${RESUME_DATA.contact.github} | Portfolio: ${RESUME_DATA.contact.portfolio}

PROFESSIONAL SUMMARY:
${RESUME_DATA.summary}

WORK EXPERIENCE:
${RESUME_DATA.experience
  .map(
    (e) => `
${e.role} — ${e.company} (${e.period})
${e.bullets.map((b) => `- ${b}`).join("\n")}`
  )
  .join("\n")}

TECHNICAL SKILLS:
- Programming & Frameworks: ${RESUME_DATA.technicalSkills.programming}
- Data Skills: ${RESUME_DATA.technicalSkills.dataSkills}
- Databases & SQL: ${RESUME_DATA.technicalSkills.databases}
- Data & BI Tools: ${RESUME_DATA.technicalSkills.biTools}
- Version Control: ${RESUME_DATA.technicalSkills.versionControl}

PROJECTS:
${RESUME_DATA.projects
  .map(
    (p) => `
${p.title} (Tools: ${p.tools})
${p.bullets.map((b) => `- ${b}`).join("\n")}`
  )
  .join("\n")}

EDUCATION:
${RESUME_DATA.education
  .map((ed) => `${ed.degree} — ${ed.institution} (${ed.period}) | ${ed.grade}`)
  .join("\n")}

LICENSES & CERTIFICATIONS:
${RESUME_DATA.certifications
  .map((c) => `- ${c.name} — ${c.issuer} (${c.issued} | ID: ${c.id})`)
  .join("\n")}
`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-purple-950/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#120a26] rounded-3xl border border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 bg-purple-100/70 dark:bg-purple-950/90 border-b border-purple-200 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-3 shrink-0">
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

            <a
              href="/my_resume (1).pdf"
              download="Indhu_S_Resume.pdf"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 rounded-xl text-xs font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-900 dark:text-purple-200 hover:bg-purple-200 transition-colors items-center gap-1.5 border border-purple-200 dark:border-purple-800"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
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
            <h1 className="text-2xl sm:text-4xl font-extrabold text-purple-950 dark:text-white uppercase tracking-wider">
              {RESUME_DATA.name}
            </h1>
            <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
              {RESUME_DATA.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-purple-700 dark:text-purple-300 pt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.location}
              </span>
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="flex items-center gap-1 hover:text-purple-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.email}
              </a>
              <a
                href="https://linkedin.com/in/indhu16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.linkedin}
              </a>
              <a
                href="https://github.com/indhu-16/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-purple-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-purple-500" />
                {RESUME_DATA.contact.github}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-purple-900/90 dark:text-purple-200/90">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Work Experience
            </h2>

            <div className="space-y-5">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-purple-950 dark:text-white">
                      {exp.company}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-medium text-xs">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 italic">
                    {exp.role}
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs text-purple-900/90 dark:text-purple-200/90">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2.5">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div>
                <strong className="text-purple-950 dark:text-white">• Programming & Frameworks:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.programming}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">• Data Skills:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.dataSkills}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">• Databases & SQL:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.databases}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">• Data & BI Tools:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.biTools}</span>
              </div>
              <div>
                <strong className="text-purple-950 dark:text-white">• Version Control:</strong>{" "}
                <span className="text-purple-900/80 dark:text-purple-300/80">{RESUME_DATA.technicalSkills.versionControl}</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5" />
              Featured Projects
            </h2>

            <div className="space-y-4">
              {RESUME_DATA.projects.map((proj, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-bold">
                    <span className="text-purple-950 dark:text-white">
                      {proj.title}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-normal text-xs">
                      Tools: {proj.tools}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-purple-900/90 dark:text-purple-200/90">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Licenses & Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800/60 pb-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              Licenses & Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {RESUME_DATA.certifications.map((c, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/50 space-y-1">
                  <div className="font-bold text-purple-950 dark:text-white">
                    {c.name}
                  </div>
                  <div className="text-purple-600 dark:text-purple-400 text-[11px] font-medium">
                    {c.issuer}
                  </div>
                  <div className="text-purple-500 dark:text-purple-400 text-[10px]">
                    {c.issued} | ID: {c.id}
                  </div>
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
            <div className="space-y-3">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs pb-1 border-b border-purple-50 dark:border-purple-950">
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
          </div>
        </div>
      </div>
    </div>
  );
}
