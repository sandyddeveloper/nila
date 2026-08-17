"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Calendar,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Full-Time Role",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti in purple and gold
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#9333ea", "#c084fc", "#e879f9", "#fbbf24", "#ffffff"],
        });
      } catch (e) {
        // ignore
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Let&apos;s Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Get in Touch with INDHU S
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Interested in hiring a Senior Data Analyst or exploring business intelligence consulting? Send a message and let&apos;s discuss how data can power your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800/70 shadow-xl purple-glow space-y-6">
              <div>
                <h3 className="text-lg font-extrabold text-purple-950 dark:text-white">
                  Direct Contact Details
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                  Prompt responses within 12-24 hours
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/50 text-purple-950 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-purple-600 dark:text-purple-400 uppercase font-bold">
                      Email Address
                    </div>
                    <div className="font-semibold">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/50 text-purple-950 dark:text-purple-200">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-purple-600 dark:text-purple-400 uppercase font-bold">
                      Phone
                    </div>
                    <div className="font-semibold">{PERSONAL_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/50 text-purple-950 dark:text-purple-200">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-purple-600 dark:text-purple-400 uppercase font-bold">
                      Location
                    </div>
                    <div className="font-semibold">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/50 space-y-3">
                <div className="text-xs font-bold text-purple-950 dark:text-white uppercase tracking-wider">
                  Professional Profiles
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all flex items-center gap-1.5"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-purple-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/60 border border-purple-200 dark:border-purple-800 text-xs font-bold text-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-200 dark:border-purple-800/70 shadow-xl purple-glow">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-purple-950 dark:text-white">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-purple-900/80 dark:text-purple-200/80 max-w-md mx-auto">
                    Thank you for reaching out, <strong>{formData.name}</strong>. INDHU S will review your message and reply via <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "Full-Time Role",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-purple-950 dark:text-purple-200">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-950/40 text-xs text-purple-950 dark:text-white placeholder:text-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-purple-950 dark:text-purple-200">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-950/40 text-xs text-purple-950 dark:text-white placeholder:text-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-purple-950 dark:text-purple-200">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Analytics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-950/40 text-xs text-purple-950 dark:text-white placeholder:text-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-purple-950 dark:text-purple-200">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/40 text-xs text-purple-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option className="bg-white text-purple-950 dark:bg-[#120a26] dark:text-white" value="Full-Time Role">Full-Time Senior Data Analyst Role</option>
                        <option className="bg-white text-purple-950 dark:bg-[#120a26] dark:text-white" value="Consulting Project">BI / Analytics Consulting Project</option>
                        <option className="bg-white text-purple-950 dark:bg-[#120a26] dark:text-white" value="Dashboard Design">Power BI / Tableau Dashboard Build</option>
                        <option className="bg-white text-purple-950 dark:bg-[#120a26] dark:text-white" value="A/B Testing Strategy">A/B Testing & Stats Advisory</option>
                        <option className="bg-white text-purple-950 dark:bg-[#120a26] dark:text-white" value="Other">General Networking</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-950 dark:text-purple-200">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your analytics needs, goals, or role requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-purple-950/40 text-xs text-purple-950 dark:text-white placeholder:text-purple-400/60 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-spin" : ""}`} />
                    <span>{isSubmitting ? "Submitting Message..." : "Submit Inquiry to INDHU S"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
