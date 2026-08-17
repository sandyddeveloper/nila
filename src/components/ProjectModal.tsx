"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolioData";
import {
  X,
  Database,
  Code2,
  BarChart3,
  CheckCircle2,
  Copy,
  Check,
  TrendingUp,
  Layers,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "code" | "charts" | "pipeline">("overview");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!project) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderChart = () => {
    const { chartData } = project;
    if (!chartData || !chartData.data) return null;

    if (chartData.type === "area") {
      return (
        <AreaChart data={chartData.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="modalGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={chartData.colors[0] || "#9333EA"} stopOpacity={0.4} />
              <stop offset="95%" stopColor={chartData.colors[0] || "#9333EA"} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <XAxis dataKey={chartData.xKey} stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <YAxis stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#180d2b",
              borderColor: "#9333ea",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          <Legend />
          {chartData.dataKeys.map((key, i) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={chartData.colors[i] || "#9333EA"}
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#modalGrad1)"
            />
          ))}
        </AreaChart>
      );
    }

    if (chartData.type === "bar") {
      return (
        <BarChart data={chartData.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis dataKey={chartData.xKey} stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <YAxis stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#180d2b",
              borderColor: "#9333ea",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          <Legend />
          {chartData.dataKeys.map((key, i) => (
            <Bar
              key={key}
              dataKey={key}
              fill={chartData.colors[i] || "#9333EA"}
              radius={[6, 6, 0, 0]}
            />
          ))}
        </BarChart>
      );
    }

    if (chartData.type === "radar") {
      return (
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData.data}>
          <PolarGrid stroke="#6b21a8" strokeOpacity={0.3} />
          <PolarAngleAxis dataKey={chartData.xKey} tick={{ fill: "#94a3b8", fontSize: 11 }} />
          <PolarRadiusAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#180d2b",
              borderColor: "#9333ea",
              borderRadius: "12px",
              color: "#ffffff",
              fontSize: "12px",
            }}
          />
          <Legend />
          {chartData.dataKeys.map((key, i) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={chartData.colors[i] || "#9333EA"}
              fill={chartData.colors[i] || "#9333EA"}
              fillOpacity={0.4}
            />
          ))}
        </RadarChart>
      );
    }

    // Default line
    return (
      <LineChart data={chartData.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <XAxis dataKey={chartData.xKey} stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <YAxis stroke="#8884d8" tick={{ fill: "#94a3b8", fontSize: 11 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#180d2b",
            borderColor: "#9333ea",
            borderRadius: "12px",
            color: "#ffffff",
            fontSize: "12px",
          }}
        />
        <Legend />
        {chartData.dataKeys.map((key, i) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={chartData.colors[i] || "#9333EA"}
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        ))}
      </LineChart>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-purple-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#120a26] rounded-3xl border border-purple-200 dark:border-purple-800 shadow-2xl overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-purple-50 via-purple-100/50 to-white dark:from-purple-950/80 dark:via-purple-900/40 dark:to-[#120a26] border-b border-purple-200 dark:border-purple-800/60 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600 text-white">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                {project.impactMetric} {project.impactLabel}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-purple-950 dark:text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-purple-900/80 dark:text-purple-300/90 max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="self-end sm:self-auto p-2 rounded-xl border border-purple-200 dark:border-purple-800 bg-white dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="px-6 sm:px-8 border-b border-purple-100 dark:border-purple-900/50 bg-purple-50/50 dark:bg-purple-950/20 flex gap-2 sm:gap-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3.5 px-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "overview"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                : "border-transparent text-purple-900/60 dark:text-purple-300/60 hover:text-purple-900 dark:hover:text-white"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Executive Overview
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={`py-3.5 px-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "code"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                : "border-transparent text-purple-900/60 dark:text-purple-300/60 hover:text-purple-900 dark:hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4" />
            SQL & Python Code
          </button>

          <button
            onClick={() => setActiveTab("charts")}
            className={`py-3.5 px-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "charts"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                : "border-transparent text-purple-900/60 dark:text-purple-300/60 hover:text-purple-900 dark:hover:text-white"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Interactive Analytics
          </button>

          <button
            onClick={() => setActiveTab("pipeline")}
            className={`py-3.5 px-2 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === "pipeline"
                ? "border-purple-600 text-purple-600 dark:text-purple-400 font-bold"
                : "border-transparent text-purple-900/60 dark:text-purple-300/60 hover:text-purple-900 dark:hover:text-white"
            }`}
          >
            <Layers className="w-4 h-4" />
            Dataset & Pipeline
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-2">
                  <h4 className="text-xs font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wider">
                    Business Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-950/90 dark:text-purple-200/90 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/50 space-y-2">
                  <h4 className="text-xs font-bold text-purple-800 dark:text-purple-300 uppercase tracking-wider">
                    Data Methodology & Approach
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-purple-950/90 dark:text-purple-200/90">
                    {project.approach.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Insights Stats */}
              <div>
                <h4 className="text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-3">
                  Quantified Findings & Strategic Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.keyInsights.map((insight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 space-y-1"
                    >
                      <div className="text-lg font-extrabold text-purple-600 dark:text-purple-400">
                        {insight.stat}
                      </div>
                      <div className="text-xs font-bold text-purple-950 dark:text-white">
                        {insight.title}
                      </div>
                      <p className="text-[11px] text-purple-800/80 dark:text-purple-300/75">
                        {insight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-bold text-purple-900 dark:text-purple-200 uppercase tracking-wider mb-2">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-100/40 dark:bg-purple-950/30 text-xs text-purple-900 dark:text-purple-200 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CODE */}
          {activeTab === "code" && (
            <div className="space-y-6">
              {project.sqlSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5 text-purple-600" />
                      Analytical SQL Query
                    </span>
                    <button
                      onClick={() => handleCopy(project.sqlSnippet!, "sql")}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 hover:bg-purple-200 transition-colors flex items-center gap-1"
                    >
                      {copiedCode === "sql" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode === "sql" ? "Copied!" : "Copy SQL"}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-2xl bg-purple-950 text-purple-100 text-xs font-mono overflow-x-auto border border-purple-800">
                    <code>{project.sqlSnippet}</code>
                  </pre>
                </div>
              )}

              {project.pythonSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-purple-600" />
                      Python / Machine Learning Pipeline
                    </span>
                    <button
                      onClick={() => handleCopy(project.pythonSnippet!, "python")}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-200 hover:bg-purple-200 transition-colors flex items-center gap-1"
                    >
                      {copiedCode === "python" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedCode === "python" ? "Copied!" : "Copy Python"}</span>
                    </button>
                  </div>
                  <pre className="p-4 rounded-2xl bg-[#0d071a] text-purple-100 text-xs font-mono overflow-x-auto border border-purple-800">
                    <code>{project.pythonSnippet}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CHARTS */}
          {activeTab === "charts" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                <h4 className="text-xs font-bold text-purple-950 dark:text-white mb-1">
                  Interactive Outcome Analytics Visualizer
                </h4>
                <p className="text-xs text-purple-600 dark:text-purple-400 mb-4">
                  Dynamic visual model illustrating the project&apos;s baseline vs optimized metrics.
                </p>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {renderChart() || <div>No chart data available</div>}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PIPELINE & DATASET */}
          {activeTab === "pipeline" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                    Dataset Name
                  </div>
                  <div className="text-sm font-semibold text-purple-950 dark:text-white mt-1">
                    {project.dataset.name}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                    Volume & Records
                  </div>
                  <div className="text-sm font-semibold text-purple-950 dark:text-white mt-1">
                    {project.dataset.records}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                    Feature Dimensions
                  </div>
                  <div className="text-sm font-semibold text-purple-950 dark:text-white mt-1">
                    {project.dataset.features}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300 uppercase">
                    Data Infrastructure
                  </div>
                  <div className="text-sm font-semibold text-purple-950 dark:text-white mt-1">
                    {project.dataset.source}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-purple-950 dark:text-white uppercase tracking-wider mb-2">
                  Tools & Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-900/60 border border-purple-200 dark:border-purple-800 text-xs font-semibold text-purple-900 dark:text-purple-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-purple-50/60 dark:bg-purple-950/50 border-t border-purple-200 dark:border-purple-800/60 flex items-center justify-between">
          <div className="text-xs text-purple-600 dark:text-purple-400">
            Engineered by <strong className="font-semibold text-purple-950 dark:text-white">INDHU S</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-purple-600 text-white hover:bg-purple-700 transition-colors shadow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
