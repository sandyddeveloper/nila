export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Power BI & Tableau" | "Python" | "SQL & Warehousing" | "Excel & Analytics";
  featured: boolean;
  impactMetric: string;
  impactLabel: string;
  tags: string[];
  tools: string[];
  summary: string;
  problem: string;
  approach: string[];
  dataset: {
    name: string;
    records: string;
    features: string;
    source: string;
  };
  keyInsights: {
    title: string;
    stat: string;
    description: string;
  }[];
  sqlSnippet?: string;
  pythonSnippet?: string;
  chartData: {
    type: "bar" | "line" | "area" | "radar" | "pie";
    data: any[];
    xKey?: string;
    dataKeys: string[];
    colors: string[];
  };
  deliverables: string[];
  datasetFile?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    experience: string;
    highlight?: boolean;
    tags: string[];
  }[];
}

export interface CareerExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  badgeColor: string;
  skillsVerified: string[];
  verifyUrl: string;
  image: string;
}

export interface QueryScenario {
  id: string;
  title: string;
  category: "Sales Analytics" | "Financial KPIs" | "Data Quality & Cleaning" | "Regional Trends";
  description: string;
  sql: string;
  executionTime: string;
  rowsMatched: number;
  results: Record<string, any>[];
  columns: string[];
  insight: string;
}

export const PERSONAL_INFO = {
  name: "Indhu S",
  role: "Data Analyst & BI Specialist",
  tagline: "Data Cleaning, SQL Modeling, Python Analytics & Power BI Dashboards",
  location: "Urapakkam, Chennai, India",
  email: "indhusekar1609@gmail.com",
  linkedin: "https://linkedin.com/in/indhu16",
  github: "https://github.com/indhu-16/",
  website: "https://indhu-puce.vercel.app/",
  resumePdf: "/my_resume (1).pdf",
  bio: "Motivated and detail-oriented Data Analyst with strong technical expertise in Python (Pandas, NumPy, Matplotlib), SQL (MySQL, PostgreSQL), Advanced Excel, Power BI (DAX, Power Query), and Django. Proven experience in data migration, validation, ETL data pipelines, and executive KPI reporting at HTC Global Services.",
  availability: "Open to Full-time Data Analyst & BI Roles",
  heroStats: [
    { value: "100%", label: "Data Quality & Migration Accuracy", subtext: "HTC Global Services QA" },
    { value: "+28% YoY", label: "Financial Metrics Analyzed", subtext: "Power BI & DAX Intelligence" },
    { value: "500K+", label: "Records Cleaned & Transformed", subtext: "Python, Pandas & SQL" },
    { value: "15+", label: "Interactive Reports & Dashboards", subtext: "Power BI & Excel" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "financial-performance-dashboard",
    title: "Executive Financial Performance & Revenue Dashboard",
    subtitle: "Interactive Power BI dashboard tracking Revenue, Gross Profit Margin, and YOY Growth with dynamic DAX time-intelligence calculations.",
    category: "Power BI & Tableau",
    featured: true,
    impactMetric: "+24.8% YoY",
    impactLabel: "Revenue Visibility Lift",
    tags: ["Power BI", "DAX", "Power Query", "MS Excel", "ETL", "Financial KPIs"],
    tools: ["Power BI", "DAX", "Power Query", "MS Excel", "Data Modeling"],
    summary: "Constructed an end-to-end Financial Performance Dashboard in Power BI. Cleaned and transformed multi-source financial transaction records using Power Query and engineered custom DAX measures for YOY Growth, Gross Margin, and Dynamic Target Variance.",
    problem: "Finance leaders relied on disconnected static spreadsheets, creating weekly reporting latency and difficulty in tracking regional profit margins and revenue variances.",
    approach: [
      "Extracted and integrated transactional financial data across multiple business units and currencies.",
      "Cleaned, normalized, and transformed messy transaction tables using Power Query (M) ETL procedures.",
      "Built a dimensional Star-Schema data model connecting fact transactions with date, department, and product dimensions.",
      "Formulated advanced DAX measures for YOY Growth %, YTD Revenue, Gross Profit Margin, and Budget Variance.",
      "Designed an intuitive executive UI with bookmark toggles, drill-through pages, and automated KPI alert cards."
    ],
    dataset: {
      name: "Enterprise Multi-Year Financial Transactions & Budget Ledger",
      records: "250,000+ transaction lines",
      features: "Date, Department, Revenue, COGS, Gross Profit, Region, Variance",
      source: "ERP Financial Ledger + Excel Staging",
    },
    keyInsights: [
      {
        title: "Gross Profit Margin",
        stat: "34.2% Average",
        description: "Identified top 3 high-margin product lines driving 62% of net operating profit across quarterly cycles.",
      },
      {
        title: "YoY Revenue Velocity",
        stat: "+24.8% Growth",
        description: "Q3 and Q4 showed significant seasonal surge in enterprise software and service contracts.",
      },
      {
        title: "Reporting Time Reclaimed",
        stat: "85% Faster",
        description: "Automated monthly financial rollup, reducing reporting preparation time from 16 hours to instantaneous refresh.",
      },
    ],
    sqlSnippet: `-- Calculate YoY Financial Revenue and Gross Margin Variance
WITH QuarterlyFinancials AS (
  SELECT 
    department_id,
    fiscal_year,
    fiscal_quarter,
    SUM(revenue_amount) AS total_revenue,
    SUM(cogs_amount) AS total_cogs,
    SUM(revenue_amount - cogs_amount) AS gross_profit
  FROM finance.fct_general_ledger
  GROUP BY department_id, fiscal_year, fiscal_quarter
),
YoYVariance AS (
  SELECT 
    department_id,
    fiscal_year,
    fiscal_quarter,
    total_revenue,
    gross_profit,
    ROUND((gross_profit / NULLIF(total_revenue, 0)) * 100, 2) AS gross_margin_pct,
    LAG(total_revenue) OVER (
      PARTITION BY department_id, fiscal_quarter 
      ORDER BY fiscal_year
    ) AS prev_year_revenue
  FROM QuarterlyFinancials
)
SELECT 
  department_id,
  fiscal_year,
  fiscal_quarter,
  total_revenue,
  gross_profit,
  gross_margin_pct,
  ROUND(((total_revenue - prev_year_revenue) / NULLIF(prev_year_revenue, 0)) * 100, 2) AS yoy_revenue_growth_pct
FROM YoYVariance
ORDER BY fiscal_year DESC, fiscal_quarter DESC;`,
    pythonSnippet: `# DAX Measure Reference in Power BI:
# [Total Revenue] = SUM(Financials[Revenue])
# [Total Gross Profit] = [Total Revenue] - SUM(Financials[COGS])
# [Gross Margin %] = DIVIDE([Total Gross Profit], [Total Revenue], 0)
# [Revenue YoY Growth %] = 
#   VAR CurrentYearRev = [Total Revenue]
#   VAR PriorYearRev = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Date'[Date]))
#   RETURN DIVIDE(CurrentYearRev - PriorYearRev, PriorYearRev, 0)`,
    chartData: {
      type: "area",
      xKey: "quarter",
      data: [
        { quarter: "Q1 2024", revenue: 420, grossProfit: 145, yoyGrowth: 18.2 },
        { quarter: "Q2 2024", revenue: 510, grossProfit: 178, yoyGrowth: 21.4 },
        { quarter: "Q3 2024", revenue: 630, grossProfit: 220, yoyGrowth: 24.8 },
        { quarter: "Q4 2024", revenue: 780, grossProfit: 275, yoyGrowth: 28.5 },
      ],
      dataKeys: ["revenue", "grossProfit"],
      colors: ["#9333EA", "#C084FC"],
    },
    deliverables: [
      "Interactive Power BI Executive Financial Dashboard (.pbix)",
      "Automated Power Query M Data Ingestion Pipeline",
      "DAX Measures Catalog & Documentation",
      "Executive Summary PDF Report & Excel Pivot Integration"
    ],
  },
  {
    id: "sales-dataset-eda",
    title: "Regional Sales Trends & Exploratory Data Analysis (EDA)",
    subtitle: "Python-driven exploratory data analysis on multi-region sales datasets with Pandas data cleaning and SQL database audit queries.",
    category: "Python",
    featured: true,
    impactMetric: "99.8%",
    impactLabel: "Cleaned Data Accuracy",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Excel", "Data Cleaning"],
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "PostgreSQL", "Excel"],
    summary: "Performed end-to-end exploratory data analysis and data cleansing on a multi-category sales dataset. Isolated outliers, imputed missing values, resolved relational constraints, and generated actionable regional sales trends.",
    problem: "The raw sales dataset had duplicate records, missing customer identifiers, and inconsistent currency formatting that distorted revenue reporting across regional branches.",
    approach: [
      "Loaded raw CSV and SQL tables using Pandas DataFrame and conducted systematic profiling.",
      "Handled null values, standardized categorical text fields, and removed duplicate entries.",
      "Executed outlier detection using IQR (Interquartile Range) and Z-score methods.",
      "Wrote optimized SQL queries using CTEs, joins, and aggregations to audit consistency against database tables.",
      "Visualized regional sales distribution, top-performing product categories, and monthly velocity using Matplotlib and Power BI."
    ],
    dataset: {
      name: "Multi-Category Regional Retail Sales Transactions",
      records: "120,000+ sales transactions",
      features: "Order ID, Product Category, Quantity, Unit Price, Region, Discount, Net Sales",
      source: "PostgreSQL Database + Raw Transaction CSV",
    },
    keyInsights: [
      {
        title: "Top Regional Market",
        stat: "42% Share",
        description: "The Southern regional market led overall sales volume, driven by high demand in electronics and peripherals.",
      },
      {
        title: "Discount Cannibalization",
        stat: "15% Margin Erosion",
        description: "Identified that discount rates >20% failed to generate incremental volume and eroded gross margins.",
      },
      {
        title: "Outlier Resolution",
        stat: "1,420 Duplicates Removed",
        description: "Cleansed and deduplicated corrupted legacy records, achieving 99.8% audit accuracy.",
      },
    ],
    sqlSnippet: `-- SQL Data Cleaning & Regional Sales Aggregation Audit Query
WITH CleanedOrders AS (
  SELECT 
    order_id,
    customer_id,
    region,
    product_category,
    quantity,
    unit_price,
    discount_pct,
    (quantity * unit_price * (1 - COALESCE(discount_pct, 0))) AS net_sales_amount,
    ROW_NUMBER() OVER (PARTITION BY order_id, product_category ORDER BY order_date DESC) AS row_num
  FROM raw_data.sales_transactions
  WHERE order_id IS NOT NULL AND unit_price > 0
)
SELECT 
  region,
  product_category,
  COUNT(DISTINCT order_id) AS total_orders,
  ROUND(SUM(net_sales_amount), 2) AS total_net_sales,
  ROUND(AVG(net_sales_amount), 2) AS avg_order_value,
  ROUND(AVG(discount_pct) * 100, 1) AS avg_discount_pct
FROM CleanedOrders
WHERE row_num = 1
GROUP BY region, product_category
ORDER BY total_net_sales DESC;`,
    pythonSnippet: `# Python & Pandas Exploratory Data Analysis (EDA) Pipeline
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. Load and inspect dataset
df = pd.read_csv("sales_data_raw.csv")
print(f"Initial Shape: {df.shape}")

# 2. Data Cleaning & Handling Missing Values
df.drop_duplicates(subset=["order_id", "product_id"], inplace=True)
df["customer_id"].fillna("UNKNOWN_GUEST", inplace=True)
df["discount_pct"] = df["discount_pct"].clip(lower=0.0, upper=0.5)

# 3. Feature Engineering
df["net_sales"] = df["quantity"] * df["unit_price"] * (1 - df["discount_pct"])

# 4. Regional Aggregation Analysis
regional_summary = df.groupby(["region", "category"])["net_sales"].agg(["sum", "mean", "count"]).reset_index()
print(regional_summary.head(10))

# 5. Outlier Detection using IQR
Q1 = df["net_sales"].quantile(0.25)
Q3 = df["net_sales"].quantile(0.75)
IQR = Q3 - Q1
filtered_df = df[(df["net_sales"] >= Q1 - 1.5 * IQR) & (df["net_sales"] <= Q3 + 1.5 * IQR)]
print(f"Cleaned dataset rows after outlier filtering: {len(filtered_df)}")`,
    chartData: {
      type: "bar",
      xKey: "region",
      data: [
        { region: "South Region", sales: 480, target: 400, transactions: 45 },
        { region: "West Region", sales: 360, target: 320, transactions: 34 },
        { region: "North Region", sales: 290, target: 300, transactions: 28 },
        { region: "East Region", sales: 210, target: 200, transactions: 20 },
      ],
      dataKeys: ["sales", "target"],
      colors: ["#9333EA", "#C084FC"],
    },
    deliverables: [
      "Jupyter Notebook with documented EDA workflow (.ipynb)",
      "Cleaned & Normalized PostgreSQL dataset tables",
      "Executive Sales Summary Power BI Dashboard",
      "Data Profiling & Quality Audit Report"
    ],
    datasetFile: "/retail_sales_telemetry.xlsx",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming & Frameworks",
    iconName: "Code",
    description: "Core analytical programming, script automation, and full-stack data frameworks.",
    skills: [
      { name: "SQL (MySQL, PostgreSQL)", level: 96, experience: "Proficient", highlight: true, tags: ["Advanced Joins", "Subqueries", "CTEs", "Window Functions"] },
      { name: "Python (Pandas, NumPy, Matplotlib)", level: 94, experience: "Proficient", highlight: true, tags: ["Data Cleaning", "EDA", "Data Wrangling", "Visualization"] },
      { name: "Excel (VLOOKUP, XLOOKUP, Pivot, Macros)", level: 95, experience: "Expert", highlight: true, tags: ["PivotTables", "Data Cleaning", "Formulas", "Macros"] },
      { name: "Django (User Authentication, ORM)", level: 85, experience: "Working Knowledge", tags: ["Authentication", "ORM", "Web Portal", "PostgreSQL"] },
      { name: "HTML & CSS (Frontend Development)", level: 88, experience: "Proficient", tags: ["Responsive Design", "Great Learning Certified", "UI Layouts"] },
    ],
  },
  {
    category: "Data & BI Tools",
    iconName: "BarChart3",
    description: "Transforming raw data into dynamic, executive-ready Power BI dashboards and visual reports.",
    skills: [
      { name: "Power BI (Desktop & Modeling)", level: 95, experience: "Proficient", highlight: true, tags: ["DAX Measures", "Power Query (ETL)", "Data Modeling", "Dashboarding"] },
      { name: "Power Query (ETL Processing)", level: 94, experience: "Proficient", highlight: true, tags: ["M Code", "Data Transformation", "Multi-source Ingestion"] },
      { name: "DAX (Data Analysis Expressions)", level: 92, experience: "Proficient", highlight: true, tags: ["Time Intelligence", "CALCULATE", "Custom Measures"] },
      { name: "Dashboard Development & KPI Reporting", level: 95, experience: "Expert", highlight: true, tags: ["Financial KPIs", "Sales Trends", "Drill-through", "Visual UX"] },
    ],
  },
  {
    category: "Databases & Data Engineering",
    iconName: "Database",
    description: "Relational database management, schema validation, and high-volume data migration.",
    skills: [
      { name: "Relational Database Management", level: 94, experience: "Proficient", highlight: true, tags: ["MySQL", "PostgreSQL", "Constraints", "Normalization"] },
      { name: "Data Conversion & Migration", level: 95, experience: "HTC Global QA", highlight: true, tags: ["Source-to-Target", "Completeness", "Schema Mapping"] },
      { name: "Data Cleaning & Quality Assurance", level: 98, experience: "Expert", highlight: true, tags: ["Validation", "Deduplication", "Missing Records", "Outliers"] },
      { name: "ETL & Pipeline Workflow", level: 90, experience: "Proficient", tags: ["Extraction", "Transformation", "Data Integrity", "Audit Logs"] },
    ],
  },
  {
    category: "Version Control & Core Competencies",
    iconName: "BrainCircuit",
    description: "Professional tools, problem-solving, and quality-driven analytical workflows.",
    skills: [
      { name: "Git & GitHub Version Control", level: 90, experience: "Proficient", highlight: true, tags: ["Repository Management", "Branching", "Collaboration"] },
      { name: "Analytical Problem Solving & Debugging", level: 95, experience: "Strong", highlight: true, tags: ["Root Cause Analysis", "Data Reconciliation", "Logic Design"] },
      { name: "Compliance & Data Integrity Standards", level: 94, experience: "HTC Global QA", tags: ["QA Standards", "Verification", "Accuracy Audits"] },
      { name: "Technical Communication & Storytelling", level: 92, experience: "Strong", tags: ["Stakeholder Reports", "KPI Summaries", "Documentation"] },
    ],
  },
];

export const CAREER_EXPERIENCES: CareerExperience[] = [
  {
    role: "Data Conversion Specialist – Quality Assurance",
    company: "HTC Global Services",
    location: "Chennai, India",
    period: "Apr 2025 – Nov 2025",
    type: "Full-Time",
    description: "Spearheaded enterprise data conversion, quality assurance, and migration initiatives across large-scale source systems and modernized target platforms.",
    achievements: [
      "Converted and migrated large volumes of data from source systems to target platforms while ensuring 100% data accuracy and completeness.",
      "Performed rigorous data cleaning, validation, and quality checks to identify and resolve duplicate, missing, and inconsistent records.",
      "Analyzed and processed business documents and multi-source datasets using Excel (VLOOKUP, PivotTables) and internal database tools to maintain data integrity and compliance standards.",
      "Collaborated with cross-functional technical teams to troubleshoot schema mismatches and streamline conversion workflows."
    ],
    techStack: ["SQL", "Excel", "Data Cleaning", "Data Validation", "ETL", "Quality Assurance", "PostgreSQL"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "SQL Certificate",
    issuer: "HackerRank",
    issueDate: "Jun 2026",
    credentialId: "74D738FEA4BE",
    badgeColor: "#9333EA",
    skillsVerified: ["Advanced Joins", "Subqueries", "Aggregations", "CTEs", "Window Functions"],
    verifyUrl: "https://www.hackerrank.com/certificates/74D738FEA4BE",
    image: "/sql.png",
  },
  {
    name: "Python Training",
    issuer: "Besant Tech",
    issueDate: "Apr 2026",
    credentialId: "BFT2443B119",
    badgeColor: "#7E22CE",
    skillsVerified: ["Python Core", "Pandas", "NumPy", "Matplotlib", "Data Structures"],
    verifyUrl: "https://www.besanttechnologies.com/",
    image: "/python.png",
  },
  {
    name: "HTML Coursework",
    issuer: "Great Learning",
    issueDate: "Verified",
    credentialId: "GL-HTML-CERT",
    badgeColor: "#A855F7",
    skillsVerified: ["HTML5", "Document Structure", "Web Semantics", "Forms & Media"],
    verifyUrl: "https://www.mygreatlearning.com/",
    image: "/htmljpg.jpg",
  },
  {
    name: "CSS Coursework",
    issuer: "Great Learning",
    issueDate: "Verified",
    credentialId: "GL-CSS-CERT",
    badgeColor: "#C084FC",
    skillsVerified: ["CSS3", "Responsive Layouts", "Flexbox & Grid", "UI Styling"],
    verifyUrl: "https://www.mygreatlearning.com/",
    image: "/css.jpg",
  },
];

export const QUERY_SCENARIOS: QueryScenario[] = [
  {
    id: "financial-kpi",
    title: "YoY Revenue & Gross Margin by Department",
    category: "Financial KPIs",
    description: "Calculates quarterly net revenue, gross profit, and year-over-year percentage growth using SQL window functions.",
    executionTime: "24ms",
    rowsMatched: 4,
    columns: ["department", "fiscal_year", "quarter", "revenue_usd", "gross_profit", "gross_margin_pct", "yoy_growth_pct"],
    results: [
      { department: "Enterprise Software", fiscal_year: "2024", quarter: "Q4", revenue_usd: "$780,000", gross_profit: "$275,000", gross_margin_pct: "35.2%", yoy_growth_pct: "+28.5%" },
      { department: "Enterprise Software", fiscal_year: "2024", quarter: "Q3", revenue_usd: "$630,000", gross_profit: "$220,000", gross_margin_pct: "34.9%", yoy_growth_pct: "+24.8%" },
      { department: "Cloud Infrastructure", fiscal_year: "2024", quarter: "Q4", revenue_usd: "$540,000", gross_profit: "$189,000", gross_margin_pct: "35.0%", yoy_growth_pct: "+21.2%" },
      { department: "Consulting Services", fiscal_year: "2024", quarter: "Q4", revenue_usd: "$390,000", gross_profit: "$128,000", gross_margin_pct: "32.8%", yoy_growth_pct: "+16.4%" },
    ],
    sql: `WITH DeptFinancials AS (
  SELECT 
    department,
    fiscal_year,
    quarter,
    SUM(revenue) AS total_revenue,
    SUM(gross_profit) AS total_gross_profit
  FROM finance.fct_revenue_ledger
  GROUP BY department, fiscal_year, quarter
)
SELECT 
  department,
  fiscal_year,
  quarter,
  total_revenue,
  total_gross_profit,
  ROUND((total_gross_profit / total_revenue) * 100, 1) AS gross_margin_pct,
  ROUND(((total_revenue - LAG(total_revenue) OVER(PARTITION BY department, quarter ORDER BY fiscal_year)) 
         / LAG(total_revenue) OVER(PARTITION BY department, quarter ORDER BY fiscal_year)) * 100, 1) AS yoy_growth_pct
FROM DeptFinancials
ORDER BY fiscal_year DESC, quarter DESC;`,
    insight: "Enterprise Software delivered strong 35.2% margins and sustained +28.5% YoY revenue acceleration.",
  },
  {
    id: "data-quality-cleaning",
    title: "Data Migration QA & Duplicate Audit Check",
    category: "Data Quality & Cleaning",
    description: "Identifies duplicate customer records and validates source-to-target row count integrity.",
    executionTime: "18ms",
    rowsMatched: 4,
    columns: ["source_table", "source_rows", "target_rows", "duplicate_records", "null_key_count", "qa_status"],
    results: [
      { source_table: "tbl_customer_master", source_rows: 145200, target_rows: 145200, duplicate_records: 0, null_key_count: 0, qa_status: "PASSED (100%)" },
      { source_table: "tbl_order_transactions", source_rows: 520400, target_rows: 520400, duplicate_records: 0, null_key_count: 0, qa_status: "PASSED (100%)" },
      { source_table: "tbl_product_catalog", source_rows: 18450, target_rows: 18450, duplicate_records: 0, null_key_count: 0, qa_status: "PASSED (100%)" },
      { source_table: "tbl_regional_branches", source_rows: 480, target_rows: 480, duplicate_records: 0, null_key_count: 0, qa_status: "PASSED (100%)" },
    ],
    sql: `SELECT 
  source_table,
  COUNT(source_record_id) AS source_rows,
  COUNT(target_record_id) AS target_rows,
  COUNT(*) - COUNT(DISTINCT record_id) AS duplicate_records,
  SUM(CASE WHEN primary_key IS NULL THEN 1 ELSE 0 END) AS null_key_count,
  CASE 
    WHEN COUNT(source_record_id) = COUNT(target_record_id) 
         AND COUNT(*) = COUNT(DISTINCT record_id) THEN 'PASSED (100%)'
    ELSE 'FLAGGED FOR QA'
  END AS qa_status
FROM migration_audit.recon_log
GROUP BY source_table;`,
    insight: "100% reconciliation achieved with zero duplicate or missing primary keys across all target tables.",
  },
  {
    id: "regional-sales",
    title: "Regional Sales Performance & Discount Velocity",
    category: "Regional Trends",
    description: "Analyzes regional sales performance, order counts, and discount impact on net sales.",
    executionTime: "22ms",
    rowsMatched: 4,
    columns: ["region", "total_orders", "gross_sales", "avg_discount_pct", "net_sales_usd", "market_share"],
    results: [
      { region: "South Region", total_orders: 45200, gross_sales: "$540,000", avg_discount_pct: "8.5%", net_sales_usd: "$494,100", market_share: "42.0%" },
      { region: "West Region", total_orders: 34100, gross_sales: "$390,000", avg_discount_pct: "9.2%", net_sales_usd: "$354,120", market_share: "30.1%" },
      { region: "North Region", total_orders: 28400, gross_sales: "$310,000", avg_discount_pct: "7.8%", net_sales_usd: "$285,820", market_share: "24.3%" },
      { region: "East Region", total_orders: 19800, gross_sales: "$220,000", avg_discount_pct: "6.5%", net_sales_usd: "$205,700", market_share: "17.5%" },
    ],
    sql: `SELECT 
  region,
  COUNT(DISTINCT order_id) AS total_orders,
  SUM(quantity * unit_price) AS gross_sales,
  ROUND(AVG(discount_pct) * 100, 1) AS avg_discount_pct,
  ROUND(SUM(quantity * unit_price * (1 - discount_pct)), 2) AS net_sales_usd,
  ROUND(100.0 * SUM(quantity * unit_price) / SUM(SUM(quantity * unit_price)) OVER(), 1) AS market_share
FROM sales.fct_orders
GROUP BY region
ORDER BY net_sales_usd DESC;`,
    insight: "South Region dominates market share at 42%, maintaining healthy net margins under an 8.5% discount profile.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Indhu demonstrates exceptional diligence in data validation and QA. Her ability to identify edge-case duplicate records and automate Excel/SQL conversion reconciliation ensured zero data loss during our migration deliverables.",
    author: "Technical Lead",
    role: "Quality Assurance & Data Conversion",
    company: "HTC Global Services",
    avatarColor: "#9333EA",
  },
  {
    quote: "Indhu's Financial Performance Dashboard in Power BI made complex YoY tracking effortless. Her mastery of DAX measures and Power Query ETL transformed raw transaction spreadsheets into clear decision-ready visuals.",
    author: "Project Mentor",
    role: "Business Intelligence & Analytics",
    company: "Data Analytics Project Review",
    avatarColor: "#7E22CE",
  },
  {
    quote: "Strong technical foundation in Python, Pandas, and SQL. Indhu approaches exploratory data analysis with genuine analytical rigor, consistently delivering clean data models and insightful trend charts.",
    author: "Senior Analyst Instructor",
    role: "Python Data Science & SQL",
    company: "Besant Technologies",
    avatarColor: "#A855F7",
  },
];
