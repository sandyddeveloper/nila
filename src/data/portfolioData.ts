export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Python & ML" | "SQL & Warehousing" | "Power BI & Tableau" | "A/B Testing & Stats";
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
}

export interface QueryScenario {
  id: string;
  title: string;
  category: "Customer Analytics" | "Revenue & Sales" | "Cohort Retention" | "Risk & Anomaly";
  description: string;
  sql: string;
  executionTime: string;
  rowsMatched: number;
  results: Record<string, any>[];
  columns: string[];
  insight: string;
}

export const PERSONAL_INFO = {
  name: "INDHU S",
  role: "Senior Data Analyst & Business Intelligence Specialist",
  tagline: "Translating 100M+ Data Points into High-Impact Strategic Business Decisions",
  location: "Bangalore, India (Open to Remote / Global Relocation)",
  email: "indhu.s.analytics@gmail.com",
  linkedin: "https://linkedin.com/in/indhu-s-analytics",
  github: "https://github.com/indhu-s-data",
  kaggle: "https://kaggle.com/indhu_s_data",
  medium: "https://medium.com/@indhu.analytics",
  phone: "+91 98765 43210",
  bio: "Results-driven Senior Data Analyst with 5+ years of experience delivering predictive modeling, end-to-end automated ETL data pipelines, and executive BI dashboards. Proven track record of turning complex, noisy multi-terabyte datasets into revenue-generating business insights, reducing churn by 24%, and automating over 300+ monthly executive reporting hours.",
  availability: "Available for Full-time Roles & High-Impact Consulting",
  heroStats: [
    { value: "99.4%", label: "Model Accuracy & Data Quality", subtext: "Across production models" },
    { value: "$4.8M+", label: "Quantified Revenue & Cost Savings", subtext: "Driven by data optimizations" },
    { value: "35M+", label: "Records Processed & Modeled", subtext: "SQL & Cloud Warehouses" },
    { value: "70+", label: "Executive BI Dashboards", subtext: "Power BI & Tableau" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "customer-churn-ltv",
    title: "OmniChannel Customer Churn & Lifetime Value (LTV) Prediction Engine",
    subtitle: "End-to-end Machine Learning pipeline predicting churn risk with 92.8% ROC-AUC and optimizing customer retention spend.",
    category: "Python & ML",
    featured: true,
    impactMetric: "-24.6%",
    impactLabel: "Churn Rate Reduction",
    tags: ["Python", "XGBoost", "Scikit-Learn", "FastAPI", "PostgreSQL", "SHAP"],
    tools: ["Python", "Pandas", "Scikit-Learn", "PostgreSQL", "Streamlit", "Docker"],
    summary: "Engineered a predictive customer intelligence system for an e-commerce giant with 1.4M active subscribers. Developed gradient boosted decision trees with SHAP interpretability to identify high-risk customer cohorts 45 days before churn.",
    problem: "The client was suffering from an escalating 7.8% monthly subscriber churn rate, spending $180k/month on blind retargeting discounts that had low ROI.",
    approach: [
      "Extracted and cleansed 3.2M transaction and web event logs from PostgreSQL and Snowflake.",
      "Engineered 48 behavioral features including RFM scores, recency degradation index, and support ticket velocity.",
      "Trained and hyper-tuned XGBoost, LightGBM, and Random Forest models with stratified 5-fold cross validation.",
      "Utilized SHAP (SHapley Additive exPlanations) values to empower the marketing team with individual churn drivers.",
      "Containerized a FastAPI scoring endpoint returning real-time churn probability scores within 35ms."
    ],
    dataset: {
      name: "OmniChannel E-commerce Transactions & Clickstream",
      records: "3,250,000+",
      features: "48 behavioral & transactional variables",
      source: "Production PostgreSQL + Snowflake Data Lake",
    },
    keyInsights: [
      {
        title: "Support Ticket Escalation",
        stat: "4.2x Higher Churn",
        description: "Users who logged >2 support tickets in 30 days had a 4.2x higher churn likelihood without proactive intervention.",
      },
      {
        title: "Discount Cannibalization",
        stat: "63% Waste",
        description: "63% of blast discount codes were redeemed by organic high-loyalty users who had <2% baseline churn probability.",
      },
      {
        title: "Retention Campaign ROI",
        stat: "+310% Uplift",
        description: "Targeted interventions on the top 15% at-risk tier preserved $1.2M in annual recurring subscription revenue.",
      },
    ],
    sqlSnippet: `-- Calculate 30-day Recency Degradation & RFM Cohort Scores
WITH CustomerActivity AS (
  SELECT 
    user_id,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(order_value_usd) AS total_spend,
    MAX(created_at) AS last_order_date,
    CURRENT_DATE - MAX(created_at)::DATE AS recency_days,
    COUNT(CASE WHEN support_tickets > 0 THEN 1 END) AS total_tickets
  FROM analytics.fct_orders
  WHERE created_at >= NOW() - INTERVAL '365 days'
  GROUP BY user_id
),
RFM_Scores AS (
  SELECT 
    user_id,
    total_orders,
    total_spend,
    recency_days,
    NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,
    NTILE(5) OVER (ORDER BY total_orders ASC) AS f_score,
    NTILE(5) OVER (ORDER BY total_spend ASC) AS m_score
  FROM CustomerActivity
)
SELECT 
  user_id,
  r_score, f_score, m_score,
  (r_score * 0.4 + f_score * 0.3 + m_score * 0.3) AS composite_churn_risk_index
FROM RFM_Scores
ORDER BY composite_churn_risk_index DESC
LIMIT 100;`,
    pythonSnippet: `# XGBoost Churn Classifier Pipeline with SHAP Explainability
import numpy as np
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, roc_auc_score
import shap

# Load feature matrix
df = pd.read_parquet("data/customer_features_engineered.parquet")
X = df.drop(columns=["user_id", "is_churned_90d"])
y = df["is_churned_90d"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

# Optimal hyperparameters via Optuna
params = {
    "n_estimators": 350,
    "max_depth": 6,
    "learning_rate": 0.035,
    "subsample": 0.85,
    "colsample_bytree": 0.8,
    "scale_pos_weight": 3.2,
    "eval_metric": "auc"
}

model = xgb.XGBClassifier(**params)
model.fit(X_train, y_train, eval_set=[(X_test, y_test)], verbose=False)

preds_proba = model.predict_proba(X_test)[:, 1]
print(f"Test ROC-AUC Score: {roc_auc_score(y_test, preds_proba):.4f}")

# Extract Top SHAP Drivers
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)
print("Top Feature Drivers:", pd.Series(np.abs(shap_values).mean(0), index=X.columns).nlargest(5))`,
    chartData: {
      type: "area",
      xKey: "month",
      data: [
        { month: "Jan", baselineChurn: 7.8, predictedRisk: 7.4, actualWithAI: 6.9, savedRevenue: 45 },
        { month: "Feb", baselineChurn: 8.1, predictedRisk: 7.9, actualWithAI: 6.4, savedRevenue: 78 },
        { month: "Mar", baselineChurn: 8.4, predictedRisk: 8.2, actualWithAI: 5.9, savedRevenue: 110 },
        { month: "Apr", baselineChurn: 7.9, predictedRisk: 7.6, actualWithAI: 5.4, savedRevenue: 145 },
        { month: "May", baselineChurn: 8.3, predictedRisk: 8.0, actualWithAI: 5.1, savedRevenue: 185 },
        { month: "Jun", baselineChurn: 8.6, predictedRisk: 8.3, actualWithAI: 4.8, savedRevenue: 230 },
      ],
      dataKeys: ["baselineChurn", "actualWithAI"],
      colors: ["#E879F9", "#9333EA"],
    },
    deliverables: [
      "Interactive Streamlit Executive Churn Dashboard",
      "Production automated daily batch scoring pipeline in Airflow",
      "Marketing cohort webhook alerts for high-value churn risks",
      "Complete model card and validation documentation"
    ],
  },
  {
    id: "supply-chain-intelligence",
    title: "Global Supply Chain Logistics & Inventory Stockout Optimizer",
    subtitle: "Enterprise Power BI dashboard suite with dbt modeling, optimizing $14M inventory across 18 international fulfillment hubs.",
    category: "Power BI & Tableau",
    featured: true,
    impactMetric: "-38.2%",
    impactLabel: "Stockout Incidents Reduced",
    tags: ["Power BI", "DAX", "dbt", "PostgreSQL", "Supply Chain", "Tableau"],
    tools: ["Power BI", "DAX Studio", "dbt Core", "SQL", "Excel PowerPivot", "Figma"],
    summary: "Built a consolidated Global Supply Chain Control Tower integrating inventory telemetry, port congestion lead times, and demand elasticity to prevent regional stockouts and deadstock holding costs.",
    problem: "Supply chain managers operated in regional silos, experiencing an average of 42 critical stockout days per year and $1.8M in expedited air freight surcharges.",
    approach: [
      "Built dimensional Star-Schema models in dbt transforming raw ERP and warehouse telemetry data.",
      "Engineered dynamic DAX measures calculating Safety Stock, Dynamic Reorder Points (ROP), and Supplier Lead Time Variance.",
      "Designed an executive UI in Power BI featuring custom bookmarks, what-if parameter sliders, and automated drill-through pages.",
      "Implemented automated scheduled refreshes and row-level security (RLS) across 4 global geographic divisions."
    ],
    dataset: {
      name: "Global Warehouse Inventory & Shipment Telemetry",
      records: "8,900,000+",
      features: "SKU velocity, lead times, safety buffers, landed costs",
      source: "SAP ERP + PostgreSQL + dbt Data Warehouse",
    },
    keyInsights: [
      {
        title: "Lead Time Volatility",
        stat: "+14.3 Days",
        description: "Maritime freight lead times fluctuated +14.3 days beyond vendor SLAs during peak quarters.",
      },
      {
        title: "Deadstock Elimination",
        stat: "$640K Recovered",
        description: "Identified and liquidated 142 slow-moving SKUs sitting in tier-1 distribution centers >180 days.",
      },
      {
        title: "Expedited Freight Savings",
        stat: "-52% Cost",
        description: "Predictive reorder alerts slashed emergency airfreight costs by more than half.",
      },
    ],
    sqlSnippet: `-- Calculate Dynamic Safety Stock and Reorder Points (ROP)
WITH DailyDemandStats AS (
  SELECT 
    sku_id,
    warehouse_id,
    AVG(units_sold) AS avg_daily_demand,
    STDDEV_SAMP(units_sold) AS std_daily_demand,
    AVG(lead_time_days) AS avg_lead_time,
    STDDEV_SAMP(lead_time_days) AS std_lead_time
  FROM analytics.fct_daily_inventory_movement
  WHERE date_key >= CURRENT_DATE - 180
  GROUP BY sku_id, warehouse_id
)
SELECT 
  sku_id,
  warehouse_id,
  ROUND(avg_daily_demand, 2) AS avg_daily_demand,
  -- Safety Stock Formula: Z * sqrt( (Avg_LT * Var_Demand) + (Avg_Demand^2 * Var_LT) ) with Z=1.65 (95% Service Level)
  ROUND(1.65 * SQRT( (avg_lead_time * POWER(std_daily_demand, 2)) + (POWER(avg_daily_demand, 2) * POWER(std_lead_time, 2)) )) AS recommended_safety_stock,
  ROUND((avg_daily_demand * avg_lead_time) + (1.65 * SQRT((avg_lead_time * POWER(std_daily_demand, 2)) + (POWER(avg_daily_demand, 2) * POWER(std_lead_time, 2))))) AS dynamic_reorder_point
FROM DailyDemandStats;`,
    chartData: {
      type: "bar",
      xKey: "quarter",
      data: [
        { quarter: "Q1", stockouts: 48, safetyBuffer: 18, fillRate: 88.2, airFreightCost: 340 },
        { quarter: "Q2", stockouts: 36, safetyBuffer: 26, fillRate: 92.4, airFreightCost: 280 },
        { quarter: "Q3", stockouts: 21, safetyBuffer: 32, fillRate: 96.1, airFreightCost: 190 },
        { quarter: "Q4", stockouts: 12, safetyBuffer: 38, fillRate: 98.6, airFreightCost: 110 },
      ],
      dataKeys: ["stockouts", "safetyBuffer"],
      colors: ["#C084FC", "#7E22CE"],
    },
    deliverables: [
      "Power BI Global Supply Chain Control Tower (12 interactive pages)",
      "Automated dbt models & lineage documentation",
      "Real-time Inventory Health KPI scorecard on Power BI Mobile App",
      "Executive summary slide deck presented to VP of Operations"
    ],
  },
  {
    id: "fintech-fraud-risk",
    title: "FinTech Real-Time Fraud Anomaly Detection & Scoring System",
    subtitle: "High-throughput SQL & Isolation Forest pipeline flagging illicit payment patterns with 99.1% precision.",
    category: "SQL & Warehousing",
    featured: true,
    impactMetric: "$2.4M+",
    impactLabel: "Fraudulent Losses Blocked",
    tags: ["SQL", "Snowflake", "Python", "Isolation Forest", "Risk Scoring", "dbt"],
    tools: ["Snowflake", "SQL", "Python", "Scikit-Learn", "Apache Airflow", "Metabase"],
    summary: "Architected a multi-tier fraud scoring engine analyzing 12M+ monthly card transactions in Snowflake to prevent unauthorized account takeovers, card testing rings, and synthetic identity fraud.",
    problem: "The financial institution experienced high chargeback rates (1.4% of GMV) and an overburdened manual fraud review queue with 85% false positive rates.",
    approach: [
      "Designed real-time window aggregation SQL queries in Snowflake to compute velocity metrics (e.g., transactions in last 5 mins across multiple merchants).",
      "Implemented unsupervised Isolation Forest and Supervised Random Forest models for anomaly scoring.",
      "Constructed a multi-stage risk decision engine: Auto-Approve (<15 score), Step-Up Auth/2FA (15-70 score), Auto-Decline (>70 score).",
      "Reduced manual review volume by 72% while increasing fraud catch rate by 41%."
    ],
    dataset: {
      name: "FinTech Card Payment & Device Fingerprint Logs",
      records: "14,500,000+",
      features: "Geo-velocity, IP risk score, merchant category, time delta",
      source: "Snowflake Cloud Data Warehouse",
    },
    keyInsights: [
      {
        title: "Velocity Anomaly Threshold",
        stat: ">3 Txns / 90s",
        description: "Over 82% of card-testing attacks showed >3 transactions across distinct payment gateways in under 90 seconds.",
      },
      {
        title: "False Positive Reduction",
        stat: "85% -> 12%",
        description: "Incorporating device fingerprint hash variance reduced legitimate customer friction drastically.",
      },
      {
        title: "Annual Chargeback Savings",
        stat: "$2.4M Saved",
        description: "Chargeback ratios dropped from 1.42% to 0.18%, safely below Visa/Mastercard monitoring thresholds.",
      },
    ],
    sqlSnippet: `-- Snowflake Multi-Window Fraud Velocity & Geo-Distance Risk Scoring
WITH TxnVelocity AS (
  SELECT 
    transaction_id,
    card_token,
    user_id,
    amount_usd,
    merchant_country,
    ip_country,
    created_at,
    -- Count transactions on same card in past 10 minutes
    COUNT(*) OVER(
      PARTITION BY card_token 
      ORDER BY created_at 
      RANGE BETWEEN INTERVAL '10 minutes' PRECEDING AND CURRENT ROW
    ) - 1 AS txns_last_10m,
    -- Sum of amounts on same card in past 60 minutes
    SUM(amount_usd) OVER(
      PARTITION BY card_token 
      ORDER BY created_at 
      RANGE BETWEEN INTERVAL '1 hour' PRECEDING AND CURRENT ROW
    ) AS volume_last_1h,
    -- Previous transaction location to calculate impossible velocity
    LAG(ip_country) OVER(PARTITION BY user_id ORDER BY created_at) AS prev_country,
    LAG(created_at) OVER(PARTITION BY user_id ORDER BY created_at) AS prev_txn_time
  FROM prod_payments.fct_transactions
  WHERE created_at >= DATEADD(day, -30, CURRENT_TIMESTAMP())
)
SELECT 
  transaction_id,
  card_token,
  amount_usd,
  txns_last_10m,
  volume_last_1h,
  CASE 
    WHEN prev_country IS NOT NULL AND prev_country != ip_country 
         AND DATEDIFF(minute, prev_txn_time, created_at) < 60 THEN 95 -- Impossible travel anomaly
    WHEN txns_last_10m >= 4 THEN 85
    WHEN volume_last_1h > 5000 AND amount_usd > 1500 THEN 75
    ELSE 10
  END AS rule_risk_score
FROM TxnVelocity
WHERE txns_last_10m >= 2 OR amount_usd > 1000;`,
    chartData: {
      type: "line",
      xKey: "month",
      data: [
        { month: "Jan", detectedFraud: 120, falsePositives: 480, blockedUSD: 180 },
        { month: "Feb", detectedFraud: 145, falsePositives: 390, blockedUSD: 240 },
        { month: "Mar", detectedFraud: 190, falsePositives: 250, blockedUSD: 390 },
        { month: "Apr", detectedFraud: 240, falsePositives: 180, blockedUSD: 520 },
        { month: "May", detectedFraud: 285, falsePositives: 110, blockedUSD: 740 },
        { month: "Jun", detectedFraud: 310, falsePositives: 65, blockedUSD: 910 },
      ],
      dataKeys: ["detectedFraud", "falsePositives"],
      colors: ["#9333EA", "#C084FC"],
    },
    deliverables: [
      "Production SQL Transformation Layer in Snowflake",
      "Real-time Metabase Security & Anomaly Ops Monitor",
      "Comprehensive Risk Threshold Tuning Playbook",
      "Airflow DAGs for hourly score batch calculations"
    ],
  },
  {
    id: "ab-testing-cro-framework",
    title: "E-Commerce A/B Testing & Bayesian Conversion Optimization",
    subtitle: "Robust statistical experimentation framework evaluating 35+ product feature launches with sample-size power calculators.",
    category: "A/B Testing & Stats",
    featured: false,
    impactMetric: "+18.4%",
    impactLabel: "Checkout Conversion Lift",
    tags: ["A/B Testing", "Bayesian Stats", "Python", "Hypothesis Testing", "CRO"],
    tools: ["Python", "Statsmodels", "SciPy", "SQL", "Tableau", "Jupyter"],
    summary: "Built a standardized end-to-end A/B testing statistical engine for a multi-million user marketplace, mitigating Peeking Problem biases with sequential testing and Bayesian posterior probability modeling.",
    problem: "Product managers were prematurely calling experiment winners based on basic Chi-Square p-values, resulting in false-positive feature rollouts and flat revenue quarters.",
    approach: [
      "Built statistical sample size calculators factoring in Minimum Detectable Effect (MDE), statistical power (80%), and significance (α=0.05).",
      "Introduced Bayesian A/B testing with Beta-Binomial conjugate priors to report intuitive 'Probability of B beating A'.",
      "Implemented automated SRM (Sample Ratio Mismatch) diagnostic checkers in SQL to catch telemetry skew early.",
      "Designed an automated self-serve Tableau Experimentation Hub tracking live experiment runtimes."
    ],
    dataset: {
      name: "Marketplace Checkout Funnel & Event Telemetry",
      records: "5,400,000+ sessions",
      features: "Funnel dropoff rates, variant assignments, cart values",
      source: "Segment + BigQuery Warehouse",
    },
    keyInsights: [
      {
        title: "1-Click Checkout Lift",
        stat: "+18.4% Uplift",
        description: "The simplified 1-Click payment modal generated statistically significant lift (p=0.003, Bayes Factor=28.4).",
      },
      {
        title: "SRM Skew Caught",
        stat: "3 Invalided Tests",
        description: "SRM testing caught 3 corrupted experiments caused by iOS Safari tracking prevention before bad decisions were made.",
      },
      {
        title: "Annualized Run Rate",
        stat: "+$3.1M GMV",
        description: "Validated feature rollouts added $3.1M in annualized incremental Gross Merchandise Value.",
      },
    ],
    sqlSnippet: `-- Automated Sample Ratio Mismatch (SRM) Chi-Square Test
WITH ExperimentTraffic AS (
  SELECT 
    experiment_id,
    variant_name,
    COUNT(DISTINCT session_id) AS observed_count
  FROM prod_analytics.fct_experiment_events
  WHERE experiment_id = 'exp_checkout_v3'
  GROUP BY experiment_id, variant_name
),
ExpectedAllocations AS (
  SELECT 
    experiment_id,
    variant_name,
    observed_count,
    SUM(observed_count) OVER(PARTITION BY experiment_id) AS total_traffic,
    0.50 AS expected_ratio -- Assuming 50/50 split
  FROM ExperimentTraffic
)
SELECT 
  experiment_id,
  variant_name,
  observed_count,
  ROUND(total_traffic * expected_ratio, 2) AS expected_count,
  ROUND(POWER(observed_count - (total_traffic * expected_ratio), 2) / (total_traffic * expected_ratio), 4) AS chi_square_stat
FROM ExpectedAllocations;`,
    pythonSnippet: `# Bayesian A/B Testing with Beta-Binomial Conjugate Priors
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt

def evaluate_bayesian_ab_test(trials_a, conversions_a, trials_b, conversions_b, simulations=100000):
    # Uninformative Beta(1, 1) prior
    prior_alpha, prior_beta = 1, 1
    
    # Posterior parameters
    posterior_a = stats.beta(prior_alpha + conversions_a, prior_beta + (trials_a - conversions_a))
    posterior_b = stats.beta(prior_alpha + conversions_b, prior_beta + (trials_b - conversions_b))
    
    # Monte Carlo simulation draws
    samples_a = posterior_a.rvs(simulations)
    samples_b = posterior_b.rvs(simulations)
    
    prob_b_superior = (samples_b > samples_a).mean()
    expected_lift = ((samples_b - samples_a) / samples_a).mean() * 100
    credible_interval_95 = np.percentile((samples_b - samples_a) / samples_a * 100, [2.5, 97.5])
    
    return {
        "prob_b_beats_a": prob_b_superior,
        "expected_relative_lift_pct": expected_lift,
        "ci_95": credible_interval_95
    }

results = evaluate_bayesian_ab_test(trials_a=45000, conversions_a=3825, trials_b=45200, conversions_b=4530)
print(f"Probability B beats A: {results['prob_b_beats_a'] * 100:.2f}%")
print(f"Expected Uplift: +{results['expected_relative_lift_pct']:.2f}%")`,
    chartData: {
      type: "line",
      xKey: "day",
      data: [
        { day: "Day 1", controlCR: 8.5, variantCR: 8.9, sampleSizeK: 8 },
        { day: "Day 3", controlCR: 8.4, variantCR: 9.3, sampleSizeK: 24 },
        { day: "Day 7", controlCR: 8.5, variantCR: 9.8, sampleSizeK: 52 },
        { day: "Day 10", controlCR: 8.5, variantCR: 10.1, sampleSizeK: 74 },
        { day: "Day 14", controlCR: 8.5, variantCR: 10.06, sampleSizeK: 90 },
      ],
      dataKeys: ["controlCR", "variantCR"],
      colors: ["#A855F7", "#6B21A8"],
    },
    deliverables: [
      "Open-source Python Bayesian Experimentation CLI",
      "Tableau Self-Serve Live Experimentation Tracker",
      "Experimentation Best Practices Playbook for Product Managers",
      "SRM Automated Slack Webhook Alerts"
    ],
  },
  {
    id: "healthcare-readmission-analytics",
    title: "Healthcare 30-Day Patient Readmission Risk & Clinical KPI Suite",
    subtitle: "Predictive clinical analytics in R and BigQuery aiding physicians in stratifying high-risk post-discharge patients.",
    category: "Python & ML",
    featured: false,
    impactMetric: "-19.2%",
    impactLabel: "30-Day Hospital Readmissions",
    tags: ["R", "BigQuery", "Survival Analysis", "Healthcare Analytics", "Tableau"],
    tools: ["R", "BigQuery", "Tableau", "SQL", "Logistic Regression", "Statsmodels"],
    summary: "Built an analytical clinical decision support dashboard identifying readmission vulnerability indicators across 45,000 multi-diagnosis inpatient stays to comply with CMS Hospital Readmissions Reduction Program (HRRP).",
    problem: "Hospital incurred $940k in CMS penalties due to readmission rates exceeding national medians for CHF (Congestive Heart Failure) and COPD patient cohorts.",
    approach: [
      "Extracted and de-identified EHR records (electronic health records) stored in Google BigQuery.",
      "Performed Kaplan-Meier survival curves and Cox proportional hazards regression to model discharge time-to-event.",
      "Constructed a LACE Index automated calculation engine cross-referenced with comorbidity Charlson Index.",
      "Designed HIPAA-compliant role-based Tableau clinical workbenches for head nurses and care coordinators."
    ],
    dataset: {
      name: "De-identified Inpatient Clinical Discharge Records",
      records: "45,000+ patient episodes",
      features: "Length of stay, comorbidity ICD-10 codes, lab test counts, medication count",
      source: "Google Cloud Healthcare API + BigQuery",
    },
    keyInsights: [
      {
        title: "Medication Reconciliation",
        stat: "3.1x Risk Factor",
        description: "Patients discharged with >8 distinct prescribed medications without follow-up pharmacy consult had 3.1x readmission rates.",
      },
      {
        title: "CMS Penalty Avoidance",
        stat: "$940K Saved",
        description: "Brought CHF readmission metrics back under national threshold, saving 100% of expected penalties.",
      },
      {
        title: "High-Risk Stratification",
        stat: "Top 12% Patients",
        description: "Targeted post-discharge nurse phone calls on the top 12% risk bracket resolved 64% of potential complications.",
      },
    ],
    chartData: {
      type: "radar",
      xKey: "metric",
      data: [
        { metric: "Comorbidity Score", highRisk: 88, lowRisk: 22 },
        { metric: "Length of Stay", highRisk: 78, lowRisk: 30 },
        { metric: "ER Visits (6mo)", highRisk: 92, lowRisk: 15 },
        { metric: "Medication Count", highRisk: 84, lowRisk: 28 },
        { metric: "Prior Admissions", highRisk: 95, lowRisk: 10 },
      ],
      dataKeys: ["highRisk", "lowRisk"],
      colors: ["#9333EA", "#C084FC"],
    },
    deliverables: [
      "Tableau Clinical Readmissions Risk Dashboard",
      "Automated BigQuery Scheduled Clinical Scoring Views",
      "Executive HRRP Compliance Summary Presentation"
    ],
  },
  {
    id: "saas-cohort-retention",
    title: "SaaS Product Engagement & N-Day Cohort Retention Analytics",
    subtitle: "Granular user event telemetry pipeline tracking feature adoption, activation milestones, and user drop-off curves.",
    category: "SQL & Warehousing",
    featured: false,
    impactMetric: "+32.5%",
    impactLabel: "Week-4 Active Retention",
    tags: ["SQL", "PostgreSQL", "Metabase", "Cohort Analysis", "Product Analytics"],
    tools: ["PostgreSQL", "SQL", "Metabase", "Python", "Mixpanel Telemetry", "Seaborn"],
    summary: "Transformed millions of raw frontend clickstream events into clean N-day cohort retention matrices and user activation funnels for a B2B SaaS platform with 250k monthly active users.",
    problem: "The product growth team had low visibility into why newly onboarded workspace accounts were failing to upgrade past their 14-day free trials.",
    approach: [
      "Modeled user lifecycle states (New, Activated, Churned, Resurrected) using SQL window functions.",
      "Identified the product's 'Aha! Moment' threshold: Workspaces creating >=3 automated workflows within 72 hours retained at 4.8x higher rates.",
      "Constructed dynamic cohort retention heatmaps in Metabase and automated weekly digest delivery to executives.",
      "Partnered with growth engineering to revamp the onboarding checklist toward workflow automation."
    ],
    dataset: {
      name: "B2B SaaS Workspace Telemetry & Feature Adoption Events",
      records: "18,200,000+ telemetry events",
      features: "Event name, workspace tier, team size, feature usage count",
      source: "PostgreSQL Event Store + Segment Data Pipe",
    },
    keyInsights: [
      {
        title: "The Core 'Aha!' Moment",
        stat: "3 Workflows in 72h",
        description: "Teams that configured 3 integrations within 3 days converted to paid enterprise plans at 41% vs 6.2% baseline.",
      },
      {
        title: "Onboarding Bottleneck",
        stat: "44% Dropoff",
        description: "Discovered 44% of dropoffs occurred at the Slack auth step due to missing organization admin permissions.",
      },
      {
        title: "Trial-to-Paid Conversion",
        stat: "+32.5% Boost",
        description: "Revamped onboarding flow lifted 14-day trial-to-paid conversion from 9.2% to 12.2%.",
      },
    ],
    chartData: {
      type: "area",
      xKey: "week",
      data: [
        { week: "W0", oldCohort: 100, newCohortWithAha: 100 },
        { week: "W1", oldCohort: 48, newCohortWithAha: 72 },
        { week: "W2", oldCohort: 32, newCohortWithAha: 59 },
        { week: "W3", oldCohort: 24, newCohortWithAha: 51 },
        { week: "W4", oldCohort: 19, newCohortWithAha: 46 },
        { week: "W8", oldCohort: 14, newCohortWithAha: 42 },
      ],
      dataKeys: ["newCohortWithAha", "oldCohort"],
      colors: ["#9333EA", "#E879F9"],
    },
    deliverables: [
      "Interactive Metabase Cohort Heatmap Explorer",
      "Executive Growth & Retention KPI Slide Deck",
      "PostgreSQL Stored Procedures for daily lifecycle transitions"
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages & Querying",
    iconName: "Code",
    description: "Core analytical programming, script automation, and querying multi-terabyte datasets.",
    skills: [
      { name: "SQL (PostgreSQL, Snowflake, BigQuery)", level: 98, experience: "5+ Years", highlight: true, tags: ["Window Functions", "CTEs", "Query Optimization", "Indexing"] },
      { name: "Python (Pandas, NumPy, Polars)", level: 95, experience: "5+ Years", highlight: true, tags: ["Data Wrangling", "Automation", "Vectorization", "OOP"] },
      { name: "R (Tidyverse, ggplot2, Caret)", level: 82, experience: "3+ Years", tags: ["Survival Analysis", "Biostatistics", "Hypothesis Testing"] },
      { name: "DAX & Power Query (M)", level: 94, experience: "4+ Years", highlight: true, tags: ["Calculated Measures", "Context Transition", "Time Intelligence"] },
      { name: "Bash & Shell Scripting", level: 80, experience: "3+ Years", tags: ["Automation", "Cron", "Linux CLI"] },
    ],
  },
  {
    category: "BI & Visual Analytics",
    iconName: "BarChart3",
    description: "Transforming raw metrics into intuitive, C-level executive dashboards and decision suites.",
    skills: [
      { name: "Power BI (Desktop, Service, Gateway)", level: 96, experience: "4+ Years", highlight: true, tags: ["RLS", "Drillthrough", "Data Modeling", "Embedded"] },
      { name: "Tableau (Desktop & Server)", level: 92, experience: "4+ Years", highlight: true, tags: ["LOD Expressions", "Parameters", "Calculated Fields"] },
      { name: "Looker Studio & Metabase", level: 88, experience: "3+ Years", tags: ["Embedded BI", "Self-Serve Explorers", "SQL Dashboards"] },
      { name: "Advanced Excel & VBA", level: 95, experience: "5+ Years", highlight: true, tags: ["XLOOKUP", "Pivot Tables", "Power Query", "Financial Modeling"] },
      { name: "Data Storytelling & UX Design", level: 90, experience: "4+ Years", tags: ["Figma Wireframes", "Cognitive Load Reduction", "Executive Decks"] },
    ],
  },
  {
    category: "Data Warehousing & Engineering",
    iconName: "Database",
    description: "Architecting reliable, star-schema data models and automated scheduled pipelines.",
    skills: [
      { name: "Snowflake & Google BigQuery", level: 92, experience: "4+ Years", highlight: true, tags: ["Partitioning", "Clustering", "Snowpipe", "Cost Optimization"] },
      { name: "dbt (data build tool)", level: 88, experience: "3+ Years", highlight: true, tags: ["Data Lineage", "Testing", "Documentation", "Star-Schema"] },
      { name: "ETL / ELT Pipeline Design", level: 90, experience: "4+ Years", tags: ["Incremental Models", "Data Validation", "Schema Drift"] },
      { name: "Apache Airflow & Prefect", level: 82, experience: "3+ Years", tags: ["DAG Orchestration", "Backfilling", "Monitoring"] },
      { name: "Git & CI/CD Pipelines", level: 85, experience: "4+ Years", tags: ["Version Control", "GitHub Actions", "Code Review"] },
    ],
  },
  {
    category: "Statistical & Predictive Modeling",
    iconName: "BrainCircuit",
    description: "Applying rigorous mathematical techniques to extract trends, forecast demand, and test hypotheses.",
    skills: [
      { name: "A/B Testing & Bayesian Inference", level: 94, experience: "4+ Years", highlight: true, tags: ["Sample Size Calc", "SRM Checks", "Beta-Binomial", "Sequential Testing"] },
      { name: "Machine Learning (Scikit-Learn, XGBoost)", level: 90, experience: "4+ Years", highlight: true, tags: ["Classification", "Regression", "SHAP", "Cross-Validation"] },
      { name: "Time Series Forecasting (Prophet, ARIMA)", level: 86, experience: "3+ Years", tags: ["Seasonality Decomposition", "Trend Analysis", "Anomaly Detection"] },
      { name: "Customer Segmentation & RFM Clustering", level: 92, experience: "4+ Years", tags: ["K-Means", "PCA", "Hierarchical Clustering"] },
      { name: "Hypothesis Testing & Parametric Tests", level: 95, experience: "5+ Years", tags: ["ANOVA", "Chi-Square", "T-Tests", "Mann-Whitney U"] },
    ],
  },
];

export const CAREER_EXPERIENCES: CareerExperience[] = [
  {
    role: "Senior Data Analyst",
    company: "Apex Global Analytics Solutions",
    location: "Bangalore, India",
    period: "2023 - Present",
    type: "Full-Time",
    description: "Leading the Business Intelligence and Predictive Analytics team, partnering directly with VP of Product and Chief Commercial Officer to steer growth strategy and automated decisioning.",
    achievements: [
      "Engineered automated customer churn warning system in Python/XGBoost, slashing customer churn by 24.6% ($1.2M retained ARR).",
      "Designed and deployed 25+ enterprise Power BI dashboards with row-level security across 8 international business units.",
      "Optimized legacy Snowflake SQL queries and dbt models, reducing warehouse compute expenditures by 38% ($140k/yr).",
      "Mentored a team of 4 junior analysts on advanced DAX, dimensional modeling, and Bayesian A/B experimentation frameworks."
    ],
    techStack: ["Python", "SQL", "Power BI", "Snowflake", "dbt", "XGBoost", "FastAPI"],
  },
  {
    role: "Data Analyst & BI Specialist",
    company: "Vanguard Retail Technologies",
    location: "Bangalore, India",
    period: "2021 - 2023",
    type: "Full-Time",
    description: "Spearheaded supply chain analytics and customer lifetime value optimization for omnichannel e-commerce retail networks.",
    achievements: [
      "Constructed inventory stockout predictor in PostgreSQL and Tableau, reducing critical stockout incidents by 38.2%.",
      "Built self-serve marketing campaign performance portal in Metabase used daily by 60+ growth marketers.",
      "Conducted 35+ rigorous A/B experiments on checkout funnels, generating +18.4% conversion rate uplift.",
      "Automated over 120 hours of manual monthly spreadsheet reporting using Python and Pandas scheduled jobs."
    ],
    techStack: ["SQL", "Tableau", "PostgreSQL", "Python", "Pandas", "Metabase", "Statsmodels"],
  },
  {
    role: "Associate Data Analyst",
    company: "Cognitive Insights Lab",
    location: "Bangalore, India",
    period: "2019 - 2021",
    type: "Full-Time",
    description: "Delivered data wrangling, exploratory data analysis (EDA), and automated Excel/Power BI dashboards for international healthcare and financial services clients.",
    achievements: [
      "Extracted and validated multi-source clinical and transactional datasets across 15+ million records with 99.8% audit accuracy.",
      "Authored 50+ reusable SQL stored procedures and CTE templates for standardized team analytics.",
      "Co-authored data analysis reports presented to Fortune 500 executive stakeholders."
    ],
    techStack: ["SQL", "Excel VBA", "Power BI", "Python", "R", "Tableau"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    issueDate: "2024",
    credentialId: "MS-PL300-889104",
    badgeColor: "#9333EA",
    skillsVerified: ["Advanced DAX", "Power Query (M)", "Data Modeling", "Service Management", "Row-Level Security"],
    verifyUrl: "https://learn.microsoft.com/credentials",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    issueDate: "2023",
    credentialId: "GOOGLE-DA-994120",
    badgeColor: "#7E22CE",
    skillsVerified: ["R Programming", "SQL Data Cleaning", "Tableau Visuals", "Case Study Execution", "Data Ethics"],
    verifyUrl: "https://coursera.org/verify/professional-cert/google-data-analytics",
  },
  {
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    issueDate: "2023",
    credentialId: "AWS-DAS-441029",
    badgeColor: "#A855F7",
    skillsVerified: ["Amazon Athena", "Redshift", "AWS Glue", "Kinesis", "QuickSight"],
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    name: "Tableau Desktop Specialist",
    issuer: "Tableau / Salesforce",
    issueDate: "2022",
    credentialId: "TAB-DS-77192",
    badgeColor: "#C084FC",
    skillsVerified: ["LOD Expressions", "Interactive Dashboards", "Data Blending", "Statistical Visuals"],
    verifyUrl: "https://www.credly.com/org/tableau",
  },
];

export const QUERY_SCENARIOS: QueryScenario[] = [
  {
    id: "rfm-cohort",
    title: "Customer RFM Segmentation & Churn Risk Index",
    category: "Customer Analytics",
    description: "Calculates Recency, Frequency, and Monetary scores using NTILE window functions to group customers into actionable marketing tiers.",
    executionTime: "28ms",
    rowsMatched: 5,
    columns: ["customer_id", "recency_days", "orders_count", "total_spend_usd", "rfm_segment", "churn_risk"],
    results: [
      { customer_id: "CUST-9081", recency_days: 4, orders_count: 38, total_spend_usd: "$4,820", rfm_segment: "Champions / VIP", churn_risk: "Low (4%)" },
      { customer_id: "CUST-4122", recency_days: 12, orders_count: 22, total_spend_usd: "$2,940", rfm_segment: "Loyal Customers", churn_risk: "Low (9%)" },
      { customer_id: "CUST-7731", recency_days: 78, orders_count: 14, total_spend_usd: "$1,890", rfm_segment: "At Risk / Slipping", churn_risk: "High (74%)" },
      { customer_id: "CUST-1049", recency_days: 142, orders_count: 8, total_spend_usd: "$940", rfm_segment: "Hibernating", churn_risk: "Critical (89%)" },
      { customer_id: "CUST-6628", recency_days: 8, orders_count: 3, total_spend_usd: "$320", rfm_segment: "Promising New", churn_risk: "Low (12%)" },
    ],
    sql: `WITH CustomerMetrics AS (
  SELECT 
    customer_id,
    CURRENT_DATE - MAX(order_date)::DATE AS recency_days,
    COUNT(order_id) AS orders_count,
    SUM(order_value_usd) AS total_spend_usd
  FROM analytics.fct_orders
  GROUP BY customer_id
)
SELECT 
  customer_id,
  recency_days,
  orders_count,
  total_spend_usd,
  CASE 
    WHEN recency_days <= 14 AND orders_count >= 20 THEN 'Champions / VIP'
    WHEN recency_days <= 30 AND orders_count >= 10 THEN 'Loyal Customers'
    WHEN recency_days > 60 AND orders_count >= 10 THEN 'At Risk / Slipping'
    WHEN recency_days > 120 THEN 'Hibernating'
    ELSE 'Promising New'
  END AS rfm_segment
FROM CustomerMetrics
ORDER BY total_spend_usd DESC;`,
    insight: "High-value 'At Risk' users account for $680k in revenue potential if targeted with proactive winback sequences before day 90.",
  },
  {
    id: "cohort-retention-matrix",
    title: "Monthly Cohort Retention & MoM Degradation",
    category: "Cohort Retention",
    description: "Generates multi-month user retention rates normalized by sign-up cohort month.",
    executionTime: "34ms",
    rowsMatched: 4,
    columns: ["cohort_month", "initial_users", "month_1_pct", "month_2_pct", "month_3_pct", "month_6_pct"],
    results: [
      { cohort_month: "2024-01", initial_users: 12450, month_1_pct: "68.4%", month_2_pct: "54.2%", month_3_pct: "47.8%", month_6_pct: "41.5%" },
      { cohort_month: "2024-02", initial_users: 14100, month_1_pct: "71.2%", month_2_pct: "58.0%", month_3_pct: "51.1%", month_6_pct: "45.0%" },
      { cohort_month: "2024-03", initial_users: 15800, month_1_pct: "74.8%", month_2_pct: "62.4%", month_3_pct: "56.3%", month_6_pct: "49.8%" },
      { cohort_month: "2024-04 (New Onboarding)", initial_users: 18200, month_1_pct: "81.6%", month_2_pct: "70.2%", month_3_pct: "64.9%", month_6_pct: "58.2%" },
    ],
    sql: `WITH UserFirstMonth AS (
  SELECT user_id, DATE_TRUNC('month', MIN(created_at)) AS signup_cohort
  FROM analytics.dim_users GROUP BY user_id
),
ActivityMonths AS (
  SELECT DISTINCT a.user_id, u.signup_cohort,
    DATEDIFF('month', u.signup_cohort, DATE_TRUNC('month', a.event_time)) AS month_number
  FROM analytics.fct_user_activity a
  JOIN UserFirstMonth u ON a.user_id = u.user_id
)
SELECT 
  signup_cohort,
  COUNT(DISTINCT user_id) AS total_cohort_size,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN month_number = 1 THEN user_id END) / COUNT(DISTINCT user_id), 1) AS m1_retention_pct,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN month_number = 3 THEN user_id END) / COUNT(DISTINCT user_id), 1) AS m3_retention_pct
FROM ActivityMonths
GROUP BY signup_cohort ORDER BY signup_cohort DESC;`,
    insight: "The revised onboarding workflow introduced in April lifted Month-1 retention by +13.2% absolute points.",
  },
  {
    id: "fraud-anomaly",
    title: "Card Velocity Spike & Geolocation Anomaly Scoring",
    category: "Risk & Anomaly",
    description: "Flags impossible velocity travel anomalies and high-frequency card testing attempts in milliseconds.",
    executionTime: "19ms",
    rowsMatched: 4,
    columns: ["txn_id", "user_id", "amount", "txns_last_5m", "distance_km_1h", "risk_rating", "action_taken"],
    results: [
      { txn_id: "TX-99182", user_id: "USR-3382", amount: "$1,850.00", txns_last_5m: 5, distance_km_1h: 4200, risk_rating: "98/100", action_taken: "AUTO_BLOCKED" },
      { txn_id: "TX-99183", user_id: "USR-7712", amount: "$420.00", txns_last_5m: 4, distance_km_1h: 0, risk_rating: "76/100", action_taken: "STEP_UP_2FA" },
      { txn_id: "TX-99184", user_id: "USR-9120", amount: "$3,100.00", txns_last_5m: 1, distance_km_1h: 8400, risk_rating: "92/100", action_taken: "AUTO_BLOCKED" },
      { txn_id: "TX-99185", user_id: "USR-1144", amount: "$89.50", txns_last_5m: 1, distance_km_1h: 0, risk_rating: "6/100", action_taken: "APPROVED" },
    ],
    sql: `SELECT 
  t.txn_id,
  t.user_id,
  t.amount_usd,
  COUNT(*) OVER(PARTITION BY t.card_token ORDER BY t.created_at RANGE BETWEEN INTERVAL '5 minutes' PRECEDING AND CURRENT ROW) AS txns_last_5m,
  CASE 
    WHEN t.geo_country != LAG(t.geo_country) OVER(PARTITION BY t.user_id ORDER BY t.created_at)
         AND DATEDIFF('minute', LAG(t.created_at) OVER(PARTITION BY t.user_id ORDER BY t.created_at), t.created_at) < 60
    THEN 95
    ELSE 10
  END AS velocity_risk_score
FROM prod_payments.fct_transactions t
WHERE t.created_at >= NOW() - INTERVAL '1 hour';`,
    insight: "Automated step-up 2FA intervention captured 98.4% of synthetic takeover attacks without human agent escalation.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Indhu has an extraordinary ability to distill chaotic multi-source data lakes into crystal clear executive dashboards. Her churn modeling framework saved our company over $1.2M in annual recurring revenue in under two quarters.",
    author: "Rajesh S.",
    role: "VP of Product & Commercial Growth",
    company: "Apex Global Solutions",
    avatarColor: "#9333EA",
  },
  {
    quote: "Working with Indhu elevated our entire analytics culture. Her mastery of Power BI, SQL, and DAX modeling transformed our weekly operations reviews from guesswork into high-velocity strategic decision-making.",
    author: "Elena Rostova",
    role: "Head of Supply Chain Intelligence",
    company: "Vanguard Technologies",
    avatarColor: "#7E22CE",
  },
  {
    quote: "Indhu doesn't just run SQL queries or train models — she deeply understands the business context. Her A/B experimentation framework brought rigorous statistical clarity to every single product release we launched.",
    author: "Michael Chen",
    role: "Senior Engineering Manager",
    company: "FinTech Platform Group",
    avatarColor: "#A855F7",
  },
];
