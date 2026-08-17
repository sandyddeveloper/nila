"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  Sparkles,
  DollarSign,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export function ValueCalculator() {
  const [reportsPerMonth, setReportsPerMonth] = useState<number>(35);
  const [hoursPerReport, setHoursPerReport] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [automationRate, setAutomationRate] = useState<number>(80);

  const results = useMemo(() => {
    const totalManualHoursPerMonth = reportsPerMonth * hoursPerReport;
    const hoursSavedPerMonth = totalManualHoursPerMonth * (automationRate / 100);
    const annualHoursSaved = hoursSavedPerMonth * 12;
    const annualDollarSavings = annualHoursSaved * hourlyRate;
    const speedMultiplier = (100 / (100 - automationRate)).toFixed(1);

    return {
      totalManualHoursPerMonth,
      hoursSavedPerMonth: Math.round(hoursSavedPerMonth),
      annualHoursSaved: Math.round(annualHoursSaved),
      annualDollarSavings,
      speedMultiplier,
    };
  }, [reportsPerMonth, hoursPerReport, hourlyRate, automationRate]);

  return (
    <section className="py-20 relative bg-purple-50/40 dark:bg-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-purple-200 dark:border-purple-800/80 shadow-2xl purple-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Description & Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 text-purple-900 dark:text-purple-200">
                  <Calculator className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Business Impact Estimator</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-950 dark:text-white">
                  Calculate Your Analytics & Automation ROI
                </h3>
                <p className="text-xs sm:text-sm text-purple-900/70 dark:text-purple-300/80">
                  Estimate how much manual reporting waste can be transformed into strategic high-value analysis through automated pipelines and Power BI / Tableau dashboards.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-5">
                {/* Reports / Month */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-purple-950 dark:text-purple-200">
                      Recurring Monthly Reports / Ad-hoc Requests
                    </span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold">
                      {reportsPerMonth} Reports
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={reportsPerMonth}
                    onChange={(e) => setReportsPerMonth(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
                  />
                </div>

                {/* Hours Per Report */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-purple-950 dark:text-purple-200">
                      Average Prep & Validation Time per Report
                    </span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold">
                      {hoursPerReport} Hours
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={hoursPerReport}
                    onChange={(e) => setHoursPerReport(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
                  />
                </div>

                {/* Hourly Rate */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-purple-950 dark:text-purple-200">
                      Average Knowledge Worker Cost ($/hr)
                    </span>
                    <span className="text-purple-700 dark:text-purple-300 font-bold">
                      ${hourlyRate}/hr
                    </span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="200"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-900 via-purple-950 to-indigo-950 text-white shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-purple-800/60">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  Projected Annual Efficiency Gains
                </span>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {results.speedMultiplier}x Faster Turnaround
                </span>
              </div>

              {/* Huge Savings Stat */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  {formatCurrency(results.annualDollarSavings)}
                </div>
                <p className="text-xs text-purple-300">
                  Estimated direct labor cost savings per year
                </p>
              </div>

              {/* Mini Output Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-700/50">
                  <div className="text-xs text-purple-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    Hours Saved / Year
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    {formatNumber(results.annualHoursSaved)} hrs
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-900/40 border border-purple-700/50">
                  <div className="text-xs text-purple-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Monthly Time Saved
                  </div>
                  <div className="text-xl font-bold text-white mt-1">
                    {formatNumber(results.hoursSavedPerMonth)} hrs/mo
                  </div>
                </div>
              </div>

              {/* Bullet points */}
              <div className="space-y-2 pt-2 border-t border-purple-800/50 text-xs text-purple-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Eliminates human copy-paste errors across spreadsheets.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Empowers leadership with real-time automated drilldowns.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
