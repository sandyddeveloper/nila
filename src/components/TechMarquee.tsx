"use client";

import React from "react";
import {
  PythonLogo,
  PowerBILogo,
  ExcelLogo,
  PostgreSQLLogo,
  MySQLLogo,
  PandasLogo,
  NumPyLogo,
  DjangoLogo,
  GitLogo,
  PowerQueryLogo,
  DaxLogo,
  TableauLogo,
  HTMLLogo,
  CSSLogo,
} from "./TechLogos";
import { Sparkles, Cpu, Layers } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const TECH_STACK_ROW_1: TechItem[] = [
  {
    name: "Python",
    category: "Programming & Analytics",
    description: "Data processing, script automation & EDA",
    icon: PythonLogo,
    accentColor: "from-blue-500/20 to-yellow-500/20",
  },
  {
    name: "Microsoft Power BI",
    category: "BI & Visualization",
    description: "Interactive executive KPI dashboards & reporting",
    icon: PowerBILogo,
    accentColor: "from-amber-500/20 to-yellow-500/20",
  },
  {
    name: "SQL & PostgreSQL",
    category: "Relational Databases",
    description: "Complex queries, window functions & aggregations",
    icon: PostgreSQLLogo,
    accentColor: "from-blue-600/20 to-sky-500/20",
  },
  {
    name: "Microsoft Excel",
    category: "Spreadsheet Analytics",
    description: "VLOOKUP, PivotTables, Macros & Validation checks",
    icon: ExcelLogo,
    accentColor: "from-emerald-600/20 to-green-500/20",
  },
  {
    name: "Pandas",
    category: "Data Manipulation",
    description: "Dataframes, missing records & outlier cleansing",
    icon: PandasLogo,
    accentColor: "from-purple-600/20 to-pink-500/20",
  },
  {
    name: "DAX (Data Analysis Expressions)",
    category: "Data Modeling",
    description: "Custom calculations, time-intelligence & KPI metrics",
    icon: DaxLogo,
    accentColor: "from-purple-700/20 to-indigo-600/20",
  },
  {
    name: "MySQL",
    category: "Database Management",
    description: "Data integrity, schema relations & QA verification",
    icon: MySQLLogo,
    accentColor: "from-cyan-600/20 to-blue-500/20",
  },
];

const TECH_STACK_ROW_2: TechItem[] = [
  {
    name: "Power Query",
    category: "ETL Processing",
    description: "Data extraction, transformation & automated pipelines",
    icon: PowerQueryLogo,
    accentColor: "from-emerald-700/20 to-teal-500/20",
  },
  {
    name: "NumPy & Matplotlib",
    category: "Scientific Computing",
    description: "Array computing, statistical distributions & plots",
    icon: NumPyLogo,
    accentColor: "from-blue-700/20 to-cyan-500/20",
  },
  {
    name: "Django",
    category: "Web Framework",
    description: "Authentication, ORM models & analytical endpoints",
    icon: DjangoLogo,
    accentColor: "from-emerald-800/20 to-green-600/20",
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    description: "Repository management, branching & collaboration",
    icon: GitLogo,
    accentColor: "from-orange-600/20 to-red-500/20",
  },
  {
    name: "Tableau",
    category: "Data Discovery",
    description: "Visual exploration & multi-source blending",
    icon: TableauLogo,
    accentColor: "from-orange-500/20 to-blue-500/20",
  },
  {
    name: "HTML5",
    category: "Web Semantics",
    description: "Clean DOM structure & responsive web UI",
    icon: HTMLLogo,
    accentColor: "from-orange-600/20 to-amber-500/20",
  },
  {
    name: "CSS3",
    category: "Styling & Layout",
    description: "Responsive layouts, micro-interactions & modern UI",
    icon: CSSLogo,
    accentColor: "from-blue-600/20 to-indigo-500/20",
  },
];

function TechCard({ item }: { item: TechItem }) {
  const IconComponent = item.icon;

  return (
    <div className="mx-3.5 w-80 sm:w-96 shrink-0 group">
      <div className="glass-card p-5 sm:p-6 rounded-3xl border border-purple-200 dark:border-purple-800/70 shadow-md hover:shadow-2xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:-translate-y-1.5 flex items-center gap-4 bg-white/95 dark:bg-[#130b24]/95 backdrop-blur-md">
        {/* Logo Container */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-50 dark:bg-purple-950/80 border border-purple-100 dark:border-purple-800/60 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 group-hover:shadow-purple-500/20 transition-all">
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex items-center justify-between gap-1">
            <h4 className="text-sm sm:text-base font-extrabold text-purple-950 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {item.name}
            </h4>
          </div>
          <p className="text-xs font-bold text-purple-600 dark:text-purple-400 truncate">
            {item.category}
          </p>
          <p className="text-xs text-purple-900/70 dark:text-purple-300/70 truncate">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-20 relative overflow-hidden bg-purple-50/40 dark:bg-purple-950/20 border-y border-purple-200/60 dark:border-purple-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/60 border border-purple-300 dark:border-purple-800 text-purple-900 dark:text-purple-200">
          <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>Core Stack &amp; Enterprise Tooling</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-extrabold text-purple-950 dark:text-white tracking-tight">
          Technologies &amp; Analytical Frameworks
        </h3>
        <p className="text-sm sm:text-base text-purple-900/70 dark:text-purple-300/80 max-w-2xl mx-auto">
          Production-proven software, relational databases, ETL query engines, and business intelligence suites deployed across projects.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Wrapper with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-r from-[#faf8ff] dark:from-[#090514] to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-l from-[#faf8ff] dark:from-[#090514] to-transparent z-10" />

        {/* Row 1: Left Scroll */}
        <div className="flex animate-marquee py-3">
          {TECH_STACK_ROW_1.map((item, idx) => (
            <TechCard key={`row1-a-${idx}`} item={item} />
          ))}
          {TECH_STACK_ROW_1.map((item, idx) => (
            <TechCard key={`row1-b-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Right Scroll (Reverse) */}
        <div className="flex animate-marquee-reverse py-3 mt-2">
          {TECH_STACK_ROW_2.map((item, idx) => (
            <TechCard key={`row2-a-${idx}`} item={item} />
          ))}
          {TECH_STACK_ROW_2.map((item, idx) => (
            <TechCard key={`row2-b-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
