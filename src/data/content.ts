/**
 * Site content as typed data. Copy is reproduced verbatim from the original
 * portfolio — headings, prose, stat labels, tags, and links are unchanged.
 * Repeated, array-shaped content (stats, pipeline steps, projects) lives here
 * so new entries can be added without touching component markup.
 */
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

export const NAV_LINKS: { id: string; label: string }[] = [
  { id: "intro", label: "About" },
  { id: "case-study-1", label: "XAI Framework" },
  { id: "case-study-2", label: "Intrusion Detection" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const CONTACT = {
  email: "lesnartambun1808@gmail.com",
  linkedin: { label: "Lesnar Tambun", href: "https://www.linkedin.com/in/lesnar-tambun" },
  instagram: { label: "@lee.snar", href: "https://instagram.com/lee.snar" },
};

export const HERO = {
  name: "I’m Lesnar,",
  role: "AI/ML Engineer & Data Engineer",
  quote:
    "“Think of me as the bridge between raw data and decisions you can trust — accuracy on one hand, explainability on the other.”",
};

export const INTRO =
  "As an AI/ML Engineer and Data Engineer, I turn messy data into evaluated, explainable systems that people can actually rely on. My work spans model development, pipeline engineering, and validation — from training a classifier to proving its explanation holds up under scrutiny. Every project starts with the problem, not the algorithm, and follows a structured process from data understanding to deployment. I believe the best ML systems are the ones where accuracy and trustworthiness are treated as equally important.";

export const TEASERS: Teaser[] = [
  {
    title: "Multi-Layer XAI Validation Framework",
    blurb:
      "a research framework that audits SHAP and LIME explanations instead of trusting them blindly — combining stability testing, LLM-based semantic validation, and clinician review for heart disease classification.",
    ph: "placeholder — SHAP summary plot\nadd asset",
    src: asset("/assets/xai-framework-card-asset.png"),
    alt: "SHAP summary plot for the heart-disease XAI model",
  },
  {
    title: "Network Intrusion Detection & Risk Scoring",
    blurb:
      "a machine learning system that turns 47,700 raw network logs into a prioritized threat dashboard — cutting the security team’s actionable alert queue by 98%.",
    ph: "placeholder — Looker Studio dashboard\nadd asset",
    src: asset("/assets/network-intrusion-card-asset.png"),
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
  { value: "3.05 / 5", label: "GPT-4 Semantic Alignment (partially aligned, ~60% plausible)" },
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
  { value: "99.80%", label: "Random Forest accuracy" },
  { value: "99.96%", label: "Random Forest recall" },
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
          "Scraped Tokopedia reviews, then classified sentiment (positive / negative / neutral) with TF-IDF and a deep learning model. >85% test accuracy.",
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
          "Led ML integration for a real-time CNN classifier (organik / non-organik / B3) via live camera. Deployed to SavedModel, TF.js, and TFLite. React frontend, Flask backend.",
        tags: ["TensorFlow", "CNN", "React", "Flask", "TFLite"],
        repo: { label: "github.com/ArayaFeisa/Pilahin — team repo", href: "https://github.com/ArayaFeisa/Pilahin" },
      },
      {
        title: "Food Image Classifier",
        body:
          "MobileNetV2 transfer learning on Food-101. 95.31% test accuracy, exported to TFLite and TensorFlow.js.",
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
        repo: { label: "github.com/leesnar/submission-proyek-analisis-data", href: "https://github.com/leesnar/submission-proyek-analisis-data" },
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
