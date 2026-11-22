import { figures, type ProjectFigure } from "./figures";

export type ProjectLink = {
  label: string;
  href: string;
};

export type FeaturedProject = {
  placement: "featured";
  slug: string;
  cardId: string;
  title: string;
  disciplines: string[];
  role: string;
  problem: string;
  contribution: string;
  finding: string;
  tools: string[];
  links: ProjectLink[];
  evidenceValue: string;
  evidenceLabel: string;
  evidenceSource: ProjectLink;
  figure?: ProjectFigure;
};

type AdditionalProject = {
  placement: "supporting" | "archive";
  slug: string;
  title: string;
  body: string;
  tools: string[];
  links: ProjectLink[];
};

const vinixRepo = "https://github.com/leesnar/network-intrusion-detection";
const airRepo = "https://github.com/leesnar/proyek-analisis-data";
const xaiPaper = "https://garuda.kemdiktisaintek.go.id/documents/detail/6714990";

const projects: (FeaturedProject | AdditionalProject)[] = [
  {
    placement: "featured",
    slug: "network-intrusion-risk-scoring",
    cardId: "work-vinix7",
    figure: figures.executive,
    title: "Network Intrusion Detection & Risk Scoring",
    disciplines: ["Business Intelligence", "Data Analytics"],
    role: "Data Analyst Intern · VINIX7, Group 1",
    problem: "Which benchmark connections should an analyst review first?",
    contribution: "I analyzed network records and developed a three-page Looker Studio dashboard as part of the internship team.",
    finding: "Of 25,192 scored benchmark connections, 210 fell in the highest priority band.",
    tools: ["Looker Studio", "Python", "scikit-learn"],
    evidenceValue: "210",
    evidenceLabel: "P1 connections out of 25,192 scored in the benchmark",
    evidenceSource: {
      label: "Dashboard totals",
      href: vinixRepo + "/blob/d8043063c67602357a6dde811cbd06addc5c68a9/looker-clone/data/dashboard_summary.csv",
    },
    links: [
      { label: "View dashboard", href: "https://datastudio.google.com/reporting/84f35273-54e0-43ab-8299-20e5a075e41f" },
      { label: "View code", href: vinixRepo },
    ],
  },
  {
    placement: "featured",
    slug: "air-quality-analysis",
    cardId: "work-air-quality",
    figure: figures.airMonthly,
    title: "Air Quality Analysis",
    disciplines: ["Data Analytics"],
    role: "Independent study · Dicoding / DBS",
    problem: "How did particulate pollution vary across seasons at Beijing’s Wanshouxigong station?",
    contribution: "I explored four years of hourly measurements and built a dashboard to compare monthly distributions and pollutant correlations.",
    finding: "PM2.5 concentrations tended to be higher in winter at this station.",
    tools: ["Pandas", "Streamlit", "Seaborn"],
    evidenceValue: "Higher winter PM2.5",
    evidenceLabel: "Notebook plot of monthly PM2.5 (µg/m³) at Wanshouxigong, March 2013–February 2017",
    evidenceSource: {
      label: "Analysis notebook",
      href: figures.airMonthly.source,
    },
    links: [{ label: "View code", href: airRepo }],
  },
  {
    placement: "featured",
    slug: "xai-validation-framework",
    cardId: "work-xai",
    figure: figures.stability,
    title: "Multi-Layer XAI Validation Framework",
    disciplines: ["Data Science"],
    role: "Undergraduate thesis researcher · Universitas Brawijaya",
    problem: "Do explanations of a heart-disease classifier remain consistent when its inputs change slightly?",
    contribution: "I compared SHAP and LIME across repeated perturbations and combined that analysis with semantic assessment and domain-expert review.",
    finding: "SHAP retained a more consistent top-five feature set than LIME in the experiment.",
    tools: ["XGBoost", "SHAP", "LIME"],
    evidenceValue: "0.7184 / 0.6103",
    evidenceLabel: "Mean top-five Jaccard stability for SHAP / LIME across 20 cases and 30 perturbations per case",
    evidenceSource: { label: "Published research", href: xaiPaper },
    links: [{ label: "Read publication", href: xaiPaper }],
  },
  {
    placement: "supporting",
    slug: "etl-data-pipeline",
    title: "ETL Data Pipeline",
    body: "I built a Python pipeline to clean and validate fashion product records, convert prices, and export to CSV, Google Sheets, and PostgreSQL.",
    tools: ["Python", "Pandas", "pytest"],
    links: [{ label: "View code", href: "https://github.com/leesnar/etl-data-pipeline" }],
  },
  {
    placement: "supporting",
    slug: "groundedrag",
    title: "GroundedRAG",
    body: "A citation-grounded assistant for aquaculture documents. I tested retrieval and answer quality on 43 internal questions. It correctly abstained on all eight unanswerable questions.",
    tools: ["LangChain", "Chroma", "FastAPI"],
    links: [
      { label: "View code", href: "https://github.com/leesnar/GroundedRAG" },
      { label: "Evaluation report", href: "https://github.com/leesnar/GroundedRAG/blob/ae9719b5f633ccce393301ba0c04b59ed6b9ef06/eval/results/report.md" },
    ],
  },
  {
    placement: "supporting",
    slug: "tokopedia-sentiment",
    title: "Tokopedia Review Sentiment",
    body: "I cleaned Indonesian app reviews, assigned sentiment labels with a lexicon, and compared LSTM, CNN, and bidirectional GRU classifiers.",
    tools: ["Python", "TensorFlow", "NLP"],
    links: [{ label: "View code", href: "https://github.com/leesnar/proyek-analisis-sentimen" }],
  },
  {
    placement: "archive",
    slug: "movie-recommender",
    title: "Movie Recommendation System",
    body: "A MovieLens prototype comparing content-based recommendations with collaborative filtering.",
    tools: ["scikit-learn", "TF-IDF"],
    links: [{ label: "View code", href: "https://github.com/leesnar/proyek-sistem-rekomendasi" }],
  },
  {
    placement: "archive",
    slug: "diabetes-risk",
    title: "Diabetes Risk Classification",
    body: "I compared KNN, Random Forest, and AdaBoost on the PIMA dataset and examined the predictors behind their classifications.",
    tools: ["scikit-learn"],
    links: [{ label: "View code", href: "https://github.com/leesnar/project-predictive-analytics" }],
  },
  {
    placement: "archive",
    slug: "pilahin",
    title: "Pilahin Waste Classifier",
    body: "As the team’s model deployer, I integrated TensorFlow.js predictions into the browser interface for uploaded images and webcam inputs.",
    tools: ["TensorFlow.js", "JavaScript"],
    links: [{ label: "Team repository", href: "https://github.com/ArayaFeisa/Pilahin" }],
  },
  {
    placement: "archive",
    slug: "food-image-classifier",
    title: "Food Image Classifier",
    body: "I adapted MobileNetV2 to three Food-101 classes and exported the classifier for browser and mobile use.",
    tools: ["MobileNetV2", "TensorFlow"],
    links: [{ label: "View code", href: "https://github.com/leesnar/proyek-klasifikasi-gambar" }],
  },
];

export const featuredProjects = projects.filter((project): project is FeaturedProject => project.placement === "featured");
export const supportingProjects = projects.filter((project): project is AdditionalProject => project.placement === "supporting");
export const archivedProjects = projects.filter((project): project is AdditionalProject => project.placement === "archive");
