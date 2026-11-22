export type ProjectFigure = { file: string; width: number; height: number; alt: string; caption: string; source: string; sourceLabel: string };
const dashboard = "https://datastudio.google.com/reporting/84f35273-54e0-43ab-8299-20e5a075e41f";
const airNotebook = "https://github.com/leesnar/proyek-analisis-data/blob/9be999561126d075de274a5689c8facea67d56c1/notebook.ipynb";
const paper = "https://garuda.kemdiktisaintek.go.id/documents/detail/6714990";

export const figures = {
  executive: {
    file: "dash-executive.jpg", width: 1500, height: 1126,
    alt: "Executive Overview with traffic totals, model flags, priority bands and a ranked record table.",
    caption: "The team’s Executive Overview shows 25,192 scored connections and 2,520 Isolation Forest flags. The displayed health index, 76.86, equals 100 minus the mean risk score of 23.14.",
    source: dashboard, sourceLabel: "Looker Studio dashboard",
  },
  traffic: {
    file: "dash-traffic.jpg", width: 1500, height: 1126,
    alt: "Traffic Analysis with protocol and flag distributions, service counts and a protocol-by-priority table.",
    caption: "TCP accounts for 209 of the 210 records in the highest priority band in this traffic view. One UDP record accounts for the remainder.",
    source: dashboard, sourceLabel: "Looker Studio dashboard",
  },
  threat: {
    file: "dash-ml-threat.jpg", width: 1500, height: 1126,
    alt: "Model comparison view with classifier scores, feature importance and a risk score distribution.",
    caption: "The team’s model view reports 99.80% Random Forest accuracy on 5,039 held-out connections. Its 99.96% recall is for normal traffic.",
    source: dashboard, sourceLabel: "Looker Studio dashboard",
  },
  airMonthly: {
    file: "air-monthly-notebook.png", width: 859, height: 547,
    alt: "Twelve monthly box plots of hourly PM2.5 in µg/m³ show wider winter distributions and high outliers throughout the year.",
    caption: "Saved notebook output. Each box groups hourly PM2.5 readings by calendar month at Wanshouxigong, March 2013–February 2017. Winter months tended to have higher concentrations. The notebook carried the previous reading forward for missing values.",
    source: airNotebook, sourceLabel: "View analysis notebook",
  },
  airCorrelations: {
    file: "air-correlations-notebook.png", width: 776, height: 682,
    alt: "A six-pollutant correlation matrix shows positive associations between PM2.5 and carbon monoxide and between PM2.5 and nitrogen dioxide.",
    caption: "Saved notebook output. At Wanshouxigong, hourly PM2.5 tended to rise with carbon monoxide and nitrogen dioxide. The matrix uses Pearson correlations for the same four-year series after forward-filling missing readings.",
    source: airNotebook, sourceLabel: "View analysis notebook",
  },
  stability: {
    file: "jaccard-bar.png", width: 690, height: 510,
    alt: "Two bars show higher average top-five feature overlap for SHAP (0.7184) than LIME (0.6103).",
    caption: "Across 20 test cases and 30 perturbations per case, SHAP retained a more consistent set of top-five features. Higher Jaccard overlap means more features stayed in the set.",
    source: paper, sourceLabel: "Coauthored publication",
  },
  roc: {
    file: "roc-comparison.png", width: 1200, height: 893,
    alt: "ROC curves on the holdout show an area under the curve of 0.9405 for Random Forest and 0.9156 for XGBoost.",
    caption: "Random Forest ranked cases more accurately across thresholds on the 61-record holdout. XGBoost identified one more positive case at the evaluation threshold.",
    source: paper, sourceLabel: "Coauthored publication",
  },
  importance: {
    file: "shap-bar.png", width: 1176, height: 1398,
    alt: "Features ranked by mean absolute SHAP value. The encoded ca_0.0 and cp_4.0 indicators lead, followed by age.",
    caption: "The aggregate SHAP chart ranks features by the magnitude of their contributions to model output. It does not establish clinical causes.",
    source: paper, sourceLabel: "Coauthored publication",
  },
} satisfies Record<string, ProjectFigure>;
