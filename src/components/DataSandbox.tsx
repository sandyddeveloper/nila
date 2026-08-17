"use client";

import React, { useState, useMemo } from "react";
import {
  Sliders,
  Sparkles,
  TrendingUp,
  DollarSign,
  Users,
  ShieldAlert,
  CheckCircle2,
  RefreshCw,
  Download,
  FileSpreadsheet,
  Layers,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { formatCurrency, formatNumber } from "@/lib/utils";

interface PresetScenario {
  name: string;
  users: number;
  churnRate: number;
  arpu: number;
  churnReduction: number;
}

const PRESETS: Record<string, PresetScenario> = {
  saas: {
    name: "B2B SaaS Workspace",
    users: 25000,
    churnRate: 6.5,
    arpu: 95,
    churnReduction: 28,
  },
  ecommerce: {
    name: "Omnichannel E-Commerce",
    users: 180000,
    churnRate: 8.2,
    arpu: 48,
    churnReduction: 24,
  },
  fintech: {
    name: "FinTech Neo-Bank",
    users: 85000,
    churnRate: 4.8,
    arpu: 120,
    churnReduction: 32,
  },
  subscription: {
    name: "Consumer Streaming / App",
    users: 320000,
    churnRate: 9.5,
    arpu: 18,
    churnReduction: 20,
  },
};

export function DataSandbox() {
  const [users, setUsers] = useState<number>(PRESETS.saas.users);
  const [churnRate, setChurnRate] = useState<number>(PRESETS.saas.churnRate);
  const [arpu, setArpu] = useState<number>(PRESETS.saas.arpu);
  const [churnReduction, setChurnReduction] = useState<number>(PRESETS.saas.churnReduction);
  const [activePreset, setActivePreset] = useState<string>("saas");

  const applyPreset = (key: string) => {
    setActivePreset(key);
    const p = PRESETS[key];
    setUsers(p.users);
    setChurnRate(p.churnRate);
    setArpu(p.arpu);
    setChurnReduction(p.churnReduction);
  };

  // Math simulation calculations
  const simulation = useMemo(() => {
    const monthlyChurnCount = (users * (churnRate / 100));
    const annualLostRevenue = monthlyChurnCount * arpu * 12;

    const newChurnRate = churnRate * (1 - churnReduction / 100);
    const savedMonthlyChurners = monthlyChurnCount * (churnReduction / 100);
    const annualRetainedRevenue = savedMonthlyChurners * arpu * 12;

    const roiMultiplier = ((annualRetainedRevenue / (arpu * 500)) * 0.9).toFixed(1);

    // 12-Month Projection Array
    const projectionData = [];
    let baseUsers = users;
    let optUsers = users;

    for (let month = 1; month <= 12; month++) {
      const baseLost = baseUsers * (churnRate / 100);
      baseUsers = Math.max(0, baseUsers - baseLost + users * 0.05); // assuming 5% organic new growth

      const optLost = optUsers * (newChurnRate / 100);
      optUsers = Math.max(0, optUsers - optLost + users * 0.05);

      const baseRev = Math.round(baseUsers * arpu);
      const optRev = Math.round(optUsers * arpu);
      const deltaSavings = optRev - baseRev;

      projectionData.push({
        month: `M${month}`,
        baselineARR: Math.round(baseRev * 12 / 1000), // in $k
        optimizedARR: Math.round(optRev * 12 / 1000), // in $k
        retainedSavings: Math.round(deltaSavings * 12 / 1000),
      });
    }

    return {
      annualLostRevenue,
      annualRetainedRevenue,
      savedMonthlyChurners: Math.round(savedMonthlyChurners),
      newChurnRate: Number(newChurnRate.toFixed(2)),
      projectionData,
      roiMultiplier,
    };
  }, [users, churnRate, arpu, churnReduction]);

  return (
    <section id="sandbox" className="py-24 relative bg-purple-50/40 dark:bg-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Interactive Data Simulation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
            Customer Retention &amp; Lifetime Value (LTV) Simulator
          </h2>
          <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80">
            Test how predictive churn modeling and proactive interventions directly impact enterprise revenue. Adjust the live parameters below to simulate your organization&apos;s data trajectory.
          </p>

          {/* Attached Dataset Download Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/customer_retention_ltv_dataset.xlsx"
              download="customer_retention_ltv_dataset.xlsx"
              className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center gap-2 shadow-md hover:scale-102"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Download Retention &amp; LTV Dataset (.xlsx)</span>
              <Download className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="/retail_sales_telemetry.xlsx"
              download="retail_sales_telemetry.xlsx"
              className="px-4 py-2 rounded-xl text-xs font-semibold glass-card text-purple-950 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800 transition-all flex items-center gap-2 shadow-sm"
            >
              <FileSpreadsheet className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Download Sales Telemetry Dataset (.xlsx)</span>
              <Download className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <span className="text-xs font-bold text-purple-900 dark:text-purple-200 mr-2 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            Load Industry Scenario:
          </span>
          {Object.entries(PRESETS).map(([key, p]) => (
            <button
              key={key}
              onClick={() => applyPreset(key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activePreset === key
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-105"
                  : "glass-card text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/40"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Main Grid: Controls + Live Graph & KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Panel */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-7 rounded-3xl border border-purple-200 dark:border-purple-800/70 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-purple-100 dark:border-purple-900/50">
              <h3 className="text-sm font-bold text-purple-950 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Scenario Parameters
              </h3>
              <button
                onClick={() => applyPreset("saas")}
                className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Slider 1: Active Users */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-purple-600" />
                  Active User Base
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-300">
                  {formatNumber(users)} Users
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={users}
                onChange={(e) => {
                  setUsers(Number(e.target.value));
                  setActivePreset("custom");
                }}
                className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-purple-500/70">
                <span>5k</span>
                <span>250k</span>
                <span>500k</span>
              </div>
            </div>

            {/* Slider 2: Baseline Churn */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
                  Baseline Monthly Churn Rate
                </span>
                <span className="font-bold text-rose-600 dark:text-rose-400">
                  {churnRate.toFixed(1)}% / mo
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="15.0"
                step="0.1"
                value={churnRate}
                onChange={(e) => {
                  setChurnRate(Number(e.target.value));
                  setActivePreset("custom");
                }}
                className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-purple-500/70">
                <span>1% (Low)</span>
                <span>7.5% (Avg)</span>
                <span>15% (Critical)</span>
              </div>
            </div>

            {/* Slider 3: ARPU */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                  Avg Revenue Per User (ARPU)
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  ${arpu} / mo
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={arpu}
                onChange={(e) => {
                  setArpu(Number(e.target.value));
                  setActivePreset("custom");
                }}
                className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-purple-500/70">
                <span>$10/mo</span>
                <span>$150/mo</span>
                <span>$300/mo</span>
              </div>
            </div>

            {/* Slider 4: Churn Reduction */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                  Analytics Churn Reduction Gain
                </span>
                <span className="font-bold text-purple-700 dark:text-purple-300">
                  -{churnReduction}% Churn
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="45"
                step="1"
                value={churnReduction}
                onChange={(e) => {
                  setChurnReduction(Number(e.target.value));
                  setActivePreset("custom");
                }}
                className="w-full accent-purple-600 cursor-pointer h-2 bg-purple-200 dark:bg-purple-900 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-purple-500/70">
                <span>5% (Conservative)</span>
                <span>25% (Standard)</span>
                <span>45% (High AI Lift)</span>
              </div>
            </div>

            {/* Excel Model Info Box */}
            <div className="p-4 rounded-2xl bg-purple-100/60 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 space-y-1.5 text-xs">
              <div className="font-bold text-purple-950 dark:text-white flex items-center gap-1.5">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Underlying Excel Mathematical Model</span>
              </div>
              <p className="text-[11px] text-purple-900/80 dark:text-purple-300/80 leading-relaxed">
                Formulas from <code className="font-mono text-purple-700 dark:text-purple-300">customer_retention_ltv_dataset.xlsx</code>:
                <br />
                • <span className="font-mono text-[10px]">Saved ARR = (Users × Churn% × Gain%) × ARPU × 12</span>
                <br />
                • <span className="font-mono text-[10px]">LTV = ARPU / Monthly Churn%</span>
              </p>
            </div>
          </div>

          {/* Right Analytical Results & Live Chart Panel */}
          <div className="lg:col-span-7 space-y-6">
            {/* 3 Outcome Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-md">
                <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase">
                  Annual Revenue Retained
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-purple-600 dark:text-purple-300 mt-1">
                  {formatCurrency(simulation.annualRetainedRevenue)}
                </div>
                <div className="text-[10px] text-purple-600/70 mt-0.5">
                  Preserved ARR saved from churn
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-md">
                <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase">
                  Monthly Users Saved
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-300 mt-1">
                  {formatNumber(simulation.savedMonthlyChurners)} / mo
                </div>
                <div className="text-[10px] text-indigo-600/70 mt-0.5">
                  Retained active subscribers
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-md">
                <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase">
                  Optimized Churn Rate
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                  {simulation.newChurnRate}%
                </div>
                <div className="text-[10px] text-emerald-600/70 mt-0.5">
                  Down from {churnRate.toFixed(1)}% baseline
                </div>
              </div>
            </div>

            {/* Interactive Projection Chart */}
            <div className="glass-card p-6 rounded-3xl border border-purple-200 dark:border-purple-800/80 shadow-2xl purple-glow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-purple-100 dark:border-purple-900/50 gap-2">
                <div>
                  <h4 className="text-sm font-bold text-purple-950 dark:text-white">
                    12-Month Annual Run-Rate (ARR) Trajectory Comparison ($k)
                  </h4>
                  <p className="text-xs text-purple-600 dark:text-purple-400">
                    Live dynamic projection showing baseline vs analytics-optimized retention
                  </p>
                </div>
                <div className="text-xs font-extrabold px-3 py-1 rounded-xl bg-purple-100 dark:bg-purple-900/80 text-purple-800 dark:text-purple-200 self-start sm:self-auto">
                  +{churnReduction}% Optimization
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={simulation.projectionData}
                    margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="optArrGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9333EA" stopOpacity={0.45} />
                        <stop offset="95%" stopColor="#9333EA" stopOpacity={0.02} />
                      </linearGradient>
                      <linearGradient id="baseArrGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E879F9" stopOpacity={0.25} />
                        <stop offset="95%" stopColor="#E879F9" stopOpacity={0.01} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      stroke="#8884d8"
                      tick={{ fill: "#94a3b8", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#8884d8"
                      tick={{ fill: "#94a3b8", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                      unit="k"
                    />
                    <Tooltip
                      formatter={(value: any, name: any) => [
                        `$${formatNumber(Number(value))}k`,
                        name === "optimizedARR"
                          ? "With Indhu S Analytics Pipeline"
                          : "Baseline Unmanaged Churn",
                      ]}
                      contentStyle={{
                        backgroundColor: "#180d2b",
                        borderColor: "#9333ea",
                        borderRadius: "12px",
                        color: "#ffffff",
                        fontSize: "12px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                      }}
                    />
                    <Legend
                      formatter={(value) => (
                        <span className="text-xs text-purple-900 dark:text-purple-200 font-medium">
                          {value === "optimizedARR"
                            ? "Optimized ARR (Indhu S Analytics Pipeline)"
                            : "Status Quo ARR (Unmanaged Churn)"}
                        </span>
                      )}
                    />
                    <Area
                      type="monotone"
                      dataKey="optimizedARR"
                      stroke="#9333EA"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#optArrGrad)"
                    />
                    <Area
                      type="monotone"
                      dataKey="baselineARR"
                      stroke="#E879F9"
                      strokeDasharray="4 4"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#baseArrGrad)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-purple-100/50 dark:bg-purple-950/50 border border-purple-200/50 dark:border-purple-800/40 text-xs text-purple-900 dark:text-purple-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>
                  <strong>Key Insight:</strong> By deploying proactive early-churn triggers 45 days prior to drop-off, the organization captures an estimated{" "}
                  <strong className="text-purple-700 dark:text-purple-300">
                    {formatCurrency(simulation.annualRetainedRevenue)}
                  </strong>{" "}
                  in preserved enterprise value.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
