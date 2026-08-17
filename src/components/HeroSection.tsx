"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Database,
  BarChart3,
  BrainCircuit,
  FileCode2,
  Download,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const heroChartPresets = {
  impact: {
    title: "Quarterly Revenue Optimization & Cost Savings ($k)",
    data: [
      { name: "Q1", value: 340, benchmark: 180 },
      { name: "Q2", value: 580, benchmark: 220 },
      { name: "Q3", value: 920, benchmark: 310 },
      { name: "Q4", value: 1450, benchmark: 420 },
      { name: "Q5", value: 2100, benchmark: 550 },
      { name: "Q6", value: 2950, benchmark: 710 },
    ],
    color: "#9333EA",
    metric: "$4.8M Total ROI",
  },
  accuracy: {
    title: "Production ML Model ROC-AUC Score Progression (%)",
    data: [
      { name: "v1.0", value: 81.2, benchmark: 75.0 },
      { name: "v1.5", value: 86.4, benchmark: 76.2 },
      { name: "v2.0", value: 89.8, benchmark: 78.0 },
      { name: "v2.5", value: 94.2, benchmark: 79.5 },
      { name: "v3.0", value: 97.6, benchmark: 81.0 },
      { name: "v3.2", value: 99.4, benchmark: 82.5 },
    ],
    color: "#C084FC",
    metric: "99.4% Peak Accuracy",
  },
  automation: {
    title: "Cumulative Reporting Hours Saved via ETL Automation (Hrs)",
    data: [
      { name: "M1", value: 45, benchmark: 10 },
      { name: "M3", value: 160, benchmark: 35 },
      { name: "M6", value: 380, benchmark: 80 },
      { name: "M9", value: 680, benchmark: 140 },
      { name: "M12", value: 1050, benchmark: 220 },
      { name: "M18", value: 1680, benchmark: 340 },
    ],
    color: "#E879F9",
    metric: "1,680+ Hours Reclaimed",
  },
};

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<keyof typeof heroChartPresets>("impact");
  const currentChart = heroChartPresets[activeTab];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-data-grid"
    >
      {/* Ambient glowing radial orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/15 dark:bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100/80 dark:bg-purple-950/60 border border-purple-300/80 dark:border-purple-800/80 text-purple-900 dark:text-purple-200 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              <span>Available for Senior Data Analyst & BI Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 ml-0.5" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase">
                Hello, I&apos;m {PERSONAL_INFO.name}
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-purple-950 dark:text-white leading-[1.12]">
                Transforming{" "}
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 dark:from-purple-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
                  Complex Data
                </span>{" "}
                into Actionable Business Intelligence.
              </h1>
            </div>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-purple-900/80 dark:text-purple-200/80 max-w-2xl leading-relaxed">
              Senior Data Analyst specializing in{" "}
              <strong className="font-semibold text-purple-950 dark:text-white">
                SQL Data Warehousing
              </strong>
              ,{" "}
              <strong className="font-semibold text-purple-950 dark:text-white">
                Python Machine Learning
              </strong>
              ,{" "}
              <strong className="font-semibold text-purple-950 dark:text-white">
                Power BI & Tableau
              </strong>
              , and{" "}
              <strong className="font-semibold text-purple-950 dark:text-white">
                Bayesian A/B Experimentation
              </strong>
              . Delivering quantifiable ROI and predictive decision clarity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#sandbox"
                className="px-5 py-3 rounded-xl text-sm font-semibold glass-card text-purple-950 dark:text-purple-100 border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/60 transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Live Interactive Sandbox</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl text-sm font-medium text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-purple-500" />
                <span>Resume (CV)</span>
              </button>
            </div>

            {/* Quick Tech Badge Strip */}
            <div className="pt-4 border-t border-purple-200/70 dark:border-purple-900/40 flex flex-wrap items-center gap-2 text-xs text-purple-800 dark:text-purple-300 font-medium">
              <span className="font-semibold text-purple-950 dark:text-purple-100 mr-1 flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Tech Stack:
              </span>
              {["SQL", "Python", "Power BI", "Snowflake", "dbt", "Tableau", "XGBoost", "A/B Testing"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-lg bg-purple-100/70 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/60 text-purple-900 dark:text-purple-200 text-[11px]"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right Column: Interactive Real-Time Analytical Metric Widget */}
          <div className="lg:col-span-5">
            <div className="relative glass-card rounded-3xl p-6 shadow-2xl purple-glow border border-purple-200 dark:border-purple-800/70 transition-all duration-300">
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100 dark:border-purple-900/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-md">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-purple-950 dark:text-white uppercase tracking-wider">
                      Live Portfolio Metrics
                    </h3>
                    <p className="text-[11px] text-purple-600 dark:text-purple-400">
                      Verified Business Impact Analytics
                    </p>
                  </div>
                </div>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300">
                  {currentChart.metric}
                </span>
              </div>

              {/* Tab Selector */}
              <div className="flex p-1 mb-4 rounded-xl bg-purple-100/60 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/40 text-[11px] font-semibold">
                <button
                  onClick={() => setActiveTab("impact")}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTab === "impact"
                      ? "bg-white dark:bg-purple-800 text-purple-900 dark:text-white shadow-sm font-bold"
                      : "text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white"
                  }`}
                >
                  Revenue ROI
                </button>
                <button
                  onClick={() => setActiveTab("accuracy")}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTab === "accuracy"
                      ? "bg-white dark:bg-purple-800 text-purple-900 dark:text-white shadow-sm font-bold"
                      : "text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white"
                  }`}
                >
                  Model Accuracy
                </button>
                <button
                  onClick={() => setActiveTab("automation")}
                  className={`flex-1 py-1.5 rounded-lg transition-all ${
                    activeTab === "automation"
                      ? "bg-white dark:bg-purple-800 text-purple-900 dark:text-white shadow-sm font-bold"
                      : "text-purple-700 dark:text-purple-300 hover:text-purple-950 dark:hover:text-white"
                  }`}
                >
                  Hours Saved
                </button>
              </div>

              <div className="mb-2">
                <p className="text-xs font-semibold text-purple-900 dark:text-purple-200">
                  {currentChart.title}
                </p>
              </div>

              {/* Chart Display */}
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={currentChart.data}
                    margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={currentChart.color} stopOpacity={0.45} />
                        <stop offset="95%" stopColor={currentChart.color} stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      stroke="#8884d8"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#8884d8"
                      tick={{ fill: "#94a3b8", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#180d2b",
                        borderColor: "#9333ea",
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={currentChart.color}
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#purpleGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="benchmark"
                      stroke="#94a3b8"
                      strokeDasharray="3 3"
                      strokeWidth={1.5}
                      fillOpacity={0}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between text-[11px] text-purple-700 dark:text-purple-300/80 pt-3 border-t border-purple-100 dark:border-purple-900/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 inline-block" />
                  INDHU S Analytics Pipeline
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-slate-400 inline-block" />
                  Industry Benchmark
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stat KPI Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {PERSONAL_INFO.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-purple-200 dark:border-purple-800/60 shadow-md hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600 dark:from-purple-300 dark:via-purple-200 dark:to-indigo-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-purple-950 dark:text-white mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-purple-600 dark:text-purple-400/80 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
