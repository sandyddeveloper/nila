"use client";

import React, { useState } from "react";
import { QUERY_SCENARIOS, QueryScenario } from "@/data/portfolioData";
import {
  Code2,
  Play,
  Database,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Clock,
  Layers,
  ChevronRight,
  Download,
  FileSpreadsheet,
} from "lucide-react";

export function CodeLab() {
  const [selectedScenario, setSelectedScenario] = useState<QueryScenario>(
    QUERY_SCENARIOS[0]
  );
  const [isExecuting, setIsExecuting] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleRunQuery = () => {
    setIsExecuting(true);
    setHasExecuted(false);
    setTimeout(() => {
      setIsExecuting(false);
      setHasExecuted(true);
    }, 450);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedScenario.sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="codelab" className="py-24 relative bg-purple-50/30 dark:bg-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Terminal className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Interactive SQL &amp; Data Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Live Analytical Query Console
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Explore and execute real production-grade SQL scripts written by Indhu S for financial KPIs, data migration QA checks, and regional sales analytics.
          </p>

          {/* Direct Dataset Download Action */}
          <div className="pt-2 flex justify-center">
            <a
              href="/sql_query_analytics_dataset.xlsx"
              download="sql_query_analytics_dataset.xlsx"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-all flex items-center gap-2 shadow-md hover:scale-102"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Download SQL Query Dataset (.xlsx)</span>
              <Download className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Console Container */}
        <div className="glass-card rounded-3xl border border-purple-200 dark:border-purple-800/80 shadow-2xl overflow-hidden purple-glow">
          {/* Top Bar with Scenarios Selection */}
          <div className="p-4 sm:p-5 bg-purple-100/70 dark:bg-purple-950/80 border-b border-purple-200 dark:border-purple-800/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="ml-2 text-xs font-mono font-bold text-purple-900 dark:text-purple-300">
                postgres@analytics-cluster:~
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {QUERY_SCENARIOS.map((scenario) => (
                <button
                  key={scenario.id}
                  onClick={() => {
                    setSelectedScenario(scenario);
                    setHasExecuted(true);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedScenario.id === scenario.id
                      ? "bg-purple-600 text-white shadow-sm scale-102"
                      : "bg-white/80 dark:bg-purple-900/40 text-purple-950 dark:text-purple-200 hover:bg-purple-200/60 dark:hover:bg-purple-800/50"
                  }`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Code Editor Window */}
            <div className="lg:col-span-6 p-6 bg-[#0c061a] border-b lg:border-b-0 lg:border-r border-purple-900/50 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-purple-900/40">
                  <div className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    <span>query_{selectedScenario.id}.sql</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-900/60 text-purple-200 hover:bg-purple-800 transition-colors flex items-center gap-1"
                      title="Copy SQL"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>

                {/* Code Body */}
                <pre className="text-xs font-mono text-purple-100 overflow-x-auto p-2 leading-relaxed max-h-72">
                  <code>{selectedScenario.sql}</code>
                </pre>
              </div>

              {/* Action Bar */}
              <div className="pt-4 mt-4 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] text-purple-400 font-mono">
                  Schema: <code className="text-purple-300 font-bold">{selectedScenario.category}</code>
                </span>
                <button
                  onClick={handleRunQuery}
                  disabled={isExecuting}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-600/30 flex items-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isExecuting ? "animate-spin" : ""}`} />
                  <span>{isExecuting ? "Executing Query..." : "Execute Query"}</span>
                </button>
              </div>
            </div>

            {/* Right: Execution Output & Data Table */}
            <div className="lg:col-span-6 p-6 bg-white dark:bg-[#120a26] flex flex-col justify-between space-y-4">
              <div>
                {/* Stats Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-purple-100 dark:border-purple-900/50">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      QUERY OK
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] font-mono text-purple-800 dark:text-purple-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-purple-500" />
                      {selectedScenario.executionTime}
                    </span>
                    <span>•</span>
                    <span>{selectedScenario.rowsMatched} rows returned</span>
                  </div>
                </div>

                {/* Scenario Description */}
                <p className="text-xs text-purple-900/80 dark:text-purple-300/80 mb-3">
                  {selectedScenario.description}
                </p>

                {/* Output Data Table */}
                <div className="rounded-2xl border border-purple-200 dark:border-purple-800/60 overflow-hidden shadow-sm bg-purple-50/30 dark:bg-purple-950/20">
                  <div className="overflow-x-auto max-h-56">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-purple-100/80 dark:bg-purple-950/80 text-purple-950 dark:text-purple-200 uppercase text-[10px] tracking-wider sticky top-0 border-b border-purple-200 dark:border-purple-800">
                        <tr>
                          {selectedScenario.columns.map((col) => (
                            <th key={col} className="py-2.5 px-3 whitespace-nowrap">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-purple-100 dark:divide-purple-900/40 text-purple-950 dark:text-purple-200">
                        {selectedScenario.results.map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-purple-100/50 dark:hover:bg-purple-900/30 transition-colors"
                          >
                            {selectedScenario.columns.map((col) => (
                              <td
                                key={col}
                                className="py-2 px-3 whitespace-nowrap text-[11px]"
                              >
                                {String(row[col])}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bottom Insight Pill */}
              <div className="pt-3 border-t border-purple-100 dark:border-purple-900/50 flex items-start gap-2 text-xs text-purple-900 dark:text-purple-200 bg-purple-50 dark:bg-purple-950/50 p-3 rounded-xl border border-purple-200/50 dark:border-purple-800/40">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-purple-950 dark:text-white">Business Insight:</strong>{" "}
                  {selectedScenario.insight}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
