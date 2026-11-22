/** Shared profile content. Inactive legacy sections still use the compatibility data at the end. */
import { asset } from "../lib/asset";


export type StatItem = { value: string; label: string };
export type StepItem = { n: string; title: string; body?: string; variant?: "soft" | "solid" };
export type LinkItem = { label: string; href: string };
export type Teaser = { title: string; blurb: string; ph: string; src?: string; alt?: string };

export type ProjectItem = {
  title: string;
  meta?: string;
  body: string;
  tags: string[];
  repo?: LinkItem;
  demo?: LinkItem;
  /** labelled placeholder shown in place of a live-demo link that doesn't exist yet */
  phLink?: string;
  dim?: boolean;
  bonus?: boolean;
};
export type ProjectCategory = {
  title: string;
  note?: string;
  dim?: boolean;
  faintRule?: boolean;
  projects: ProjectItem[];
};

export const NAV_LINKS = [
  { id: "top", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "intro", label: "About" },
  { id: "contact", label: "Contact" },
];

export const CONTACT = {
  email: "lesnartambun1808@gmail.com",
  linkedin: { label: "Lesnar Tambun", href: "https://www.linkedin.com/in/lesnar-tambun" },
  github: { label: "GitHub", href: "https://github.com/leesnar" },
  instagram: { label: "@lee.snar", href: "https://instagram.com/lee.snar" },
};

export const cvDownloadUrl = asset("cv/lesnar-tambun-cv.pdf");

export const HERO = {
  name: "Lesnar Tambun",
  role: "Data Analytics · Business Intelligence · Data Science",
  quote: "I analyze data, build dashboards, and test how reliably models explain their predictions.",
};

export const INTRO =
  "I start by asking who needs the answer and what decision they face. I inspect the data, choose a method that fits the question, and show the assumptions and limitations alongside the findings.";

type CareerItem = {
  title: string;
  organization: string;
  dates?: string;
  bullets: string[];
  work?: LinkItem;
};

export const CAREER: CareerItem[] = [
  {
    title: "Data Analyst Intern",
    organization: "PT Vinix Seven Aurum (VINIX7)",
    dates: "April–June 2026",
    bullets: ["Analyzed labeled network connections and compared classification models.", "Developed a three-page Looker Studio dashboard within the internship team."],
    work: { label: "Internship case study", href: asset("projects/network-intrusion-risk-scoring/") },
  },
  {
    title: "Bachelor of Computer Science",
    organization: "Universitas Brawijaya",
    dates: "September 2022–July 2026",
    bullets: ["GPA 3.72 / 4.00", "Undergraduate thesis on validating explanations of heart-disease predictions."],
    work: { label: "Thesis case study", href: asset("projects/xai-validation-framework/") },
  },
  {
    title: "Independent Study",
    organization: "Dicoding / DBS Foundation",
    bullets: ["Analyzed hourly air-quality measurements and built an interactive dashboard."],
    work: { label: "Air Quality case study", href: asset("projects/air-quality-analysis/") },
  },
];

export const CAPABILITIES = [
  {
    title: "Data Analytics",
    body: "Data cleaning, exploratory analysis, and working knowledge of SQL.",
    links: [{ label: "Air Quality Analysis", href: "#work-air-quality" }, { label: "ETL Data Pipeline", href: "#support-etl-data-pipeline" }],
  },
  {
    title: "Business Intelligence",
    body: "Metric definitions, priority scoring, and dashboard design in Looker Studio.",
    links: [{ label: "Network risk dashboard", href: "#work-vinix7" }],
  },
  {
    title: "Data Science",
    body: "Classification, model evaluation, and explanation stability with SHAP and LIME.",
    links: [{ label: "XAI Validation Framework", href: "#work-xai" }],
  },
];

export const CREDENTIALS = [
  { title: "Google Data Analytics", date: "September 8, 2026", isoDate: "2026-09-08", href: "https://coursera.org/verify/professional-cert/2AOZ6T9AINLX" },
  { title: "Google Advanced Data Analytics", date: "September 9, 2026", isoDate: "2026-09-09", href: "https://coursera.org/verify/professional-cert/68LYI7MFG8MB" },
];

export const TEASERS: Teaser[] = [
  {
    title: "Multi-Layer XAI Validation Framework",
    blurb:
      "a research framework that audits SHAP and LIME explanations instead of trusting them blindly — combining stability testing, LLM-based semantic validation, and clinician review for heart disease classification.",
    ph: "placeholder — SHAP summary plot\nadd asset",
    src: /* @__PURE__ */ asset("/assets/xai-framework-card-asset.png"),
    alt: "SHAP summary plot for the heart-disease XAI model",
  },
  {
    title: "Network Intrusion Detection & Risk Scoring",
    blurb:
      "a team project that scored 25,192 benchmark connections and displayed their priority bands in Looker Studio.",
    ph: "placeholder — Looker Studio dashboard\nadd asset",
    src: /* @__PURE__ */ asset("/assets/network-intrusion-card-asset.png"),
    alt: "Network intrusion detection threat dashboard in Looker Studio",
  },
];

/* ---- Case Study 1 — Multi-Layer XAI Validation Framework ---- */

export const CS1_PIPELINE: StepItem[] = [
  { n: "01", title: "Raw Data" },
  { n: "02", title: "ColumnTransformer", body: "numeric: KNNImputer + MinMaxScaler / categorical: SimpleImputer + One-Hot" },
  { n: "03", title: "SMOTE", body: "train folds only, inside ImbPipeline" },
  { n: "04", title: "GridSearchCV", body: "5-fold Stratified CV — RF: 36 combos, XGBoost: 162 combos → 990 total fits" },
  { n: "05", title: "Champion Model Selection", body: "by recall", variant: "soft" },
  { n: "06", title: "SHAP / LIME Interpretation", variant: "soft" },
  { n: "07", title: "Multi-Layer Validation", variant: "soft" },
  { n: "08", title: "Final Artifact", variant: "solid" },
];

export const CS1_EVAL_STATS: StatItem[] = [
  { value: "92.86%", label: "XGBoost Recall (Champion Model)" },
  { value: "0.7184", label: "SHAP Stability (Jaccard Index) vs LIME 0.6103" },
  { value: "ρ = 0.7887", label: "Cross-Method Consistency (Spearman, p < 1e-6)" },
];

/* ---- Case Study 2 — Network Intrusion Detection & Risk Scoring ---- */

export const CS2_EXEC_STATS: StatItem[] = [
  { value: "25,192", label: "Total Traffic" },
  { value: "2,520", label: "Model-Flagged Anomaly Traffic" },
  { value: "23.14", label: "Average Risk Score" },
  { value: "76.86", label: "Security Health Index" },
];

export const CS2_DATA_FLOW: StepItem[] = [
  { n: "01", title: "Raw Logs" },
  { n: "02", title: "Preprocessing" },
  { n: "03", title: "Random Forest Classification" },
  { n: "04", title: "Isolation Forest Risk Scoring", variant: "soft" },
  { n: "05", title: "Priority Mapping", body: "P1–P4", variant: "soft" },
  { n: "06", title: "Dashboard", variant: "solid" },
];

export const CS2_BUILD_STATS: StatItem[] = [
  { value: "99.80%", label: "Random Forest accuracy on 5,039 validation records" },
  { value: "99.96%", label: "Normal-class Random Forest recall on 5,039 validation records" },
];

/* ---- Selected projects ---- */

export const FLAGSHIP = {
  title: "GroundedRAG — Citation-Grounded Aquaculture Assistant",
  meta: "LLM / RAG · Applied AI",
  lead:
    "A retrieval-augmented assistant that answers aquaculture questions with citations from 7 FAO/CGIAR technical documents (840 pages, 3,107 chunks) — and explicitly abstains (“I don’t have enough information”) when the corpus can’t support an answer, instead of hallucinating.",
  metrics: [
    { value: "95.2%", label: "Faithfulness" },
    { value: "91.4%", label: "Recall@k" },
    { value: "4.8%", label: "Hallucination rate" },
    { value: "100%", label: "Abstention accuracy" },
    { value: "0.79", label: "MRR" },
  ] as StatItem[],
  metricsNote: "Metrics measured on a 43-question gold set",
  tags: ["FastAPI", "LangChain", "Chroma", "Docker", "GitHub Actions CI eval gate", "Streamlit"],
  links: [
    { label: "GitHub — github.com/leesnar/GroundedRAG", href: "https://github.com/leesnar/GroundedRAG" },
    { label: "Live demo — huggingface.co/spaces/snarrr/groundedRAG", href: "https://huggingface.co/spaces/snarrr/groundedRAG" },
  ] as LinkItem[],
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  {
    title: "Data Engineering",
    projects: [
      {
        title: "ETL Data Pipeline",
        body:
          "Extract-transform-load pipeline in Python with unit tests (pytest + coverage), scheduled cron runs, and a Google Sheets API sink.",
        tags: ["Python", "pytest", "ETL", "Google Sheets API"],
      },
    ],
  },
  {
    title: "Natural Language Processing",
    projects: [
      {
        title: "App Review Sentiment Analysis",
        body:
          "Scraped Tokopedia reviews, then classified sentiment (positive / negative / neutral) with TF-IDF and a deep learning model.",
        tags: ["NLP", "TensorFlow", "Web Scraping"],
        repo: { label: "github.com/leesnar/proyek-analisis-sentimen", href: "https://github.com/leesnar/proyek-analisis-sentimen" },
      },
    ],
  },
  {
    title: "Computer Vision & Deep Learning",
    projects: [
      {
        title: "Pilahin — Real-Time Waste Classifier",
        meta: "Capstone, Coding Camp 2025",
        body:
          "Integrated browser predictions as the team’s model deployer for a real-time CNN classifier (organik / non-organik / B3) via live camera. Deployed to SavedModel, TF.js, and TFLite. React frontend, Flask backend.",
        tags: ["TensorFlow", "CNN", "React", "Flask", "TFLite"],
        repo: { label: "github.com/ArayaFeisa/Pilahin — team repo", href: "https://github.com/ArayaFeisa/Pilahin" },
      },
      {
        title: "Food Image Classifier",
        body:
          "MobileNetV2 transfer learning on Food-101. The classifier was exported to TFLite and TensorFlow.js.",
        tags: ["TensorFlow", "MobileNetV2", "Transfer Learning"],
        repo: { label: "github.com/leesnar/proyek-klasifikasi-gambar", href: "https://github.com/leesnar/proyek-klasifikasi-gambar" },
      },
    ],
  },
  {
    title: "Data Analysis, Recommenders & Predictive Modeling",
    projects: [
      {
        title: "Air Quality Analysis + Live Dashboard",
        body:
          "EDA on Beijing Wanshouxigong station data (2013–2017): PM2.5 trends, seasonality, pollutant correlations. Shipped as a live Streamlit dashboard.",
        tags: ["Pandas", "Streamlit", "EDA"],
        demo: { label: "Live demo — https://submission-air-quality.streamlit.app/", href: "https://submission-air-quality.streamlit.app/" },
        repo: { label: "github.com/leesnar/proyek-analisis-data", href: "https://github.com/leesnar/proyek-analisis-data" },
      },
      {
        title: "Movie Recommendation System",
        body: "Content-based (TF-IDF + cosine similarity) and collaborative filtering built side by side for comparison.",
        tags: ["scikit-learn", "TF-IDF"],
        repo: { label: "github.com/leesnar/proyek-sistem-rekomendasi", href: "https://github.com/leesnar/proyek-sistem-rekomendasi" },
      },
      {
        title: "Diabetes Risk Classification",
        body: "Compared KNN, Random Forest, and AdaBoost on the PIMA dataset; Glucose, BMI, and Age as top predictors.",
        tags: ["scikit-learn", "KNN", "AdaBoost"],
        repo: { label: "github.com/leesnar/project-predictive-analytics", href: "https://github.com/leesnar/project-predictive-analytics" },
      },
    ],
  },
  {
    title: "Quantitative & Software Engineering",
    note: "(bonus / optional)",
    dim: true,
    faintRule: true,
    projects: [
      {
        title: "Smart Money Concepts Expert Advisor",
        bonus: true,
        dim: true,
        body:
          "Automated trading system in MQL5 with a companion Pine Script indicator — a multi-timeframe state machine with risk-percent position sizing and three execution modes.",
        tags: ["MQL5", "Pine Script v5", "State Machine"],
      },
    ],
  },
];
